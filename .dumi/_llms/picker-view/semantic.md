### Abstract DOM Structure

```html
<!-- 整体容器，包含所有轮子及遮罩层
  对应 styles.wrappper：容器整体布局样式
  对应 style 基础属性：支持外层自定义样式透传 -->
<View style={style} styles={{ wrappper }}>
  <!-- 轮子包裹容器，高度动态由内部测量与外层布局决定
    对应 styles.wheelWrapper：轮子区域包裹样式 -->
  <View styles={{ wheelWrapper }}>

    <!-- 条件渲染：加载 loading 时显示的 loading 容器 -->
    <!-- loading 状态下显示 loading 内容或默认 ActivityIndicator -->
    <View style={{ flex: 1, alignSelf: 'center' }}>
      <!-- loading 动画指示器 -->
      <ActivityIndicator style={p.indicatorStyle || {}} />
    </View>

    <!-- 非 loading 时，轮子列表映射，每一个表示一列 -->
    <!-- 以下示例只展示一个 Wheel 组件，表示一个轮子 -->
    <!-- Wheel 组件内部展示可滚动选择的 Picker 项 -->
    <Wheel
      index={0}
      column={[] /* 当前列数据 */}
      value={undefined /* 当前列选中值 */}
      onSelect={() => {} /* 选中回调 */}
      itemHeight={0 /* 每项高度 */}
      wheelHeight={0 /* 轮子高度 */}
      renderLabel={() => <View styles={{ itemWrap }}>
        <!-- 单个选项容器，固定高度，包裹文本 -->
        <Text styles={{ itemStyle, itemActiveStyle }}>
          <!-- 选项文本内容 -->
        </Text>
      </View>}
      styles={{ /* Wheel 内部未暴露样式，视为功能组件 */ }}
    />

  </View>

  <!-- 遮罩层整体，覆盖在 Wheel 组件上，禁止触摸穿透
    对应 styles.mask：遮罩层容器样式 -->
  <View styles={{ mask }} pointerEvents="none">

    <!-- 遮罩层顶部区域，用于渐隐效果等视觉表现
        对应 styles.maskTop：顶部渐变遮罩样式 -->
    <View styles={{ maskTop }}>
      <!-- 自定义渲染的顶部遮罩内容 -->
    </View>

    <!-- 遮罩层中间区域，通常为高亮显示区，使中间项突出
        对应 styles.maskMiddle：中间区域高亮遮罩样式
        动态 height 绑定 itemHeight -->
    <View styles={{ maskMiddle }} />

    <!-- 遮罩层底部区域，用于渐隐效果等视觉表现
        对应 styles.maskBottom：底部渐变遮罩样式 -->
    <View styles={{ maskBottom }}>
      <!-- 自定义渲染的底部遮罩内容 -->
    </View>

  </View>
</View>
```
