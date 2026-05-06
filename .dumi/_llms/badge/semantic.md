### Abstract DOM Structure

```html
<!-- 最外层包裹容器，主要用于整体布局和定位 
     对应 styles.wrap：包裹层样式 -->
<View styles={{ wrap }} style={...}>
  <!-- 内容包裹容器，定位 children 和徽标内容 
       对应 styles.textCornerWrap（corner 模式）/ styles.textDomWrap（非 corner 模式） 动态 -->
  <View styles={{ textCornerWrap /* 或 textDomWrap */ }}>
    <!-- 子节点内容（children） -->
    {children}
    <!-- 条件渲染：当 text 或 dot 存在时展示徽标内容 -->
    
    <!-- 普通文本徽标容器 
         视觉用途：承载数字或文字徽标
         对应 styles.textDom，styles.textDomlarge（size 为 large 时） 动态 -->
    <View styles={{ textDom, textDomlarge /* 动态选其一 */ }}>
      <!-- 徽标文字内容 
           对应 styles.text：文本样式 -->
      <Text styles={{ text }}/>
    </View>

    <!-- 点徽标容器（dot 为 true 时显示） 
         视觉用途：小圆点样式徽标
         对应 styles.dot，styles.dotSizelarge（size 为 large 时） 动态 -->
    <View styles={{ dot, dotSizelarge /* 动态选其一 */ }}/>
  </View>
</View>
```
