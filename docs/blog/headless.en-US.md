---
category: Blog
title: Use Headless style to transform antd
author: 1uokun
date: 2024-11-19
---

2024-11-19 [@1uokun](https://github.com/1uokun)

> Take Slider as an example

 - **Basic**
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

 - **Two Slider thumb**
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
        
 - **Track style change**
   - Ant Design
     (Not support❌)
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

## Advantages

1. `styles` has been deconstructed, each element style is independent and better supports `tailwind` and `animate style`
2. Functions can be added or removed by adding or removing `react element` instead of `props`
3. Component code is localized and can be expanded by yourself

## Implementation

1. Deconstructing the components of `Slider`
   - Track
   - Range
   - Thumb
   - Gesture
   - Root

2. Root component uses `Context` to share props to children
   ```jsx
    // <Slier.Root> code
    <SliderContext.Provider value={props}>
        <Slider.Gesture gesture={gesture}>
            {props.children}
        </Slider.Gesture>
    </SliderContext.Provider>
   ```

3. Still retain support for **Ant Design**
   > Just download a set of antd style template code

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
   Usage:
   ```jsx
   import { Slider } from "@/components/ui/slider"

   <Slider defaultValue={33} max={100} step={1} />
   ```

## The End

> discussions:  https://github.com/ant-design/ant-design-mobile-rn/discussions/1395