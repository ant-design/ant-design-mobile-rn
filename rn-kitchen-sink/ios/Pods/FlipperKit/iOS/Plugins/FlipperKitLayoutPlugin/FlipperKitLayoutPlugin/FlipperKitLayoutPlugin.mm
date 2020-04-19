/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#if FB_SONARKIT_ENABLED

#import "FlipperKitLayoutPlugin.h"

#import <FlipperKit/FlipperClient.h>
#import <FlipperKit/FlipperConnection.h>
#import <FlipperKit/FlipperResponder.h>
#import <FlipperKit/SKMacros.h>
#import <mutex>
#import "SKDescriptorMapper.h"
#import "SKNodeDescriptor.h"
#import "SKSearchResultNode.h"
#import "SKTapListener.h"
#import "SKTapListenerImpl.h"

@implementation FlipperKitLayoutPlugin {
  NSMapTable<NSString*, id>* _trackedObjects;
  NSString* _lastHighlightedNode;
  NSMutableSet* _invalidObjects;
  Boolean _invalidateMessageQueued;
  NSDate* _lastInvalidateMessage;
  std::mutex invalidObjectsMutex;

  id<NSObject> _rootNode;
  id<SKTapListener> _tapListener;

  id<FlipperConnection> _connection;

  NSMutableSet* _registeredDelegates;
}

- (instancetype)initWithRootNode:(id<NSObject>)rootNode
            withDescriptorMapper:(SKDescriptorMapper*)mapper {
  return [self initWithRootNode:rootNode
                withTapListener:[SKTapListenerImpl new]
           withDescriptorMapper:mapper];
}

- (instancetype)initWithRootNode:(id<NSObject>)rootNode
                 withTapListener:(id<SKTapListener>)tapListener
            withDescriptorMapper:(SKDescriptorMapper*)mapper {
  if (self = [super init]) {
    _descriptorMapper = mapper;
    _trackedObjects = [NSMapTable strongToWeakObjectsMapTable];
    _lastHighlightedNode = nil;
    _invalidObjects = [NSMutableSet new];
    _invalidateMessageQueued = false;
    _lastInvalidateMessage = [NSDate date];
    _rootNode = rootNode;
    _tapListener = tapListener;

    _registeredDelegates = [NSMutableSet new];
    [SKInvalidation sharedInstance].delegate = self;
  }

  return self;
}

- (NSString*)identifier {
  return @"Inspector";
}

- (void)didConnect:(id<FlipperConnection>)connection {
  _connection = connection;

  if (!_rootNode) {
    // TODO: T61384369 get rid off this if condition.
    _rootNode = [UIApplication sharedApplication];
  }

  [SKInvalidation enableInvalidations];

  // Run setup logic for each descriptor
  for (SKNodeDescriptor* descriptor in _descriptorMapper.allDescriptors) {
    [descriptor setUp];
  }

  // In order to avoid a retain cycle (Connection -> Block ->
  // FlipperKitLayoutPlugin -> Connection ...)
  __weak FlipperKitLayoutPlugin* weakSelf = self;

  [connection receive:@"getRoot"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [weakSelf onCallGetRoot:responder];
                  },
                  responder);
            }];

  [connection receive:@"getAllNodes"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [weakSelf onCallGetAllNodesWithResponder:responder];
                  },
                  responder);
            }];

  [connection receive:@"getNodes"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [weakSelf onCallGetNodes:params[@"ids"]
                               withResponder:responder];
                  },
                  responder);
            }];

  [connection receive:@"setData"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [weakSelf onCallSetData:params[@"id"]
                                   withPath:params[@"path"]
                                    toValue:params[@"value"]
                             withConnection:connection];
                  },
                  responder);
            }];

  [connection receive:@"setHighlighted"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [weakSelf onCallSetHighlighted:params[@"id"]
                                     withResponder:responder];
                  },
                  responder);
            }];

  [connection receive:@"setSearchActive"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [weakSelf
                        onCallSetSearchActive:[params[@"active"] boolValue]
                               withConnection:connection];
                  },
                  responder);
            }];

  [connection receive:@"isSearchActive"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [weakSelf onCallIsSearchActiveWithConnection:responder];
                  },
                  responder);
            }];

  [connection receive:@"isConsoleEnabled"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [responder success:@{@"isEnabled" : @NO}];
                  },
                  responder);
            }];

  [connection receive:@"getSearchResults"
            withBlock:^(NSDictionary* params, id<FlipperResponder> responder) {
              FlipperPerformBlockOnMainThread(
                  ^{
                    [weakSelf onCallGetSearchResults:params[@"query"]
                                       withResponder:responder];
                  },
                  responder);
            }];
}

