---
category: Blog
title: 使用Headless风格改造antd
author: 1uokun
date: 2024-11-19
---

2024-11-19 [@1uokun](https://github.com/1uokun)

> 以 Slider 为例

 - **基础使用**
   - Ant Design
        ```jsx
            <Slider />
        ```
   - Headless UI
        ```jsx
            <Slider.Root>
                <Slider.Track>
                    <Slider.Range />
                </Slider.Tack>
                <Slider.Thumb />
            </Slider.Root>
        ```

 - **双滑块**
   - Ant Design
        ```jsx
            <Slider range/>
        ```
   - Headless UI
        ```diff
            <Slider.Root>
                <Slider.Track>
                    <Slider.Range />
                </Slider.Tack>
        +    <Slider.Thumb index={0}/>
        +    <Slider.Thumb index={1}/>
            </Slider.Root>
        ```

 - **修改轨道样式**
   - Ant Design
        ```jsx
            <Slider styles={{track:{...}}}/>
        ```
   - Headless UI
        ```diff
            <Slider.Root>
        +    <Slider.Track style={{...}} className={{...}}>
        -    <Slider.Track>
                    <Slider.Range />
                </Slider.Tack>
                <Slider.Thumb />
            </Slider.Root>
        ```

 - **轨道内添加元素**
   - Ant Design
        ```
        不支持❌
        ```
   - Headless UI
        ```diff
            <Slider.Root>
                <Slider.Track>
                    <Slider.Range />
        +         <View>
        +            ...
        +         </View>
                </Slider.Tack>
                <Slider.Thumb />
            </Slider.Root>
        ```

## 优势

1. `styles`样式被解构了，每一个元素样式独立并更好地支持`tailwind`和`animate style`
2. 通过`react element`的增删实现功能的增删，而非`props`
3. 组件内部代码透明，可自行拓展

## 实现过程

1. 将Slider的组成元素解构
   - 轨道 Track
   - 轨道已填充部分 Range
   - 滑块 Thumb
   - 手势系统 Gesture
   - 根组件 Root

2. 根组件Root使用Context共享props给所有子元素
   ```jsx
    // <Slier.Root> 实现
    <SliderContext.Provider value={props}>
        <Slider.Gesture gesture={gesture}>
            {props.children}
        </Slider.Gesture>
    </SliderContext.Provider>
   ```

3. 依然保留支持antd设计语言
   > 下载一套antd style template代码即可
   
   ```jsx
   // @/components/ui/slider
    <Slider.Root className="..." {...props}>
        <Slider.Track className="...">
            <Slider.Range className="..."/>
        </Slider.Tack>
        <Slider.Thumb index={0} className="..."/>
        {props.range && <Slider.Thumb index={1} className="..."/>}
    </Slider.Root>
   ```
   使用：
   ```jsx
   import { Slider } from "@/components/ui/slider"

   <Slider defaultValue={33} max={100} step={1} />
   ```

## 结尾

> 讨论区： https://github.com/ant-design/ant-design-mobile-rn/discussions/1395