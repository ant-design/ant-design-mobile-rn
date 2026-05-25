## Slider

### Usage Example

```jsx
import { List, Provider, Slider, Switch, Toast } from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

export default function StepperExample() {
  useEffect(() => {
    Toast.config({ stackable: false })
  }, [])

  const [disabledStep, setDisabledStep] = useState(false)
  const [tapToSeek, setTapToSeek] = useState(true)
  const marks = {
    0: 0,
    // 20: 20,
    40: 40,
    60: '',
    80: 80,
    100: 100,
  }

  const toastValue = (value: number | [number, number]) => {
    let text = ''
    if (typeof value === 'number') {
      text = `${value}`
    } else {
      text = `[${value.join(',')}]`
    }
    Toast.show({ content: `当前选中值为：${text}`, position: 'top' })
  }

  return (
    <Provider>
      <ScrollView>
        <List>
          <List.Item
            extra={
              <Switch
                checked={disabledStep}
                onChange={(val) => {
                  setDisabledStep(val)
                }}
              />
            }>
            Disabled Step
            <List.Item.Brief>
              是否禁用步距；禁用后`onChange`将返回带有小数点的值
            </List.Item.Brief>
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={tapToSeek}
                onChange={(val) => {
                  setTapToSeek(val)
                }}
              />
            }>
            Tap To Seek
            <List.Item.Brief>
              是否允许点击滑块轨道来设置slider值
            </List.Item.Brief>
          </List.Item>
        </List>
        <List
          renderHeader={'基础用法'}
          onStartShouldSetResponder={() => true}
          onTouchStart={(e) => e.stopPropagation()}>
          <List.Item>
            <Slider
              max={1}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
              onChange={toastValue}
              onAfterChange={toastValue}
              onSlidingStart={(val, index) =>
                console.log('onSlidingStart', { val, index })
              }
              onSlidingComplete={(val, index) =>
                console.log('onSlidingComplete', { val, index })
              }
            />
          </List.Item>
        </List>
        <List renderHeader={'显示刻度(ticks)并指定步距(step)'}>
          <List.Item>
            <Slider
              ticks
              step={10}
              defaultValue={40}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'传入刻度标记(marks)'}>
          <List.Item>
            <Slider
              marks={marks}
              ticks
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'最大(max)/最小值(min)'}>
          <List.Item>
            <Slider
              step={100}
              min={100}
              max={1000}
              ticks
              onAfterChange={toastValue}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'双滑块(range)'}>
          <List.Item>
            <Slider
              marks={marks}
              ticks
              range
              defaultValue={[60, 40]}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'在拖动时显示悬浮提示'}>
          <List.Item>
            <Slider popover disabledStep={disabledStep} tapToSeek={tapToSeek} />
          </List.Item>
        </List>
      </ScrollView>
    </Provider>
  )
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SliderStyle {
  slider: ViewStyle
  disabled: ViewStyle

  // 轨道
  trackContianer: ViewStyle
  track: ViewStyle
  fill: ViewStyle

  // 滑轨按钮
  thumb: ViewStyle

  // 刻度
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle

  // 刻度下的标记
  mark: ViewStyle
  markText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SliderStyle>({
    slider: {
      paddingVertical: 5,
      paddingHorizontal: 14,
    },
    disabled: {},
    trackContianer: {
      paddingVertical: 8,
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    track: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.fill_grey,
    },
    fill: {
      position: 'absolute',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.brand_primary,
    },

    thumb: {
      zIndex: 3,
    },

    ticks: {
      position: 'absolute',
      width: '100%',
      height: 3,
      backgroundColor: 'transparent',
      zIndex: 2,
    },
    tick: {
      position: 'absolute',
      top: -2,
      width: 7,
      height: 7,
      marginLeft: -3,
      backgroundColor: theme.fill_grey,
      borderRadius: 7,
    },
    tickActive: {
      backgroundColor: theme.brand_primary,
    },

    mark: {
      position: 'relative',
      width: '100%',
      height: 11,
    },
    markText: {
      transform: [{ translateX: -theme.font_size_caption_sm / 2 }],
      fontSize: theme.font_size_caption_sm,
      color: theme.color_text_paragraph,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 手势检测器容器，绑定滑动，点击等手势 -->
<GestureDetector style={{}}>
  <!-- 整个 Slider 容器区域 -->
  <!-- 视觉用途：Slider 容器区域 -->
  <!-- 对应 styles.slider：Slider 组件主容器样式 -->
  <!-- 对应 styles.disabled：禁用时叠加样式 -->
  <!-- 支持 style 基础属性透传 style={...} -->
  <View style={[styles.slider, disabled && styles.disabled, style]}>

    <!-- 滑轨容器 -->
    <!-- 视觉用途：滑轨的触摸区域容器 -->
    <!-- 对应 styles.trackContianer：滑轨容器样式 -->
    <View style={styles.trackContianer} onLayout={...}>

      <!-- 滑轨背景条 -->
      <!-- 视觉用途：滑轨轨道背景 -->
      <!-- 对应 styles.track：滑轨条背景样式 -->
      <View style={styles.track} />

      <!-- 滑轨填充条，表示已选择的范围 -->
      <!-- 视觉用途：滑轨已选中的范围 -->
      <!-- 动态样式包含 left 和 width 由滑块位置控制 -->
      <!-- 对应 styles.fill：填充条样式 -->
      <Animated.View style={[styles.fill, /*动态 fillStyle*/]} />

      <!-- 刻度容器，条件渲染：ticks 为 true 时显示 -->
      <!-- 视觉用途：刻度点整体容器 -->
      <!-- 对应 styles.ticks：刻度点容器样式 -->
      <View style={styles.ticks}>
        <!-- 单条刻度点，重复元素 -->
        <!-- 视觉用途：单个刻度点 -->
        <!-- 动态样式决定是否激活对应样式按滑块位置判断 -->
        <!-- 对应 styles.tick：刻度点默认样式 -->
        <!-- 对应 styles.tickActive：激活状态刻度点样式 -->
        <Animated.View style={[styles.tick, styles.tickActive /*动态根据滑块位置切换*/, { left: 'X%' }]} />
        <!-- 省略其他刻度点 -->
      </View>

      <!-- 滑块 1，右滑块，如果 range 为 true 则表示区间最大值滑块 -->
      <!-- 视觉用途：滑块按钮 -->
      <!-- 对应 styles.thumb：滑块按钮样式 -->
      <Animated.View style={[styles.thumb, /*动态横向位移*/]}>
        <!-- 滑块内容，默认显示 ThumbIcon 或者自定义 icon，支持带气泡浮层 -->
        <!-- 气泡浮层由 Tooltip 组件实现 -->
        <View>{/* ThumbIcon 或 icon，自定义内容 */}</View>
      </Animated.View>

      <!-- 滑块 0，左滑块，仅 range 为 true 时渲染 -->
      <!-- 视觉用途：区间左侧滑块按钮 -->
      <!-- 同右侧滑块样式及行为 -->
      <Animated.View style={[styles.thumb, /*动态横向位移*/]}>
        <View>{/* ThumbIcon 或 icon，自定义内容 */}</View>
      </Animated.View>

    </View>

    <!-- 刻度下方的标记文本容器，条件渲染：marks 存在时显示 -->
    <!-- 视觉用途：滑轨下方的文本标记容器 -->
    <!-- 对应 styles.mark：标记容器样式 -->
    <View style={styles.mark}>
      <!-- 单个标记文本，代表性示例 -->
      <!-- 视觉用途：单个标记文本 -->
      <!-- 对应 styles.markText：标记文本样式 -->
      <View style={{ position: 'absolute', left: 'X%' }}>
        <View style={styles.markText}>标记内容</View>
      </View>
      <!-- 省略其他标记 -->
    </View>

  </View>
</GestureDetector>
```