- (void)didDisconnect {
  // Clear the last highlight if there is any
  [self onCallSetHighlighted:nil withResponder:nil];
  // Disable search if it is active
  [self onCallSetSearchActive:NO withConnection:nil];
}

- (void)onCallGetRoot:(id<FlipperResponder>)responder {
  const auto rootNode = [self getNode:[self trackObject:_rootNode]];

  [responder success:rootNode];
}

- (void)populateAllNodesFromNode:(nonnull NSString*)identifier
                    inDictionary:
                        (nonnull NSMutableDictionary<NSString*, NSDictionary*>*)
                            mutableDict {
  NSDictionary* nodeDict = [self getNode:identifier];
  mutableDict[identifier] = nodeDict;
  NSArray* arr = nodeDict[@"children"];
  for (NSString* childIdentifier in arr) {
    [self populateAllNodesFromNode:childIdentifier inDictionary:mutableDict];
  }
  return;
}

- (void)populateAllNodesFromNode:(nonnull NSString*)identifier
                         inArray:(nonnull NSMutableArray<NSDictionary*>*)
                                     mutableArray {
  NSDictionary* nodeDict = [self getNode:identifier];
  if (nodeDict == nil) {
    return;
  }
  [mutableArray addObject:nodeDict];
  NSArray* children = nodeDict[@"children"];
  for (NSString* childIdentifier in children) {
    [self populateAllNodesFromNode:childIdentifier inArray:mutableArray];
  }
}

- (void)onCallGetAllNodesWithResponder:(nonnull id<FlipperResponder>)responder {
  NSMutableArray<NSDictionary*>* allNodes = @[].mutableCopy;
  NSString* identifier = [self trackObject:_rootNode];
  NSDictionary* rootNode = [self getNode:identifier];
  if (!rootNode) {
    return [responder error:@{
      @"error" : [NSString
          stringWithFormat:
              @"getNode returned nil for the rootNode %@, while getting all the nodes",
              identifier]
    }];
  }
  [allNodes addObject:rootNode];
  NSMutableDictionary* allNodesDict = @{}.mutableCopy;
  [self populateAllNodesFromNode:identifier inDictionary:allNodesDict];
  [responder success:@{
    @"allNodes" : @{@"rootElement" : identifier, @"elements" : allNodesDict}
  }];
}

- (NSMutableArray*)getChildrenForNode:(id)node
                       withDescriptor:(SKNodeDescriptor*)descriptor {
  NSMutableArray* children = [NSMutableArray new];
  for (NSUInteger i = 0; i < [descriptor childCountForNode:node]; i++) {
    id childNode = [descriptor childForNode:node atIndex:i];

    NSString* childIdentifier = [self trackObject:childNode];
    if (childIdentifier) {
      [children addObject:childIdentifier];
    }
  }
  return children;
}

- (void)onCallGetNodes:(NSArray<NSDictionary*>*)nodeIds
         withResponder:(id<FlipperResponder>)responder {
  NSMutableArray<NSDictionary*>* elements = [NSMutableArray new];

  for (id nodeId in nodeIds) {
    const auto node = [self getNode:nodeId];
    if (node == nil) {
      continue;
    }
    [elements addObject:node];
  }

  [responder success:@{@"elements" : elements}];
}

- (void)onCallSetData:(NSString*)objectId
             withPath:(NSArray<NSString*>*)path
              toValue:(id<NSObject>)value
       withConnection:(id<FlipperConnection>)connection {
  id node = [_trackedObjects objectForKey:objectId];
  if (node == nil) {
    SKLog(@"node is nil, trying to setData: \
          objectId: %@ \
          path: %@ \
          value: %@", objectId, path, value);
    return;
  }

  // Sonar sends nil/NSNull on some values when the text-field
  // is empty, disregard these changes otherwise we'll crash.
  if (value == nil || [value isKindOfClass:[NSNull class]]) {
    return;
  }

  SKNodeDescriptor* descriptor =
      [_descriptorMapper descriptorForClass:[node class]];

  NSString* dotJoinedPath = [path componentsJoinedByString:@"."];
  SKNodeUpdateData updateDataForPath =
      [[descriptor dataMutationsForNode:node] objectForKey:dotJoinedPath];
  if (updateDataForPath != nil) {
    const auto identifierForInvalidation =
        [descriptor identifierForInvalidation:node];
    id nodeForInvalidation =
        [_trackedObjects objectForKey:identifierForInvalidation];
    SKNodeDescriptor* descriptorForInvalidation =
        [_descriptorMapper descriptorForClass:[nodeForInvalidation class]];
    updateDataForPath(value);

    NSMutableArray* nodesForInvalidation = [NSMutableArray new];
    [self populateAllNodesFromNode:[descriptorForInvalidation
                                       identifierForNode:nodeForInvalidation]
                           inArray:nodesForInvalidation];
    [connection send:@"invalidateWithData"
          withParams:@{@"nodes" : nodesForInvalidation}];
  }
}

