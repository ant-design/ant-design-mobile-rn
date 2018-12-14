---
category: Components
type: Data Entry
title: ImagePicker
---

Note: Just for selecting picture. Generally `ImagePicker` is used to select picture before uploading, but without the feature of uploading.

If you have permission issues Please checkout https://github.com/ant-design/ant-design-mobile-rn/issues/90

## API

| Properties        | Descrition                                                                                                                                         | Type                                                        | Default                                                         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------- |
| styles            | Styles object for the various elements of the ImagePicker                                                                                          | Object                                                      | See `/components/image-picker/style/index.tsx` for the defaults |
| files             | Picture files array which includes `url`(required) in each object                                                                                  | Array                                                       | []                                                              |
| onChange          | Callback is called when the value of `files` is changed. The `operationType` is one of `add` or `remove`(the third argument is the removed index). | (files: Object, operationType: string, index: number): void |                                                                 |
| onImageClick      | Callback is called when the user clicks the selected picture                                                                                       | (index: number, files: Array): void                         |                                                                 |
| onAddImageClick   | Callback is called when the selector button is clicked                                                                                             | (): void                                                    |                                                                 |
| onFail            | Callback is called when the image selection is cancelled                                                                                           | (msg: string): void                                         |                                                                 |
| selectable        | whether to show selector button                                                                                                                    | boolean                                                     | true                                                            |
| title             | ImageRoll'title                                                                                                                                    | string                                                      | 'Photos'                                                        |
| cancelText        | Cancel text                                                                                                                                        | string                                                      | 'Cancel'                                                        |
| cameraPickerProps | CameraPickerProps                                                                                                                                  | CameraPickerProps                                           | -                                                               |

> Note: Only return assets-library type for RN, if you want to upload files, see https://github.com/facebook/react-native/issues/201
