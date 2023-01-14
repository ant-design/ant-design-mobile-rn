---
category: Components
type: Data Entry
title: Slider
---

A Slider component for selecting particular value in range, eg: controls the display brightness of the screen.

### Rule
- By default, the minimum value in the left and maximum value in the right of `Slider` .
- Generally `Slider` is positioned horizontally.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| min    |  Number     | 0     | The minimum value the slider can slide to. |
| max    |  Number     | 100    | The maximum value the slider can slide to. |
| step    |  Number or null     | 1    | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null`. |
| value    |  Number  |     | The value of slider. |
| defaultValue    |  Number   | 0     | The default value of slider. |
| disabled    |  Boolean     | false    | If true, the slider will not be interactable. |
| onChange    |  Function     | Noop    | Callback function that is called when the user changes the slider's value. |
| onAfterChange    |  Function     | Noop    | Fired when `ontouchend` is fired. |
| maximumTrackTintColor (`iOS`)   |  String     | `#108ee9`    | The color used for the track to the right of the button. Overrides the default blue gradient image on iOS. |
| minimumTrackTintColor (iOS)   |  String     | `#ddd`    | The color used for the track to the left of the button. Overrides the default blue gradient image on iOS. |
