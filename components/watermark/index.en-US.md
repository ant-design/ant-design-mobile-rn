---
category: Components
type: Data Display
title: Watermark
---

Add watermark to pages or components for copyright identification or information protection.

### Rule

- Useful for scenarios that need to protect content copyright.
- Support both text and image watermark forms.
- Watermark will automatically tile to fill the entire container.

## API

| Name          | Description                                                                     | Type                    | Default |
| ------------- | ------------------------------------------------------------------------------- | ----------------------- | ------- |
| content       | Watermark text content, supports string or string array                        | `string \| string[]`    | -       |
| contentStyle  | Watermark text style                                                            | `StyleProp<TextStyle>`  | -       |
| image         | Watermark image                                                              | `string \| React.ReactNode`                | -       |
| imageStyle    | Watermark image style                                                           | `StyleProp<ImageStyle>` | -       |
| width         | Width of a single watermark                                                     | `number`                | `120`   |
| height        | Height of a single watermark                                                    | `number`                | `64`    |
| gapX          | Horizontal spacing between watermarks                                           | `number`                | `0`     |
| gapY          | Vertical spacing between watermarks                                            | `number`                | `0`     |
| rotate        | Rotation angle of watermark (unit: degrees)                                    | `number`                | `-22`   |
| foreground    | Whether to display watermark in foreground layer (`true` means above content)  | `boolean`               | `true` |
| children      | Content that needs watermark                                                    | `React.ReactNode`        | -       |
| style         | Container style                                                                 | `ViewStyle`             | -       |