- (void)onCallGetSearchResults:(NSString*)query
                 withResponder:(id<FlipperResponder>)responder {
  const auto alreadyAddedElements = [NSMutableSet<NSString*> new];
  SKSearchResultNode* matchTree =
      [self searchForQuery:(NSString*)[query lowercaseString]
                          fromNode:(id)_rootNode
          withElementsAlreadyAdded:alreadyAddedElements];

  [responder success:@{
    @"results" : [matchTree toNSDictionary] ?: [NSNull null],
    @"query" : query
  }];
  return;
}

- (void)onCallSetHighlighted:(NSString*)objectId
               withResponder:(id<FlipperResponder>)responder {
  if (_lastHighlightedNode != nil) {
    id lastHighlightedObject =
        [_trackedObjects objectForKey:_lastHighlightedNode];
    if (lastHighlightedObject == nil) {
      [responder error:@{@"error" : @"unable to get last highlighted object"}];
      return;
    }

    SKNodeDescriptor* descriptor = [self->_descriptorMapper
        descriptorForClass:[lastHighlightedObject class]];
    [descriptor setHighlighted:NO forNode:lastHighlightedObject];

    _lastHighlightedNode = nil;
  }

  if (objectId == nil || [objectId isKindOfClass:[NSNull class]]) {
    return;
  }

  id object = [_trackedObjects objectForKey:objectId];
  if (object == nil) {
    SKLog(@"tried to setHighlighted for untracked id, objectId: %@", objectId);
    return;
  }

  SKNodeDescriptor* descriptor =
      [self->_descriptorMapper descriptorForClass:[object class]];
  [descriptor setHighlighted:YES forNode:object];

  _lastHighlightedNode = objectId;
}

- (void)onCallSetSearchActive:(BOOL)active
               withConnection:(id<FlipperConnection>)connection {
  if (active) {
    [_tapListener mountWithFrame:[[UIScreen mainScreen] bounds]];
    __block id<NSObject> rootNode = _rootNode;

    [_tapListener listenForTapWithBlock:^(CGPoint touchPoint) {
      SKTouch* touch = [[SKTouch alloc]
            initWithTouchPoint:touchPoint
                  withRootNode:rootNode
          withDescriptorMapper:self->_descriptorMapper
               finishWithBlock:^(NSArray<NSString*>* path) {
                 [connection send:@"select" withParams:@{@"path" : path}];
               }];

      SKNodeDescriptor* descriptor =
          [self->_descriptorMapper descriptorForClass:[rootNode class]];
      [descriptor hitTest:touch forNode:rootNode];
    }];
  } else {
    [_tapListener unmount];
  }
}

- (void)onCallIsSearchActiveWithConnection:(id<FlipperResponder>)responder {
  [responder success:@{@"isSearchActive" : @NO}];
}

- (void)invalidateNode:(id<NSObject>)node {
  SKNodeDescriptor* descriptor =
      [_descriptorMapper descriptorForClass:[node class]];
  if (descriptor == nil) {
    return;
  }

  NSString* nodeId = [descriptor identifierForNode:node];
  if (![_trackedObjects objectForKey:nodeId]) {
    return;
  }
  [descriptor invalidateNode:node];

  // Collect invalidate messages before sending in a batch
  std::lock_guard<std::mutex> lock(invalidObjectsMutex);
  [_invalidObjects addObject:nodeId];
  if (_invalidateMessageQueued) {
    return;
  }
  _invalidateMessageQueued = true;

  if (_lastInvalidateMessage.timeIntervalSinceNow < -1) {
    dispatch_after(
        dispatch_time(DISPATCH_TIME_NOW, 500 * NSEC_PER_MSEC),
        dispatch_get_main_queue(),
        ^{
          [self reportInvalidatedObjects];
        });
  }
}

- (void)reportInvalidatedObjects {
  std::lock_guard<std::mutex> lock(invalidObjectsMutex);
  NSMutableArray* nodes = [NSMutableArray new];
  for (NSString* nodeId in self->_invalidObjects) {
    [nodes addObject:[NSDictionary dictionaryWithObject:nodeId forKey:@"id"]];
  }
  [self->_connection send:@"invalidate"
               withParams:[NSDictionary dictionaryWithObject:nodes
                                                      forKey:@"nodes"]];
  self->_lastInvalidateMessage = [NSDate date];
  self->_invalidObjects = [NSMutableSet new];
  self->_invalidateMessageQueued = false;
  return;
}

