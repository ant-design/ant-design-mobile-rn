---
category: Components
type: Feedback
title: ActionSheet
subtitle: 动作面板
---

从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。

### 规则

- 提供清晰的退出按钮。
- 可高亮破坏性操作，e.g. 将『删除』处理成红色文本。
- 不要放置过多内容，避免面板纵向滚动。


## API
### ActionSheet.showActionSheetWithOptions(options, callback)
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| options       | 动作面板配置 | Object |  无  |
| callback       | 操作成功后调用  | (index:number):void |  无  |
显示动作面板，`options`对象必须包含以下的一个或者多个：

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| options       | 按钮标题列表 (必须) | Array 或 String |  无  |
| cancelButtonIndex       | 按钮列表中取消按钮的索引位置  | Number |  无  |
| destructiveButtonIndex       | 按钮列表中破坏性按钮（一般为删除）的索引位置  | Number |  无  |
| title       | 顶部标题  | String |  无  |
| message       | 顶部标题下的简要消息  | String 或 React.element |  无  |

### ActionSheet.showShareActionSheetWithOptions(options, failureCallback?, successCallback?)
`仅支持React-Native,且react-native@version >= 0.39`

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| options       | 动作面板配置 | Object |  无  |
| failureCallback       | 分享失败调用（`仅支持iOS`, 详细请查看[react-native/share](https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80) ） | (error):void |  无  |
| successCallback       | 分享成功调用（`仅支持iOS`, 详细请查看[react-native/share](https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80) ） | (completed:Boolean, activityType?:String):void |  无  |

显示分享动作面板，`options`对象必须包含以下的一个或者多个：

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| message       | 顶部标题下的简要消息 | String |  无  |
| title       | 顶部标题  | String |  无  |
| url       | 分享的 url `仅支持iOS`  | String |  无  |
| excludedActivityTypes       | 指定在动作面板中不显示的活动`仅支持iOS`  | Array |  无  |

### ActionSheet.close()
关闭动作面板`仅支持Android`
