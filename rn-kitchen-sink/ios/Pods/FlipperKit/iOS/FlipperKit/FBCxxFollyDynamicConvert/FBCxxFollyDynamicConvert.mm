/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "FBCxxFollyDynamicConvert.h"

#import <objc/runtime.h>

namespace facebook {
namespace cxxutils {

/*
 * The implementation is taken from RCTFollyConvert(https://fburl.com/vzw8ql2q)
 */

id convertFollyDynamicToId(const folly::dynamic& dyn) {
  // I could imagine an implementation which avoids copies by wrapping the
  // dynamic in a derived class of NSDictionary.  We can do that if profiling
  // implies it will help.

  switch (dyn.type()) {
    case folly::dynamic::NULLT:
      return (id)kCFNull;
    case folly::dynamic::BOOL:
      return dyn.getBool() ? @YES : @NO;
    case folly::dynamic::INT64:
      return @(dyn.getInt());
    case folly::dynamic::DOUBLE:
      return @(dyn.getDouble());
    case folly::dynamic::STRING:
      return [[NSString alloc] initWithBytes:dyn.c_str()
                                      length:dyn.size()
                                    encoding:NSUTF8StringEncoding];
    case folly::dynamic::ARRAY: {
      NSMutableArray* array =
          [[NSMutableArray alloc] initWithCapacity:dyn.size()];
      for (auto& elem : dyn) {
        id obj = convertFollyDynamicToId(elem);
        if (obj) {
          [array addObject:obj];
        }
      }
      return array;
    }
    case folly::dynamic::OBJECT: {
      NSMutableDictionary* dict =
          [[NSMutableDictionary alloc] initWithCapacity:dyn.size()];
      for (auto& elem : dyn.items()) {
        id obj = convertFollyDynamicToId(elem.second);
        if (obj) {
          dict[convertFollyDynamicToId(elem.first)] = obj;
        }
      }
      return dict;
    }
  }
}

folly::dynamic convertIdToFollyDynamic(id json, bool nullifyNanAndInf) {
  if (json == nil || json == (id)kCFNull) {
    return nullptr;
  } else if ([json isKindOfClass:[NSNumber class]]) {
    const char* objCType = [json objCType];
    switch (objCType[0]) {
      // This is a c++ bool or C99 _Bool.  On some platforms, BOOL is a bool.
      case _C_BOOL:
        return (bool)[json boolValue];
      case _C_CHR:
        // On some platforms, objc BOOL is a signed char, but it
        // might also be a small number.  Use the same hack JSC uses
        // to distinguish them:
        // https://phabricator.intern.facebook.com/diffusion/FBS/browse/master/fbobjc/xplat/third-party/jsc/safari-600-1-4-17/JavaScriptCore/API/JSValue.mm;b8ee03916489f8b12143cd5c0bca546da5014fc9$901
        if ([json isKindOfClass:[@YES class]]) {
          return (bool)[json boolValue];
        } else {
          const auto value = [json longLongValue];
          if (nullifyNanAndInf && (isnan(value) || isinf(value))) {
            return nullptr;
          }
          return value;
        }
      case _C_UCHR:
      case _C_SHT:
      case _C_USHT:
      case _C_INT:
      case _C_UINT:
      case _C_LNG:
      case _C_ULNG:
      case _C_LNG_LNG:
      case _C_ULNG_LNG: {
        const auto value = [json longLongValue];
        if (nullifyNanAndInf && (isnan(value) || isinf(value))) {
          return nullptr;
        }
        return value;
      }

      case _C_FLT:
      case _C_DBL: {
        const auto value = [json doubleValue];
        if (nullifyNanAndInf && (isnan(value) || isinf(value))) {
          return nullptr;
        }
        return value;
      }

        // default:
        //   fall through
    }
  } else if ([json isKindOfClass:[NSString class]]) {
    NSData* data = [json dataUsingEncoding:NSUTF8StringEncoding];
    return std::string(reinterpret_cast<const char*>(data.bytes), data.length);
  } else if ([json isKindOfClass:[NSArray class]]) {
    folly::dynamic array = folly::dynamic::array;
    for (id element in json) {
      array.push_back(convertIdToFollyDynamic(element, nullifyNanAndInf));
    }
    return array;
  } else if ([json isKindOfClass:[NSDictionary class]]) {
    __block folly::dynamic object = folly::dynamic::object();

    [json enumerateKeysAndObjectsUsingBlock:^(
              NSString* key, NSString* value, __unused BOOL* stop) {
      object.insert(
          convertIdToFollyDynamic(key, nullifyNanAndInf),
          convertIdToFollyDynamic(value, nullifyNanAndInf));
    }];

    return object;
  }

  return nil;
}
}
}
