---
category: Components
group:
  title: Feedback
  order: 5
title: ActivityIndicator
---

`ActivityIndicator` indicates that a task is currently in progress.

### Rules
- Don't stop activity indicator if the task is not completed.
- By providing meaningful texts under certain circumstances can help user understand which task is in progress. eg: uploading photos.
- If you know the user's waiting time, you can use `Progress` instead.

## Examples

<code src="./demo/basic.tsx"></code>

## API

```jsx
<ActivityIndicator />
<ActivityIndicator color="white" />
<ActivityIndicator size="large" />
<ActivityIndicator text="loading" />
<ActivityIndicator toast />
<ActivityIndicator toast text="loading" />
```

### ActivityIndicator

Properties | Descrition | Type | Default
-----------|------------|------|--------
|  animating  | Whether to show the indicator (true, the default) or hide it (false). | boolean  | true  |
|  size  | Size of the indicator (`small`/`large` or number [android only]) | string\|number  | small  |
|  toast  | Whether to use toast style | boolean  | false  |
|  text  | loading text behind the indicator | string |  -   |
|  color | The foreground color of the spinner (default is gray). | string  | gray  |