- (void)updateNodeReference:(id<NSObject>)node {
  SKNodeDescriptor* descriptor =
      [_descriptorMapper descriptorForClass:[node class]];
  if (descriptor == nil) {
    return;
  }

  NSString* nodeId = [descriptor identifierForNode:node];
  [_trackedObjects setObject:node forKey:nodeId];
}

- (SKSearchResultNode*)searchForQuery:(NSString*)query
                             fromNode:(id)node
             withElementsAlreadyAdded:(NSMutableSet<NSString*>*)alreadyAdded {
  SKNodeDescriptor* descriptor =
      [_descriptorMapper descriptorForClass:[node class]];
  if (node == nil || descriptor == nil) {
    return nil;
  }

  NSMutableArray<SKSearchResultNode*>* childTrees = nil;
  BOOL isMatch = [descriptor matchesQuery:query forNode:node];

  NSString* nodeId = [self trackObject:node];

  for (auto i = 0; i < [descriptor childCountForNode:node]; i++) {
    id child = [descriptor childForNode:node atIndex:i];
    if (child) {
      SKSearchResultNode* childTree = [self searchForQuery:query
                                                  fromNode:child
                                  withElementsAlreadyAdded:alreadyAdded];
      if (childTree != nil) {
        if (childTrees == nil) {
          childTrees = [NSMutableArray new];
        }
        [childTrees addObject:childTree];
      }
    }
  }

  if (isMatch || childTrees != nil) {
    NSDictionary* element = [self getNode:nodeId];
    if (nodeId == nil || element == nil) {
      return nil;
    }
    NSMutableArray<NSString*>* descriptorChildElements =
        [element objectForKey:@"children"];
    NSMutableDictionary* newElement = [element mutableCopy];

    NSMutableArray<NSString*>* childElementsToReturn = [NSMutableArray new];
    for (NSString* child in descriptorChildElements) {
      if (![alreadyAdded containsObject:child]) {
        [alreadyAdded addObject:child]; // todo add all at end
        [childElementsToReturn addObject:child];
      }
    }
    [newElement setObject:childElementsToReturn forKey:@"children"];
    return [[SKSearchResultNode alloc] initWithNode:nodeId
                                            asMatch:isMatch
                                        withElement:newElement
                                        andChildren:childTrees];
  }
  return nil;
}

- (NSDictionary*)getNode:(NSString*)nodeId {
  id<NSObject> node = [_trackedObjects objectForKey:nodeId];
  if (node == nil) {
    SKLog(@"node is nil, no tracked node found for nodeId: %@", nodeId);
    return nil;
  }

  SKNodeDescriptor* nodeDescriptor =
      [_descriptorMapper descriptorForClass:[node class]];
  if (nodeDescriptor == nil) {
    SKLog(@"No registered descriptor for class: %@", [node class]);
    return nil;
  }

  NSMutableArray* attributes = [NSMutableArray new];
  NSMutableDictionary* data = [NSMutableDictionary new];

  const auto* nodeAttributes = [nodeDescriptor attributesForNode:node];
  for (const SKNamed<NSString*>* namedPair in nodeAttributes) {
    const auto name = namedPair.name;
    if (name) {
      const NSDictionary* attribute = @{
        @"name" : name,
        @"value" : namedPair.value ?: [NSNull null],
      };
      [attributes addObject:attribute];
    }
  }

  const auto* nodeData = [nodeDescriptor dataForNode:node];
  for (const SKNamed<NSDictionary*>* namedPair in nodeData) {
    data[namedPair.name] = namedPair.value;
  }

  NSMutableArray* children = [self getChildrenForNode:node
                                       withDescriptor:nodeDescriptor];

  NSDictionary* nodeDic = @{
    // We shouldn't get nil for id/name/decoration, but let's not crash if we
    // do.
    @"id" : [nodeDescriptor identifierForNode:node] ?: @"(unknown)",
    @"name" : [nodeDescriptor nameForNode:node] ?: @"(unknown)",
    @"children" : children,
    @"attributes" : attributes,
    @"data" : data,
    @"decoration" : [nodeDescriptor decorationForNode:node] ?: @"(unknown)",
  };

  return nodeDic;
}

- (NSString*)trackObject:(id)object {
  const SKNodeDescriptor* descriptor =
      [_descriptorMapper descriptorForClass:[object class]];
  NSString* objectIdentifier = [descriptor identifierForNode:object];

  if (objectIdentifier == nil) {
    return nil;
  }

  [_trackedObjects setObject:object forKey:objectIdentifier];

  return objectIdentifier;
}

- (BOOL)runInBackground {
  return true;
}

@end

#endif
