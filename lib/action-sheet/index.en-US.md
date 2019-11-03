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

#### static showActionSheetWithOptions(options: Object, callback: Function)

Display a action sheet. The `options` object must contain one or more of:

- options (array of strings) - a list of button titles (required)
- cancelButtonIndex (int) - index of cancel button in `options`
- destructiveButtonIndex (int) - index of destructive button in `options`
- title (string) - a title to show above the action sheet
- message (string/React.element) - a message to show below the title

#### static showShareActionSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)

`React-Native only, react-native@version >= 0.39`

Display shareable action sheet.

- **options:**
  - message(`string`): a message to share
  - title(`string`): title of the message
  - url(`string`): an URL to share `iOS only`
  - excludedActivityTypes(`array`): the activities to exclude from the ActionSheet `iOS only`
- **Callback**: (`iOS only`, see [react-native/share](https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80))
  - failureCallback(error): callback is called if share failed;
  - successCallback(completed, method): callback is called if share successed;

#### static close() - (android only) programmatically close.
