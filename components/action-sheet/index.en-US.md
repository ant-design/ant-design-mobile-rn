---
category: Components
type: Feedback
title: ActionSheet
---

The modal box pops up from the bottom, providing more than two actions related to the current scene, and also support provide the title and description. Built-in fixed display style, does not support particularly flexible changes.

### Rules

- Provide a clear exit button.
- Can highlight the destructive operation, e.g. "delete" use red text.
- Do not place too much content to avoid vertical roll of the panel.


## API
### ActionSheet.showActionSheetWithOptions(options, callback)
Properties | Descrition | Type | Default
----|-----|------|------
| options       | ActionSheet's options | Object |  -  |
| callback       | Callback for selected item   | (index:number):void |  -  |

Display a action sheet. The `options` object must contain one or more of:

Properties | Descrition | Type | Default
----|-----|------|------
| options       | a list of button titles (required) | Array or String |  -  |
| cancelButtonIndex       | index of cancel button in `options`  | Number |  -  |
| destructiveButtonIndex       | index of destructive button in `options`  | Number |  -  |
| title       | a title to show above the action sheet  | String |  -  |
| message       | a message to show below the title  | String or React.element |  -  |

### ActionSheet.showShareActionSheetWithOptions(options, failureCallback?, successCallback?)

`React-Native Only, react-native@version >= 0.39`

Properties | Descrition | Type | Default
----|-----|------|------
| options       | ShareActionSheet's options | Object |  -  |
| failureCallback       | Callback for share failed（`iOS Only`, See [react-native/share](https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80) ） | (error):void |  -  |
| successCallback       | Callback for share successed（`iOS Only`, See [react-native/share](https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80) ） | (completed:Boolean, activityType?:String):void |  -  |

Display a shareable action sheet. The `options` object must contain one or more of:

Properties | Descrition | Type | Default
----|-----|------|------
| message       | a message to share | String |  -  |
| title       | title of the message  | String |  -  |
| url       | an URL to share `iOS Only`  | String |  -  |
| excludedActivityTypes       | the activities to exclude from the ShareActionSheet `iOS Only`  | Array |  -  |

### ActionSheet.close()
Close the action sheet.`Android Only`
