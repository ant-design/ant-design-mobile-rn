`@ant-design/react-native` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

### 5.4.3
`2025-08-11`
 - fix: [Switch] inner zIndex style [#1437](https://github.com/ant-design/ant-design-mobile-rn/issues/1437) [@lqr131115](https://github.com/lqr131115)
 - fix: [Carousel] `scrollToStart` not work in infinite [#1442](https://github.com/ant-design/ant-design-mobile-rn/issues/1442)
 - fix: [Radio] current.onPress is not a function [#1444](https://github.com/ant-design/ant-design-mobile-rn/issues/1444) [@aroldo-cittati](https://github.com/aroldo-cittati)

### 5.4.2
`2025-05-27`
 - **Button** [@aroldo-cittati](https://github.com/aroldo-cittati)
   - refactor `React.Component` to `function` [#1428](https://github.com/ant-design/ant-design-mobile-rn/pull/1428) 
   - fix: `styles` 添加 `rawText` 样式 [#1422](https://github.com/ant-design/ant-design-mobile-rn/issues/1422)
   - fix: `activeStyle={false}` 无点击反馈 bug [#1426](https://github.com/ant-design/ant-design-mobile-rn/issues/1426)
 - **Input** [@lqr131115](https://github.com/lqr131115)
   - fix: Input cannot be focused on the ios emulator [#1431](https://github.com/ant-design/ant-design-mobile-rn/issues/1431)
   - fix: Dynamic placeholders cannot be render [#1432](https://github.com/ant-design/ant-design-mobile-rn/issues/1432)

### 5.4.1
`2025-04-24`
 - fix: [Tooltip]styles borderTopColor sets the arrow color [#1423](https://github.com/ant-design/ant-design-mobile-rn/pull/1423)

### 5.4.0
`2025-04-18`
 - upgrade: 🚩 `react-native`最低版本升至`0.67.5`  [#1420](https://github.com/ant-design/ant-design-mobile-rn/pull/1420) [@MuNitCat](https://github.com/MuNitCat)
   - feat: **Modal** 安卓端改用 `BackHandler` 监听返回键
 - fix: **DatePicker** `itemHeight` 样式偏移bug [#1413](https://github.com/ant-design/ant-design-mobile-rn/issues/1413)
 - fix: **Slider** `tapToSeek` 通过点击无法触发 `onChange` [#1417](https://github.com/ant-design/ant-design-mobile-rn/issues/1417)
 - fix: **Tooltip** `styles` arrow 设置borderColor无效bug [#1419](https://github.com/ant-design/ant-design-mobile-rn/pull/1419)

### 5.3.2
`2024-12-11`
 - **Tooltip**
    - feat: Add offset settings to tooltip [#1398](https://github.com/ant-design/ant-design-mobile-rn/pull/1398)
    - fix: Tooltip flash style [#1391](https://github.com/ant-design/ant-design-mobile-rn/issues/1391)
 - feat: Slider ref
 - fix: new Date not adhering to ISO 8601 [#1401](https://github.com/ant-design/ant-design-mobile-rn/pull/1401)

### 5.3.1
`2024-11-20`
 - **Carousel**
    - feat: 新增 `lazy` & `renderLazyPlaceholder` 属性
    - fix: react-native@0.75+ 高度坍塌 [#1372](https://github.com/ant-design/ant-design-mobile-rn/issues/1372)
 - **Provider**
    - fix: `onHaptics` 不工作bug
 - fix: `lodash.mergewith` dependencie [#1397](https://github.com/ant-design/ant-design-mobile-rn/issues/1397)

### 5.3.0
`2024-11-14`
 - 🌟 **Typescript**: 导出所有 component 的 props types。 
   (以支持 [nativewind](https://github.com/nativewind/nativewind))
 - 🔥 **Toast**: 
     - feat: 新增 `useToast` hook 方法 [#1388](https://github.com/ant-design/ant-design-mobile-rn/issues/1388)
 - 🔥 **Modal**
     - feat: 新增 `useModal` hook 方法 [#1383](https://github.com/ant-design/ant-design-mobile-rn/issues/1383)
     - feat:  新增 `modalType` 属性 (**Picker** 也同步支持)
-  **Carousel**
    - feat: 新增 `onScrollAnimationEnd` 属性
- **Slider**
    - feat: 新增 `disabledStep`、`onSlidingStart`、`onSlidingComplete`、`tapToSeek` 属性
- 🔥 适配 react-native@0.75+
   - fix: [Switch] `style` props works [#1389](https://github.com/ant-design/ant-design-mobile-rn/issues/1398)
   - fix: [Pagination] 移除`flex: 1`，避免高度坍塌
- 其他fix
    - fix: [Form] fix Require cycle
    - fix: [Tooltip] safe floatingStyles
    - fix: [Picker] `defaultValue` prop works [#1311](https://github.com/ant-design/ant-design-mobile-rn/issues/1311)
    - fix: [Radio] `defaultChecked` prop works [#1380](https://github.com/ant-design/ant-design-mobile-rn/issues/1380)

### 5.2.3
`2024-09-09`
- 🔥 **Carousel**
  - fix: Carousel自动切换和手动切换冲突。[#1259](https://github.com/ant-design/ant-design-mobile-rn/issues/1259)
- fix: **Button** `children` 支持 `string[]` 类型。[~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/ce08b346cd1f53c39ea9cd861626247880720af4)

### 5.2.2
`2024-08-12`
- 🔥 **NoticeBar**
  - 🆕 `direction` 属性新增`'up'`和`'down'`两个方向。
  - 🆕 支持ref操作，支持`<Marquee/>`组件直接导出。
  - fix: forwardRef warning on InnerNoticeBar component. [#1364](https://github.com/ant-design/ant-design-mobile-rn/pull/1364)
- **Picker**
  - feat: styles 添加 `itemActiveStyle` 傀儡样式名。
- **List**
  - fix: ListItem children 作为 `string[]` 类型。 [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/b18237703df734e251aec0a9629a2f64491ba3c2)
- **Form**
  - fix: Form `labelStyle` works. [#1371](https://github.com/ant-design/ant-design-mobile-rn/pull/1371)

### 5.2.1
`2024-08-02`
- 🔥 新增组件
  - 🔥 **Form**  高性能表单控件。 [#1345](https://github.com/ant-design/ant-design-mobile-rn/pull/1345)
  - 🔥 **Input** 文本输入组件，用于替换 **InputItem** & **TextareaItem** 组件，也更好支持**Form**。 [#1345](https://github.com/ant-design/ant-design-mobile-rn/pull/1345)
  - 🔥 **Collapse** 折叠面板组件，用于替换 **Accordion** 组件。[~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/1c855106c8362345781cf29451beb28a542df3a2)
  - 🔥 **Tooltip**  气泡组件, 用于替换 **Popover** 组件。基于`@floating-ui/react-native`依赖实现。 [#1356](https://github.com/ant-design/ant-design-mobile-rn/pull/1356)
- 🔥 **List**
  - 💄 重构内部DOM结构，取消`extra`的`{flex:1}`布局，改为`{maxWith: "70%"}`。
  - 🛠 优化styles，更好支持并作为**暗黑模式**的主要组件。
- 🔥 **Toast**
  - 🆕 新增 `icon` 属性，支持自定义图标。
  - 🆕 新增 `position` 属性，控制垂直方向显示位置。 [#1353](https://github.com/ant-design/ant-design-mobile-rn/pull/1353)
- **Provider**
  - 🆕 新增 `onHaptics` 属性，用于执行震动反馈事件，需自行选择引入触觉引擎。
  - 🛠 精简 `theme`主题变量，现支持**暗黑模式**。[~doc](https://rn.mobile.ant.design/components/provider-cn/#暗黑模式)
- **NoticeBar**
  - 🆕 完善 `marqueeProps` 属性，设计参考 https://github.com/justin-chu/react-fast-marquee 。
- **Slider**
  - 💄 重构样式，改为品牌色(`#108ee9`)。
  - 🆕 添加新功能，例如`range`、`step`、`ticks`。
  - 🆕 新增 `react-native-reanimated` 依赖。
  - 🗑 移除 `@react-native-community/slider` 依赖。
- **Stepper**
  - 💄 重构样式，改为基于 InputStyle。
  - 🆕 新增 `stringMode`属性，支持高精度小数，基于`@rc-component/mini-decimal`依赖实现。
- **SwipeAction**
  - 🆕 新增 `closeOnTouchOutside` 属性，基于 `useClickAway` 钩子实现。 [#1345](https://github.com/ant-design/ant-design-mobile-rn/pull/1345)
  - 🆕 完善并支持 `react-native-gesture-handler/Swipeable` 的所有属性。
- 🗑 废弃 **SegmentedControl** 组件。
  - 🗑 移除 `@react-native-community/segmented-control` 依赖。

### 5.1.1
`2024-03-15`
- **PickerView** & **DatePickerView** & **Carousel** 
  - fix: 移除 `react-native-gesture-handler/ScrollView` 引用
  - 提供 `_ScrollViewComponent` 属性让用户决定是否使用

### 5.1.0
`2024-02-23`
- 重构 **Picker** & **PickerView**
  - 🔥 重构开发并移除 `@react-native-picker/picker` 依赖
  - 💄 基于 `ScrollView {snapToInterval}` 开发并支持`web`端
  - 🆕 重构 `itemStyle` 样式，显示更灵活 [#1311](https://github.com/ant-design/ant-design-mobile-rn/issues/1311) [#1316](https://github.com/ant-design/ant-design-mobile-rn/issues/1316)
  - 🆕 Picker 新增 (`visible`) 属性支持
- 重构 **DatePicker** & **DatePickerView**
  - 💄 **样式** 和 **基础属性** 继承 Picker & PickerView
  - 🆕 新增 (`precision` `filter` ) 属性支持
  - ⚡️ 废弃（`mode`）属性；时间格式引用[Day.js](https://day.js.org/docs/zh-CN/parse/string-format)
- ❗️删除 **ImagePicker** 并移除 `@react-native-camera-roll/camera-roll` 依赖
- **Switch**
  - fix: `checked`属性支持全受控模式 [#1325](https://github.com/ant-design/ant-design-mobile-rn/issues/1325)
  - feat: `onChange`属性当返回 Promise 时，会自动显示加载状态

### 5.0.5
`2023-11-08`
- fix: Picker support `numberOfLines` property [#1311](https://github.com/ant-design/ant-design-mobile-rn/issues/1311)
  - fix: NativePicker.android.js support numberOfLines [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/f4505bbf291f12ec492489956ef34608e324af22)
- fix: Tabs `swipeable` work [#1305](https://github.com/ant-design/ant-design-mobile-rn/issues/1305)
- feat: gird replace Flex with View wrapper [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/a1dcf1c44ee505facdd6e7d8717710c61edc6f4f)

### 5.0.4
`2023-02-20`
- fix: children as react element in `@type/react@18`(剩余所有) [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/0d08b6bfe90f923f14155734979e551815ee9b0b)
- fix: resolve peer dependency tree [#1284](https://github.com/ant-design/ant-design-mobile-rn/pull/1284)

### 5.0.3
`2022-12-13`
- fix: 兼容`react-native-gesture-handler/Swipeable@2.8.0` [#1271](https://github.com/ant-design/ant-design-mobile-rn/pull/1271) [@XionGuo37](https://github.com/XionGuo37)
- fix: 将peer依赖`@react-native-community/cameraroll` 更新到 `@react-native-camera-roll/camera-roll` [@aoarashi1988](https://github.com/aoarashi1988)

### 5.0.2
`2022-10-13`
 - fix: type error on React 18 [#1257](https://github.com/ant-design/ant-design-mobile-rn/pull/1257) [@lhr000lhr](https://github.com/lhr000lhr)
 - fix: `EventEmitter.removeListener` warning [#1200](https://github.com/ant-design/ant-design-mobile-rn/issues/1200)
 - feat: 组件Button `children` 支持ReactNode类型 [#1260](https://github.com/ant-design/ant-design-mobile-rn/pull/1260) [@lucas-it](https://github.com/lucas-it)


### 5.0.1
`2022-08-11`
 - fix: `Tabs`的`onChange`事件没有被调用 [#1241](https://github.com/ant-design/ant-design-mobile-rn/issues/1241)
 - fix: add libraries required for version 5.0.0 [#1228](https://github.com/ant-design/ant-design-mobile-rn/pull/1228)
 - fix: React Native 0.69.1 + TS Provider ts 报错 [#1242](https://github.com/ant-design/ant-design-mobile-rn/issues/1242)
 - fix: webpack config [#1243](https://github.com/ant-design/ant-design-mobile-rn/pull/1243)
 - fix `ButtonWave` on android cause `Checkbox` can't be clicked [#1238](https://github.com/ant-design/ant-design-mobile-rn/pull/1238) [@zs7779](https://github.com/zs7779)

### 5.0.0

`2022-03-08`

- 🔥 全面支持 **`Expo`** 和 **`react-native-web`** [#1220](https://github.com/ant-design/ant-design-mobile-rn/pull/1220)
- 重构 **Checkbox** & **Radio**
  - 💄 重构Checkbox 使用纯样式代码替换`Icon`按钮 [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/3bec0d3d6d56b72a82830a8cd747fe4290a43e74#r68109623)
  - ⚡️ 缺点是破坏性的`styles`属性改变 [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/3bec0d3d6d56b72a82830a8cd747fe4290a43e74#r68109821)
  - 💄 重构Radio 基于 Checkbox 开发
  - 🆕 Radio 新增  `Radio.Group` 组件
- 重构 **Switch**
  - 🆕 Switch新增 (`loading` `checkedChildren` `unCheckedChildren`) 属性支持
  - 🆕 Switch新增 (`trackColor` `thumbColor` `thumbTintColor`) 原生属性支持 [#507](https://github.com/ant-design/ant-design-mobile-rn/pull/507)
  - 🆕 Switch 新增 `styles` 属性已自定义样式
- **Toast**
  - 🆕 Toast `content` 属性类型新增 `React.ReactNode` [@iShawnWang](https://github.com/iShawnWang)
  - 🐞 修复 `Toast.removeAll` 调用后无法回调 `onClose` bug [@erichua23](https://github.com/erichua23)
- **Carousel**
  - 🔥 重构Carousel，移除 `react-native-pager-view` 依赖 [@1uokun](https://github.com/1uokun)
  - 💄 Carousel基于 `ScrollView {pagingEnabled}` 开发以支持`web`端
- 🔥 重构**Tabs**，移除 `react-native-pager-view` 依赖，基于`Carousel`开发
- 💄 ActionSheet 创建`index.native.tsx`文件以此区分 `web` 端和 `native` 端 [#1219](https://github.com/ant-design/ant-design-mobile-rn/pull/1219)
- 🐞 修复 **Flex** `Flex.Item` 组件 `flex` 属性不能为 0 bug   [@laoxubuer](https://github.com/laoxubuer)

### 4.2.0

`2021-06-16`

- `react-native-gesture-handler` now is a peerDependencies.
- Refactor(eslint): now using eslint directly
- Upgrade rn-kitchen-sink to the latest version
- Refactor(swipe-action): using react-native-gesture-handler close #931
- Refactor(drawer): using react-native-gesture-handler/DrawerLayout close #1164
- Fixes: action-sheet for Android respects theme (#1176) by https://github.com/KusStar
- Refactor(jest): tests by https://github.com/1uokun

### 4.0.0

`2020-06-14`

- Toast 重构，现在支持配置 [pull/911](https://github.com/ant-design/ant-design-mobile-rn/pull/911) 感谢 [@helsonxiao](https://github.com/helsonxiao)
- 添加`es_ES` 本地化支持 [pull/916](https://github.com/ant-design/ant-design-mobile-rn/pull/916)
- 添加`pt_BR` 本地化支持 [pull/802](https://github.com/ant-design/ant-design-mobile-rn/pull/802)
- 修复`UNSAFE_` 警告 [commit](https://github.com/ant-design/ant-design-mobile-rn/commit/8fe842d57609cfc9de55453d15f26b907d0814f7)
- 使用`@react-native-community/*`替换`React-Native` 内置组件 [pull/828](https://github.com/ant-design/ant-design-mobile-rn/pull/828) （**不兼容改动**，需要 linking 或者 auto linking）
- 重构`Carousel` [pull/841](https://github.com/ant-design/ant-design-mobile-rn/pull/841)
- 更新`react-native`到`0.62.0`
- 完善`TypeScript` 类型定义
- 其他`bug`修复

### 3.3.0

`2020-03-08`

- `Icons` 升级到最新版 `2.0.0`

### 3.2.2

`2019-12-31`

- `Modal.alert` `Modal.prompt` `Modal.operation` 现在返回一个`key`，可以通过`Portal.remove(key)` 手动关闭

### 3.2.0

`2019-09-29`

- 使用 `@react-native-community/viewpager` [#615](https://github.com/ant-design/ant-design-mobile-rn/pull/615) by [xinbowang](https://github.com/xinbowang)

### 3.1.15

`2019-08-27`

- `ListItem` 组件增加一个`onLongPress`属性 [#619](https://github.com/ant-design/ant-design-mobile-rn/pull/619) by [Zixuan](https://github.com/nodece)

### 3.1.14

`2019-08-21`

- `modal` 相关的组件增加一个`onBackHandler`属性 [#611](https://github.com/ant-design/ant-design-mobile-rn/pull/611) by [Tzng](https://github.com/Tzng)
- 完善 `search-bar` 类型定义

### 3.1.12

`2019-08-02`

- `datepicker`组件增加一个`defaultDate`属性 [#593](https://github.com/ant-design/ant-design-mobile-rn/pull/593)

### 3.1.7

`2019-04-30`

- 修复 `checkbox` 没有从主题里面读取变量 [#416](https://github.com/ant-design/ant-design-mobile-rn/issues/416)

### 3.1.5

`2019-03-20`

- 修复 `tabs` 在 react-native@0.59.1 下报错 [#403](https://github.com/ant-design/ant-design-mobile-rn/issues/403) by [bestv2](https://github.com/bestv2)

### 3.1.4

`2019-03-15`

- 修复 `tabs` swipeable 在 Android 下面不起作用 [#380](https://github.com/ant-design/ant-design-mobile-rn/issues/380)
- 为 `card` 组件的 `HeaderContent` 和 `HeaderExtra` 添加 Wrap style，便于定制 [#395](https://github.com/ant-design/ant-design-mobile-rn/issues/395) By [christtrc](https://github.com/ant-design/ant-design-mobile-rn/commits?author=christtrc)

### 3.1.3

`2019-02-19`

- 修复使用 `babel-plugin-import`后找不到`babel-runtime/helpers/extends` [#346](https://github.com/ant-design/ant-design-mobile-rn/issues/346)
- 修复`ios` 端的 `drawer` 组件，当返回的时候，会有短暂的停留在页面上 [#344](https://github.com/ant-design/ant-design-mobile-rn/issues/344)

### 3.1.1

`2019-01-30`

新春快乐 🐷 年吉祥

- `popover` 新增 `placement` 属性，支持配置不同位置 'top | right | bottom | left | auto' [#308](https://github.com/ant-design/ant-design-mobile-rn/issues/308)

### 3.1.0

`2019-01-27`

- 重构`popover` [#298](https://github.com/ant-design/ant-design-mobile-rn/pull/298)
  - 删除了(`overlayStyle` `contextStyle` `name` `openMenu / closeMenu / toggleMenu` `style` )属性，重构后的版本支持多个 Popover 同时使用
  - 使用方式请查看 popover 示例
- 修复`input-item` style 不应该应用于外层 container [#279](https://github.com/ant-design/ant-design-mobile-rn/issues/279)

### 3.0.6

`2019-01-15`

- 修复`image-picker` 报错 `groupTypes` is not supported on Android [#264](https://github.com/ant-design/ant-design-mobile-rn/issues/264)
- 修复`tab-bar` 不会更新 tab 内容 [#201](https://github.com/ant-design/ant-design-mobile-rn/issues/201)

### 3.0.5

`2019-01-03`

- 修改`search-bar` icon size [#250](https://github.com/ant-design/ant-design-mobile-rn/pull/250)
- 修复`input-item` 在`iOS`下换行显示 [#249](https://github.com/ant-design/ant-design-mobile-rn/issues/249)
- 修复`input-item` clear icon 在`android`下显示不正确 [#248](https://github.com/ant-design/ant-design-mobile-rn/issues/248)

### 3.0.4

`2018-12-28`

- 修改`SegmentedControl`默认颜色为主题颜色 [#211](https://github.com/ant-design/ant-design-mobile-rn/pull/211)
- 允许覆盖`Tabs` `tabBarUnderlineStyle`
- 完善`SwipeAction` TypeScript 类型定义 [#230](https://github.com/ant-design/ant-design-mobile-rn/pull/230)
- 完善 `Grid` 文档，修改`onClick`属性为`onPress` [#234](https://github.com/ant-design/ant-design-mobile-rn/pull/234)
- 修复`Modal`循环引用警告 [#242](https://github.com/ant-design/ant-design-mobile-rn/pull/242)

### 3.0.0

`2018-12-15`

**不兼容更新** 更多信息请查看 [#119](https://github.com/ant-design/ant-design-mobile-rn/issues/119)

- 全新的包名 `@ant-design/react-native` 谢谢 [afc163](https://github.com/afc163) 提供
- 组件文件重命名，去掉了之前的`.native`后缀
- 更友好的主题支持，方便用户自定义，全新的 `Provider`
- 重构了所有组件支持自定义局部样式
- 完善 TypeScript 类型定义
- Toast 现在支持在 Modal 之上显示
- bug 修复
- 完善文档，使用 codesandbox 以及 react-native-web 提供部分组件在线预览
- 重构 Icon 组件，现在使用 [ant-design-icons](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react-native)
- Toast 移除了 `hide` 方法
- 修改`Grid`的`onClick`属性为`onPress`
- 更多组件优化以及使用方式请查看文档
- 从 2.x 升级到 3.0.0 请查看[upgrade notes](https://rn.mobile.ant.design/docs/react/upgrade-notes-cn)

### 2.3.0

`2018-10-20`

- `Input`添加`editable`. ([#78](https://github.com/ant-design/ant-design-mobile-rn/pull/78))
- 修复`Button`组件`activeStyle`属性为对象时不起作用的问题. ([#105](https://github.com/ant-design/ant-design-mobile-rn/pull/105))
- `Modal`支持多语言. ([#115](https://github.com/ant-design/ant-design-mobile-rn/pull/115))
- 西班牙语. ([#75](https://github.com/ant-design/ant-design-mobile-rn/pull/75))
- TypeScript 类型定义完善. ([#83](https://github.com/ant-design/ant-design-mobile-rn/pull/83))

### 2.2.1

`2018-07-17`

- Grid 组件单个项高度通过 column 来做计算. ([#61](https://github.com/ant-design/ant-design-mobile-rn/pull/61))
- 利用 normalize-css-color 替换 react-native 自带模块，修复 >= 0.56 下的报错. ([#57](https://github.com/ant-design/ant-design-mobile-rn/pull/57))

### 2.2.0

`2018-06-15`

- 拆分 antd-mobile react native 代码到 `antd-mobile-rn` 包。
- 特性: 使 `Tag` 组件支持长按。([#20](https://github.com/ant-design/ant-design-mobile-rn/issues/20))

### 2.1.11

`2018-05-31`

- [antd-mobile@2.1.11 及以前更新日志](https://github.com/ant-design/ant-design-mobile/blob/master/CHANGELOG.en-US.md#2111)
