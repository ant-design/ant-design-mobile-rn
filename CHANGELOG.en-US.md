---
order: 2
title: Change Log
toc: false
---

`@ant-design/react-native` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

#### Release Schedule

- Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
- Monthly release: minor version at the end of every month for new features.
- Major version release is not included in this schedule for breadking change and new features.

---

### 5.4.2
`2025-05-27`
 - **Button** [@aroldo-cittati](https://github.com/aroldo-cittati)
   - refactor `React.Component` to `function` [#1428](https://github.com/ant-design/ant-design-mobile-rn/pull/1428) 
   - fix: `styles` add `rawText` style [#1422](https://github.com/ant-design/ant-design-mobile-rn/issues/1422)
   - fix: `activeStyle={false}` not work bug [#1426](https://github.com/ant-design/ant-design-mobile-rn/issues/1426)
 - **Input** [@lqr131115](https://github.com/lqr131115)
   - fix: Input cannot be focused on the ios emulator [#1431](https://github.com/ant-design/ant-design-mobile-rn/issues/1431)
   - fix: Dynamic placeholders cannot be render [#1432](https://github.com/ant-design/ant-design-mobile-rn/issues/1432)

### 5.4.1
`2025-04-24`
 - fix: [Tooltip]styles borderTopColor sets the arrow color [#1423](https://github.com/ant-design/ant-design-mobile-rn/pull/1423)

### 5.4.0
`2025-04-18`
 - upgrade: 🚩`react-native` minimum version increased to `0.67.5`  [#1420](https://github.com/ant-design/ant-design-mobile-rn/pull/1420) [@MuNitCat](https://github.com/MuNitCat)
   - feat: **Modal** Android uses `BackHandler` to listen to the back key
 - fix: **DatePicker** `itemHeight` style offset bug [#1413](https://github.com/ant-design/ant-design-mobile-rn/issues/1413)
 - fix: **Slider** `tapToSeek` cannot trigger `onChange` by click [#1417](https://github.com/ant-design/ant-design-mobile-rn/issues/1417)
 - fix: **Tooltip** `styles` arrow setting borderColor not work bug [#1419](https://github.com/ant-design/ant-design-mobile-rn/pull/1419)

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
    - feat: add `lazy` & `renderLazyPlaceholder` prop
    - fix: react-native@0.75+ avoid height collapse [#1372](https://github.com/ant-design/ant-design-mobile-rn/issues/1372)
 - **Provider**
    - fix: `onHaptics` not works bug
 - fix: `lodash.mergewith` dependencie [#1397](https://github.com/ant-design/ant-design-mobile-rn/issues/1397)

### 5.3.0
`2024-11-14`
 - 🌟 **Typescript**: export all component props types. 
   (To support for [nativewind](https://github.com/nativewind/nativewind))
 - **Toast**: 
     - feat: add `useToast` hook method [#1388](https://github.com/ant-design/ant-design-mobile-rn/issues/1388)
 -  **Modal**
     - feat: add `useModal` hook method [#1383](https://github.com/ant-design/ant-design-mobile-rn/issues/1383)
     - feat:  add `modalType` prop (Sync to **Picker**)
-  **Carousel**
    - feat: add `onScrollAnimationEnd` prop
- **Slider**
    - feat: add `disabledStep`、`onSlidingStart`、`onSlidingComplete`、`tapToSeek` prop
- 🔥 Upgrade react-native@0.75+
   - fix: [Switch] `style` props works [#1389](https://github.com/ant-design/ant-design-mobile-rn/issues/1398)
   - fix: [Pagination] Remove `flex: 1` to avoid height collapse
- other fix
    - fix: [Form] fix Require cycle
    - fix: [Tooltip] safe floatingStyles
    - fix: [Picker] `defaultValue` prop works [#1311](https://github.com/ant-design/ant-design-mobile-rn/issues/1311)
    - fix: [Radio] `defaultChecked` prop works [#1380](https://github.com/ant-design/ant-design-mobile-rn/issues/1380)

### 5.2.3
`2024-09-09`
- 🔥 **Carousel**
  - fix: Carousel autoplay and manual conflict. [#1259](https://github.com/ant-design/ant-design-mobile-rn/issues/1259)
- fix: **Button** `children` support `string[]` type. [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/ce08b346cd1f53c39ea9cd861626247880720af4)

### 5.2.2
`2024-08-12`
- 🔥 **NoticeBar**
  - 🆕 `direction` prop add `'up'` & `'down'` direction.
  - 🆕 add `ref` actions, export `<Marquee/>` component.
  - fix: forwardRef warning on InnerNoticeBar component. [#1364](https://github.com/ant-design/ant-design-mobile-rn/pull/1364)
- **Picker**
  - feat: Picker styles add `itemActiveStyle`
- **List**
  - fix: ListItem children as `string[]` [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/b18237703df734e251aec0a9629a2f64491ba3c2)
- **Form**
  - fix: Form `labelStyle` works. [#1371](https://github.com/ant-design/ant-design-mobile-rn/pull/1371)

### 5.2.1
`2024-08-02`
- 🔥 New Components
  - 🔥 **Form** component. [#1345](https://github.com/ant-design/ant-design-mobile-rn/pull/1345)
  - 🔥 **Input** component, used to replace **InputItem** & **TextareaItem** component. [#1345](https://github.com/ant-design/ant-design-mobile-rn/pull/1345)
  - 🔥 **Collapse** component, used to replace **Accordion** component.[~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/1c855106c8362345781cf29451beb28a542df3a2)
  - 🔥 **Tooltip** component, used to replace **Popover** component, base on `@floating-ui/react-native`. [#1356](https://github.com/ant-design/ant-design-mobile-rn/pull/1356)
- 🔥 **Toast**
  - 🆕 Add `icon` prop to support custom icons 
  - 🆕 Add `position` prop for vertical display position [#1353](https://github.com/ant-design/ant-design-mobile-rn/pull/1353)
- 🔥 **List**
  - 💄 Refactor internal DOM structure, cancel the `{flex:1}` layout of `extra`, and change it to `{maxWith: "70%"}`.
  - 🛠 Simplified styles to better support and serve as the main component of **Dark Mode**.
- **Provider**
  - 🆕 Add `onHaptics` for vibration feedback
  - 🛠 Simplified `theme`, complete **Dark Mode**. [~doc](https://rn.mobile.ant.design/components/provider/#dark-mode)
- **NoticeBar**
  - 🆕 Complete `marqueeProps` prop, design reference https://github.com/justin-chu/react-fast-marquee
- **Slider**
  - 💄 Refactor style, changed to brand color(`#108ee9`). 
  - 🆕 Add new features such as `range` `step` `ticks`.
  - 🆕 Add dependence `react-native-reanimated`.
  - 🗑 Remove dependence `@react-native-community/slider`.
- **Stepper**
  - 💄 Refactor style, base on InputStyle.
  - 🆕 Add `stringMode`, set value as string to support high precision decimals.
- **SwipeAction**
  - 🆕 Add `closeOnTouchOutside` prop, base on `useClickAway` hook implementation. [#1345](https://github.com/ant-design/ant-design-mobile-rn/pull/1345)
  - 🆕 Complete more properties base on `react-native-gesture-handler/Swipeable`.
- 🗑 Deprecate **SegmentedControl** component.
  - 🗑 Remove dependence `@react-native-community/segmented-control`.

### 5.1.1
`2024-03-15`
- **PickerView** & **DatePickerView** & **Carousel** 
  - fix: remove import `react-native-gesture-handler/ScrollView`
  - Let the user decide whether to use by `_ScrollViewComponent` prop

### 5.1.0
`2024-02-20`
- Refactor **Picker** & **PickerView**
  - 🔥 Remove dependence `@react-native-picker/picker`
  - 💄 Refactor extends by `ScrollView {snapToInterval}` to support web
  - 🆕 Refactor `itemStyle` prop, make styles more flexible [#1311](https://github.com/ant-design/ant-design-mobile-rn/issues/1311) [#1316](https://github.com/ant-design/ant-design-mobile-rn/issues/1316)
  - 🆕 Picker support (`visible`) new prop
- Refactor **DatePicker** & **DatePickerView**
  - 💄 **Style** 和 **Base Props** extends by Picker & PickerView
  - 🆕 Support (`precision` `filter` ) new props
  - ⚡️ Deprecated (`mode`）prop; date format by [Day.js](https://day.js.org/docs/en/parse/string-format)
- ❗️Delete **ImagePicker** and remove dependence `@react-native-camera-roll/camera-roll`
- **Switch**
  - fix: `checked` prop support controlled mode [#1325](https://github.com/ant-design/ant-design-mobile-rn/issues/1325)
  - feat: `onChange` prop when the Promise is returned, the loading status will be displayed automatically

### 5.0.5
`2023-11-08`
- fix: Picker support `numberOfLines` property [#1311](https://github.com/ant-design/ant-design-mobile-rn/issues/1311)
  - fix: NativePicker.android.js support numberOfLines [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/f4505bbf291f12ec492489956ef34608e324af22)
- fix: Tabs `swipeable` work [#1305](https://github.com/ant-design/ant-design-mobile-rn/issues/1305)
- feat: gird replace Flex with View wrapper [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/a1dcf1c44ee505facdd6e7d8717710c61edc6f4f)

### 5.0.4
`2023-02-20`
- fix: children as react element in `@type/react@18`(last) [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/0d08b6bfe90f923f14155734979e551815ee9b0b)
- fix: resolve peer dependency tree [#1284](https://github.com/ant-design/ant-design-mobile-rn/pull/1284)

### 5.0.3
`2022-12-13`
- fix: consistent `react-native-gesture-handler/Swipeable@2.8.0` [#1271](https://github.com/ant-design/ant-design-mobile-rn/pull/1271) [@XionGuo37](https://github.com/XionGuo37)
- fix: update deps `@react-native-community/cameraroll` to `@react-native-camera-roll/camera-roll` [@aoarashi1988](https://github.com/aoarashi1988)

### 5.0.2
`2022-10-13`
 - fix: type error on React 18 [#1257](https://github.com/ant-design/ant-design-mobile-rn/pull/1257) [@lhr000lhr](https://github.com/lhr000lhr)
 - fix: `EventEmitter.removeListener` warning [#1200](https://github.com/ant-design/ant-design-mobile-rn/issues/1200)
 - feat: children as react element in button [#1260](https://github.com/ant-design/ant-design-mobile-rn/pull/1260) [@lucas-it](https://github.com/lucas-it)

### 5.0.1
`2022-08-11`
 - fix: Tabs `onChange` no-call [#1241](https://github.com/ant-design/ant-design-mobile-rn/issues/1241)
 - fix: add libraries required for version 5.0.0 [#1228](https://github.com/ant-design/ant-design-mobile-rn/pull/1228)
 - fix: Typescript error in react18 [#1242](https://github.com/ant-design/ant-design-mobile-rn/issues/1242)
 - fix: webpack config [#1243](https://github.com/ant-design/ant-design-mobile-rn/pull/1243)
 - fix `ButtonWave` on android cause `Checkbox` can't be clicked [#1238](https://github.com/ant-design/ant-design-mobile-rn/pull/1238) [@zs7779](https://github.com/zs7779)

### 5.0.0

`2022-03-08`

- 🔥 **`Expo`** and **`react-native-web`** support [#1220](https://github.com/ant-design/ant-design-mobile-rn/pull/1220)
- **Checkbox** & **Radio**
  - 💄 Refactor Checkbox Use pure style replace to `Icon` button [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/3bec0d3d6d56b72a82830a8cd747fe4290a43e74#r68109623)
  - ⚡️ Broken `styles` change [~commit](https://github.com/ant-design/ant-design-mobile-rn/commit/3bec0d3d6d56b72a82830a8cd747fe4290a43e74#r68109821)
  - 💄 Radio Refactor extends by Checkbox
  - 🆕 Radio add `Radio.Group` component
- Refactor **Switch**
  - 🆕 Switch add (`loading` `checkedChildren` `unCheckedChildren`) new props
  - 🆕 Switch support (`trackColor` `thumbColor` `thumbTintColor`) native props [#507](https://github.com/ant-design/ant-design-mobile-rn/pull/507)
  - 🆕 Switch support `styles` prop to custom style
- **Toast**
  - 🆕 `content`'s type support `React.ReactNode` [@iShawnWang](https://github.com/iShawnWang)
  - 🐞 Fix the `onClose` callback not called when removeAll [@erichua23](https://github.com/erichua23)
- **Carousel**
  - 🔥 Refactor Carousel with remove dependence `react-native-pager-view` [@1uokun](https://github.com/1uokun)
  - 💄 Carousel extends by `ScrollView {pagingEnabled}` to support web
- 🔥 Refactor **Tabs** with remove dependence `react-native-pager-view` and extends by `Carousel`
- 💄 ActionSheet create `index.native.tsx` to differentiate `web` and `native` Platform [#1219](https://github.com/ant-design/ant-design-mobile-rn/pull/1219)
- 🐞 Fix **Flex** support `flex` value 0 in `Flex.Item`  [@laoxubuer](https://github.com/laoxubuer)

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

- Refactor Toast, now supports configuration [pull/911](https://github.com/ant-design/ant-design-mobile-rn/pull/911) By [@helsonxiao](https://github.com/helsonxiao)
- Added`es_ES` locale [pull/916](https://github.com/ant-design/ant-design-mobile-rn/pull/916)
- Update `TypeScript` definitions
- Added `pt_BR` locale [pull/802](https://github.com/ant-design/ant-design-mobile-rn/pull/802)
- Fixes `UNSAFE_` warning [commit](https://github.com/ant-design/ant-design-mobile-rn/commit/8fe842d57609cfc9de55453d15f26b907d0814f7)
- Replace `React-Native` components with `@react-native-community/*` [pull/828](https://github.com/ant-design/ant-design-mobile-rn/pull/828) （**Breaking changes**. Needs linking or auto linking）
- refactor `Carousel` [pull/841](https://github.com/ant-design/ant-design-mobile-rn/pull/841)
- Upgrade `react-native` to `0.62.0`
- `bug` fixes

### 3.3.0

`2020-03-08`

- Update `Icons` to `2.0.0`

### 3.2.2

`2019-12-31`

- `Modal.alert` `Modal.prompt` `Modal.operation` now returns a `key` that can be manually closed via `Portal.remove(key)`.

### 3.2.0

`2019-09-29`

- Using `@react-native-community/viewpager` [#615](https://github.com/ant-design/ant-design-mobile-rn/pull/615) by [xinbowang](https://github.com/xinbowang)

### 3.1.15

`2019-08-27`

- Add `onLongPress` to `ListItem` [#619](https://github.com/ant-design/ant-design-mobile-rn/pull/619) by [Zixuan](https://github.com/nodece)

### 3.1.14

`2019-08-21`

- Add `onBackHandler` to `modal` related components [#611](https://github.com/ant-design/ant-design-mobile-rn/pull/611) by [Tzng](https://github.com/Tzng)
- Fixes `search-bar` type definition

### 3.1.12

`2019-08-02`

- `datepicker` Add a `defaultDate` property [#593](https://github.com/ant-design/ant-design-mobile-rn/pull/593)

### 3.1.7

`2019-04-30`

- Fixes `checkbox` read color from theme [#416](https://github.com/ant-design/ant-design-mobile-rn/issues/416)

### 3.1.5

`2019-03-20`

- Fixed `tabs` type error under react-native@0.59.1 [#403](https://github.com/ant-design/ant-design-mobile-rn/issues/403) by [bestv2](https://github.com/bestv2)

### 3.1.4

`2019-03-15`

- Fixed `tabs` swipeable does not work under Android [#380](https://github.com/ant-design/ant-design-mobile-rn/issues/380)
- Add Wrap style for `HeaderContent` and `HeaderExtra` of the `card` component for easy customization [#395](https://github.com/ant-design/ant-design-mobile-rn/issues/395) By [christtrc](https://github.com/ant-design/ant-design-mobile-rn/commits?author=christtrc)

### 3.1.3

`2019-02-19`

- Fixes `babel-runtime/helpers/extends` not found after using `babel-plugin-import` [#346](https://github.com/ant-design/ant-design-mobile-rn/issues/346)
- Fixes `drawer` component of `ios`. When returning, there will be a short stay on the page [#344](https://github.com/ant-design/ant-design-mobile-rn/issues/344)

### 3.1.1

`2019-01-30`

Happy Chinese New Year

- `popover` adds the `placement` property to support configuration of different positions `'top | right | bottom | left | auto'` [#308](https://github.com/ant-design/ant-design-mobile-rn/issues/308)

### 3.1.0

`2019-01-27`

- Refactor `popover` [#298](https://github.com/ant-design/ant-design-mobile-rn/pull/298)
  - Removed the (`overlayStyle` `contextStyle` `name` `openMenu / closeMenu / toggleMenu` `style` ) property. The refactored version supports multiple Popovers.
  - Please see the popover example for how to use it.
- Fix `input-item` style should not be applied to outer container [#279](https://github.com/ant-design/ant-design-mobile-rn/issues/279)

### 3.0.6

`2019-01-15`

- Fixes `image-picker` `groupTypes` is not supported on Android [#264](https://github.com/ant-design/ant-design-mobile-rn/issues/264)
- Fixes `tab-bar` does not update component after tab has changed [#201](https://github.com/ant-design/ant-design-mobile-rn/issues/201)

### 3.0.5

`2019-01-03`

- Modify `search-bar` icon size [#250](https://github.com/ant-design/ant-design-mobile-rn/pull/250)
- Fixes `input-item` has new line after blur under `ios` [#249](https://github.com/ant-design/ant-design-mobile-rn/issues/249)
- Fixes `input-item` clear icon is not displayed correctly under `android` [#248](https://github.com/ant-design/ant-design-mobile-rn/issues/248)

### 3.0.4

`2018-12-28`

- Modify `SegmentedControl` default color to theme color [#211](https://github.com/ant-design/ant-design-mobile-rn/pull/211)
- Allow overriding `Tabs` `tabBarUnderlineStyle`
- Improve `SwipeAction` TypeScript type definition [#230](https://github.com/ant-design/ant-design-mobile-rn/pull/230)
- Improve the `Grid` document and modify the `onClick` property to `onPress` [#234](https://github.com/ant-design/ant-design-mobile-rn/pull/234)
- Fixed `Modal` circular reference warning [#242](https://github.com/ant-design/ant-design-mobile-rn/pull/242)

### 3.0.0

`2018-12-15`

**Breaking Changes** for more informations please checkout [#119](https://github.com/ant-design/ant-design-mobile-rn/issues/119)

- We get a new package name `@ant-design/react-native` from [afc163](https://github.com/afc163). Thanks..
- Remove the native suffix
- More friendly theme support
- Improve TypeScript type definitions
- Bug fixes
- We can preview our Components online using codesandbox and react-native-web
- Refactor Icon Component and use [ant-design-icons](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react-native) instead
- `Toast` has removed method `hide`
- Change `Grid` property `onClick` to `onPress`
- Upgrade from 2.x to 3.0.0 please checkout [upgrade notes](https://rn.mobile.ant.design/docs/react/upgrade-notes)

### 2.3.0

`2018-10-20`

- `Input` add `editable` support. ([#78](https://github.com/ant-design/ant-design-mobile-rn/pull/78))
- Fix `Button` component's `activeStyle` does not work. ([#105](https://github.com/ant-design/ant-design-mobile-rn/pull/105))
- `Modal` add locale support. ([#115](https://github.com/ant-design/ant-design-mobile-rn/pull/115))
- Spanish. ([#75](https://github.com/ant-design/ant-design-mobile-rn/pull/75))
- TypeScript type definition improvements. ([#83](https://github.com/ant-design/ant-design-mobile-rn/pull/83))

### 2.2.1

`2018-07-17`

- Calculate `Grid` item height via `column` property. ([#61](https://github.com/ant-design/ant-design-mobile-rn/pull/61))
- Replace with normalize-css-color. ([#57](https://github.com/ant-design/ant-design-mobile-rn/pull/57))

### 2.2.0

`2018-06-15`

- split the antd-mobile react native code to `antd-mobile-rn` package.
- Feature: Make `Tag` support long press. ([#20](https://github.com/ant-design/ant-design-mobile-rn/issues/20))

### 2.1.11

`2018-05-31`

[antd-mobile@2.1.11 and before change log](https://github.com/ant-design/ant-design-mobile/blob/master/CHANGELOG.en-US.md#2111)
