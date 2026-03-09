"use strict";(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[2579],{59386:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var n=e(67294),d={}},65890:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var n=e(67294),d={}},69050:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var n=e(67294),d={}},91242:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var n=e(67294),d={}},67378:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var n=e(67294),d={}},19673:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var n=e(67294),d={}},33663:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"2024-11-19 ",paraId:0},{value:"@1uokun",paraId:0},{value:"\u4EE5 Slider \u4E3A\u4F8B",paraId:1},{value:"\u57FA\u7840\u4F7F\u7528",paraId:2},{value:`Ant Design
`,paraId:3},{value:`    <Slider />
`,paraId:4},{value:`Headless UI
`,paraId:3},{value:`    <Slider.Root>
        <Slider.Track>
            <Slider.Range />
        </Slider.Tack>
        <Slider.Thumb />
    </Slider.Root>
`,paraId:5},{value:"\u53CC\u6ED1\u5757",paraId:6},{value:`Ant Design
`,paraId:7},{value:`    <Slider range/>
`,paraId:8},{value:`Headless UI
`,paraId:7},{value:`    <Slider.Root>
        <Slider.Track>
            <Slider.Range />
        </Slider.Tack>
+    <Slider.Thumb index={0}/>
+    <Slider.Thumb index={1}/>
    </Slider.Root>
`,paraId:9},{value:"\u4FEE\u6539\u8F68\u9053\u6837\u5F0F",paraId:10},{value:`Ant Design
`,paraId:11},{value:`    <Slider styles={{track:{...}}}/>
`,paraId:12},{value:`Headless UI
`,paraId:11},{value:`    <Slider.Root>
+    <Slider.Track style={{...}} className={{...}}>
-    <Slider.Track>
            <Slider.Range />
        </Slider.Tack>
        <Slider.Thumb />
    </Slider.Root>
`,paraId:13},{value:"\u8F68\u9053\u5185\u6DFB\u52A0\u5143\u7D20",paraId:14},{value:`Ant Design
`,paraId:15},{value:`\u4E0D\u652F\u6301\u274C
`,paraId:16},{value:`Headless UI
`,paraId:15},{value:`    <Slider.Root>
        <Slider.Track>
            <Slider.Range />
+         <View>
+            ...
+         </View>
        </Slider.Tack>
        <Slider.Thumb />
    </Slider.Root>
`,paraId:17},{value:"styles",paraId:18,tocIndex:0},{value:"\u6837\u5F0F\u88AB\u89E3\u6784\u4E86\uFF0C\u6BCF\u4E00\u4E2A\u5143\u7D20\u6837\u5F0F\u72EC\u7ACB\u5E76\u66F4\u597D\u5730\u652F\u6301",paraId:18,tocIndex:0},{value:"tailwind",paraId:18,tocIndex:0},{value:"\u548C",paraId:18,tocIndex:0},{value:"animate style",paraId:18,tocIndex:0},{value:"\u901A\u8FC7",paraId:18,tocIndex:0},{value:"react element",paraId:18,tocIndex:0},{value:"\u7684\u589E\u5220\u5B9E\u73B0\u529F\u80FD\u7684\u589E\u5220\uFF0C\u800C\u975E",paraId:18,tocIndex:0},{value:"props",paraId:18,tocIndex:0},{value:"\u7EC4\u4EF6\u5185\u90E8\u4EE3\u7801\u900F\u660E\uFF0C\u53EF\u81EA\u884C\u62D3\u5C55",paraId:18,tocIndex:0},{value:"\u5C06Slider\u7684\u7EC4\u6210\u5143\u7D20\u89E3\u6784",paraId:19,tocIndex:1},{value:"\u8F68\u9053 Track",paraId:20,tocIndex:1},{value:"\u8F68\u9053\u5DF2\u586B\u5145\u90E8\u5206 Range",paraId:20,tocIndex:1},{value:"\u6ED1\u5757 Thumb",paraId:20,tocIndex:1},{value:"\u624B\u52BF\u7CFB\u7EDF Gesture",paraId:20,tocIndex:1},{value:"\u6839\u7EC4\u4EF6 Root",paraId:20,tocIndex:1},{value:"\u6839\u7EC4\u4EF6Root\u4F7F\u7528Context\u5171\u4EABprops\u7ED9\u6240\u6709\u5B50\u5143\u7D20",paraId:21,tocIndex:1},{value:` // <Slier.Root> \u5B9E\u73B0
 <SliderContext.Provider value={props}>
     <Slider.Gesture gesture={gesture}>
         {props.children}
     </Slider.Gesture>
 </SliderContext.Provider>
`,paraId:22,tocIndex:1},{value:"\u4F9D\u7136\u4FDD\u7559\u652F\u6301antd\u8BBE\u8BA1\u8BED\u8A00",paraId:23,tocIndex:1},{value:"\u4E0B\u8F7D\u4E00\u5957antd style template\u4EE3\u7801\u5373\u53EF",paraId:24,tocIndex:1},{value:`// @/components/ui/slider
 <Slider.Root className="..." {...props}>
     <Slider.Track className="...">
         <Slider.Range className="..."/>
     </Slider.Tack>
     <Slider.Thumb index={0} className="..."/>
     {props.range && <Slider.Thumb index={1} className="..."/>}
 </Slider.Root>
`,paraId:25,tocIndex:1},{value:"\u4F7F\u7528\uFF1A",paraId:26,tocIndex:1},{value:`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={33} max={100} step={1} />
`,paraId:27,tocIndex:1},{value:"\u8BA8\u8BBA\u533A\uFF1A ",paraId:28,tocIndex:2},{value:"https://github.com/ant-design/ant-design-mobile-rn/discussions/1395",paraId:28,tocIndex:2}]},3903:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"2026-03-08 ",paraId:0},{value:"@1uokun",paraId:0},{value:"\u5982\u4F55\u8BA9 Cursor\u3001Windsurf \u548C Claude \u7B49 AI \u5DE5\u5177\u66F4\u597D\u5730\u7406\u89E3 Ant Design Mobile RN \u7EC4\u4EF6\u5E93\uFF1F",paraId:1,tocIndex:0},{value:"\u6211\u4EEC\u63D0\u4F9B\u591A\u4E2A LLMs.txt \u8DEF\u7531\u6765\u5E2E\u52A9 AI \u5DE5\u5177\u8BBF\u95EE\u6587\u6863\uFF1A",paraId:2,tocIndex:1},{value:"llms.txt",paraId:3,tocIndex:1},{value:"\uFF1A\u5305\u542B\u6240\u6709\u7EC4\u4EF6\u53CA\u5176\u6587\u6863\u94FE\u63A5\u7684\u7ED3\u6784\u5316\u6982\u89C8",paraId:3,tocIndex:1},{value:"llms-full.txt",paraId:3,tocIndex:1},{value:"\uFF1A\u5305\u542B\u6240\u6709\u7EC4\u4EF6\u53CA\u5176\u6587\u6863\u94FE\u63A5\u7684\u5B8C\u6574\u6982\u89C8",paraId:3,tocIndex:1},{value:"llms-semantic.md",paraId:3,tocIndex:1},{value:"\uFF1A\u6240\u6709\u7EC4\u4EF6\u8BED\u4E49\u5316 DOM \u7ED3\u6784\u6587\u6863",paraId:3,tocIndex:1},{value:`https://rn.mobile.ant.design/
\u251C\u2500\u2500 llms.txt
\u251C\u2500\u2500 llms-full.txt
\u251C\u2500\u2500 llms-semantic.md
\u251C\u2500\u2500 components/
\u2502   \u251C\u2500\u2500 button.md
\u2502   \u251C\u2500\u2500 button/
\u2502   \u2502   \u2514\u2500\u2500 semantic.md
\u2502   \u251C\u2500\u2500 picker-view.md
\u2502   \u251C\u2500\u2500 picker-view/
\u2502   \u2502   \u2514\u2500\u2500 semantic.md
\u2502   \u2514\u2500\u2500 ...

`,paraId:4,tocIndex:2},{value:"LLMs.txt",paraId:5,tocIndex:3},{value:" \u662F\u4E13\u95E8\u4E3A\u5927\u8BED\u8A00\u6A21\u578B\u63D0\u4F9B\u7684\u7ED3\u6784\u5316\u6587\u6863\uFF0C\u4E3B\u8981\u5305\u542B\uFF1A",paraId:5,tocIndex:3},{value:"\u7EC4\u4EF6\u7684\u6838\u5FC3\u529F\u80FD\u548C\u7528\u9014",paraId:6,tocIndex:3},{value:"API \u63A5\u53E3\u7684\u5B8C\u6574\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u4F7F\u7528\u573A\u666F\u548C\u6700\u4F73\u5B9E\u8DF5",paraId:6,tocIndex:3},{value:"\u4E0E\u5176\u4ED6\u7EC4\u4EF6\u7684\u5173\u7CFB",paraId:6,tocIndex:3},{value:"\u5E38\u89C1\u95EE\u9898\u548C\u6CE8\u610F\u4E8B\u9879",paraId:6,tocIndex:3},{value:"\u5173\u4E8E ",paraId:7,tocIndex:3},{value:"LLMs.txt",paraId:7,tocIndex:3},{value:" \u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003 antd \u5B98\u65B9\u6587\u6863\uFF1A",paraId:7,tocIndex:3},{value:"https://ant.design/docs/react/llms-cn",paraId:8,tocIndex:3},{value:"\u5728 ",paraId:9,tocIndex:4},{value:"@ant-design/react-native",paraId:9,tocIndex:4},{value:" \u4E2D\uFF0C\u6211\u4EEC\u91CD\u70B9\u589E\u5F3A\u7684\u662F ",paraId:9,tocIndex:4},{value:"semantic.md",paraId:9,tocIndex:4},{value:"\uFF0C\u4E3B\u8981\u5305\u542B\uFF1A",paraId:9,tocIndex:4},{value:"\u4F7F\u7528\u6848\u4F8B",paraId:10,tocIndex:4},{value:"styles \u6837\u5F0F\u5B9A\u4E49",paraId:10,tocIndex:4},{value:`\u6241\u5E73\u62BD\u8C61\u540E\u7684 DOM \u7ED3\u6784\uFF0C\u540C\u65F6\u5305\u62EC
`,paraId:10,tocIndex:4},{value:"\u6837\u5F0F\u5F15\u7528",paraId:11,tocIndex:4},{value:"\u5FC5\u8981\u7684\u8BED\u4E49\u6CE8\u91CA",paraId:11,tocIndex:4},{value:"\u6761\u4EF6\u6E32\u67D3\u903B\u8F91",paraId:11,tocIndex:4},{value:"\u4E8B\u4EF6\u5904\u7406",paraId:11,tocIndex:4},{value:"\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u4EE3\u7801\u901A\u5E38\u4F4D\u4E8E ",paraId:12,tocIndex:5},{value:"node_modules",paraId:12,tocIndex:5},{value:" \u76EE\u5F55\u4E0B\uFF0C\u540C\u65F6\u7EC4\u4EF6\u5B9E\u73B0\u53EF\u80FD\u4F9D\u8D56\uFF1A",paraId:12,tocIndex:5},{value:"\u591A\u5C42\u7EC4\u4EF6\u5D4C\u5957",paraId:13,tocIndex:5},{value:"hooks",paraId:13,tocIndex:5},{value:"props \u900F\u4F20",paraId:13,tocIndex:5},{value:"\u52A8\u6001\u6837\u5F0F\u7EC4\u5408",paraId:13,tocIndex:5},{value:"\u4F8B\u5982\uFF1A",paraId:14,tocIndex:5},{value:`PickerView
 \u2514\u2500 Wheel
     \u2514\u2500 Item
         \u2514\u2500 Text
`,paraId:15,tocIndex:5},{value:"\u5BF9\u4E8E LLM \u6765\u8BF4\uFF1A",paraId:16,tocIndex:5},{value:"\u6D45\u5C42\u601D\u8003\u5E7B\u89C9\u4E25\u91CD",paraId:17,tocIndex:5},{value:"\u6DF1\u5EA6\u601D\u8003\u6D6A\u8D39 token",paraId:17,tocIndex:5},{value:"\u56E0\u6B64 ",paraId:18,tocIndex:5},{value:"semantic.md",paraId:18,tocIndex:5},{value:" \u505A\u4E86\u4E00\u4EF6\u975E\u5E38\u91CD\u8981\u7684\u4E8B\u60C5\uFF1A",paraId:18,tocIndex:5},{value:"\u5C06\u7EC4\u4EF6\u6E90\u7801\u201C\u62BD\u8C61\u201D\u4E3A AI \u53CB\u597D\u7684\u7ED3\u6784\u6587\u6863",paraId:18,tocIndex:5},{value:"\u4E3B\u8981\u7279\u70B9\uFF1A",paraId:19,tocIndex:5},{value:"DOM \u6241\u5E73\u5316",paraId:20,tocIndex:5},{value:"styles key \u663E\u5F0F\u5316",paraId:20,tocIndex:5},{value:"\u8BED\u4E49\u6CE8\u91CA\u5B8C\u6574",paraId:20,tocIndex:5},{value:"\u9996\u9875AI Chat\u6848\u4F8B ",paraId:21,tocIndex:6},{value:"<\u67E5\u770B\u9884\u8BBE\u63D0\u793A\u8BCD>",paraId:21,tocIndex:6},{value:" \u53EF\u76F4\u63A5\u590D\u5236\u4F7F\u7528",paraId:21,tocIndex:6},{value:"\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u628A\u6240\u6709\u7EC4\u4EF6\u6587\u6863\u76F4\u63A5\u4EA4\u7ED9 LLM\uFF0C\u800C\u662F\u901A\u8FC7\u7C7B\u4F3C ",paraId:22,tocIndex:6},{value:"RAG\uFF08Retrieval-Augmented Generation\uFF09",paraId:22,tocIndex:6},{value:" \u7684\u6D41\u7A0B\uFF0C\u53EA\u63D0\u4F9B\u5FC5\u8981\u7684\u4FE1\u606F\u3002",paraId:22,tocIndex:6},{value:"\u6574\u4F53\u6D41\u7A0B\u5982\u4E0B\uFF1A",paraId:23,tocIndex:6},{value:`\u7528\u6237\u8F93\u5165 UI \u63CF\u8FF0 / \u56FE\u7247
        \u2193
\u8BFB\u53D6 llms.txt
        \u2193
\u8BC6\u522B\u6700\u53EF\u80FD\u7684\u7EC4\u4EF6
        \u2193
\u8BFB\u53D6\u5BF9\u5E94\u7EC4\u4EF6 semantic.md
        \u2193
\u6784\u5EFA Prompt
        \u2193
LLM \u751F\u6210 styles / \u4EE3\u7801
`,paraId:24,tocIndex:6},{value:"llms.txt",paraId:25,tocIndex:7},{value:" \u662F\u7EC4\u4EF6\u5E93\u7684\u7D22\u5F15\u6587\u4EF6\uFF0C\u5305\u542B\u7EC4\u4EF6\u5217\u8868\uFF1A",paraId:25,tocIndex:7},{value:`## Components

- Button
- PickerView
- Calendar
- Modal
...
`,paraId:26,tocIndex:7},{value:"\u5F53\u7528\u6237\u8F93\u5165 UI \u63CF\u8FF0\u65F6\uFF0CLLM \u4F1A\u6839\u636E ",paraId:27,tocIndex:7},{value:"llms.txt",paraId:27,tocIndex:7},{value:" \u5224\u65AD\uFF1A",paraId:27,tocIndex:7},{value:"\u8FD9\u4E2A UI \u6700\u50CF\u54EA\u4E2A\u7EC4\u4EF6\uFF1F",paraId:28,tocIndex:7},{value:"\u4F8B\u5982\uFF1A",paraId:29,tocIndex:7},{value:"\u7528\u6237\u8F93\u5165\uFF1A",paraId:30,tocIndex:7},{value:`\u4E00\u4E2A iOS \u98CE\u683C\u7684\u6EDA\u8F6E\u9009\u62E9\u5668\uFF0C\u53EF\u4EE5\u4E0A\u4E0B\u6EDA\u52A8\u9009\u62E9\u9009\u9879
`,paraId:31,tocIndex:7},{value:"LLM \u8BC6\u522B\uFF1A",paraId:32,tocIndex:7},{value:`PickerView
`,paraId:33,tocIndex:7},{value:"\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\uFF1A",paraId:34,tocIndex:7},{value:"\u4F7F\u7528\u9519\u8BEF\u7EC4\u4EF6",paraId:35,tocIndex:7},{value:"LLM \u81EA\u5DF1\u53D1\u660E\u7EC4\u4EF6",paraId:35,tocIndex:7},{value:"\u591A\u7EC4\u4EF6\u9519\u8BEF\u7EC4\u5408",paraId:35,tocIndex:7},{value:"\u8BC6\u522B\u7EC4\u4EF6\u540E\uFF0C\u62FC\u63A5 ",paraId:36,tocIndex:8},{value:"components/{component}/semantic.md",paraId:36,tocIndex:8},{value:" \u94FE\u63A5\uFF0C",paraId:36,tocIndex:8},{value:"\u4EE5 PickerView \u4E3A\u4F8B\uFF1A",paraId:37,tocIndex:8},{value:"https://rn.mobile.ant.design/components/picker-view/semantic.md",paraId:37,tocIndex:8},{value:"\u8FD9\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7EC4\u4EF6\uFF1A",paraId:38,tocIndex:8},{value:"DOM \u5C42\u7EA7\u7ED3\u6784",paraId:39,tocIndex:8},{value:"styles key",paraId:39,tocIndex:8},{value:"\u52A8\u6001\u6837\u5F0F\u89C4\u5219",paraId:39,tocIndex:8},{value:`<View styles={{ wrapper }}>
  <View styles={{ wheelWrapper }}>
    <Wheel>
      <View styles={{ itemWrap }}>
        <Text styles={{ itemStyle, itemActiveStyle }} />
      </View>
    </Wheel>
  </View>

  <View styles={{ mask }}>
    <View styles={{ maskTop }} />
    <View styles={{ maskMiddle }} />
    <View styles={{ maskBottom }} />
  </View>
</View>
`,paraId:40,tocIndex:8},{value:"\u76F8\u6BD4\u76F4\u63A5\u8BFB\u53D6\u6E90\u7801\uFF1A",paraId:41,tocIndex:8},{value:"\u7ED3\u6784\u66F4\u6E05\u6670",paraId:42,tocIndex:8},{value:"\u4E0A\u4E0B\u6587\u66F4\u7CBE\u7B80",paraId:42,tocIndex:8},{value:"\u8BED\u4E49\u66F4\u660E\u786E",paraId:42,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:43,tocIndex:9},{value:"llms.txt",paraId:43,tocIndex:9},{value:" + ",paraId:43,tocIndex:9},{value:"semantic.md",paraId:43,tocIndex:9},{value:"\uFF0C\u6211\u4EEC\u4E3A\u7EC4\u4EF6\u5E93\u6784\u5EFA\u4E86\u4E00\u5957 ",paraId:43,tocIndex:9},{value:"\u9762\u5411 LLM \u7684\u6587\u6863\u4F53\u7CFB",paraId:43,tocIndex:9},{value:"\uFF1A",paraId:43,tocIndex:9},{value:`llms.txt
    \u2193
\u7EC4\u4EF6\u8BC6\u522B

semantic.md
    \u2193
\u7EC4\u4EF6\u7ED3\u6784\u7406\u89E3

Prompt Pipeline
    \u2193
LLM \u751F\u6210\u4EE3\u7801
`,paraId:44,tocIndex:9},{value:"\u5728 AI Coding \u65F6\u4EE3\uFF0C\u7EC4\u4EF6\u5E93\u4E0D\u4EC5\u9700\u8981\uFF1A",paraId:45,tocIndex:9},{value:"\u7ED9\u4EBA\u770B\u7684\u6587\u6863",paraId:46,tocIndex:9},{value:"\u4E5F\u9700\u8981\uFF1A",paraId:47,tocIndex:9},{value:"\u7ED9 AI \u770B\u7684\u6587\u6863",paraId:48,tocIndex:9},{value:"semantic.md",paraId:49,tocIndex:9},{value:" \u6B63\u662F\u8FDE\u63A5\u7EC4\u4EF6\u5B9E\u73B0\u4E0E LLM \u7406\u89E3\u4E4B\u95F4\u7684\u6865\u6881\u3002",paraId:49,tocIndex:9}]},361:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"2024-08-08 ",paraId:0},{value:"@1uokun",paraId:0},{value:"\u5728\u804A",paraId:1,tocIndex:0},{value:"styles",paraId:1,tocIndex:0},{value:"\u662F\u4EC0\u4E48\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u7B80\u5355\u4E86\u89E3CSS-in-JS\u662F\u4EC0\u4E48\uFF1F",paraId:1,tocIndex:0},{value:"CSS-in-JS\u662F\u4E00\u79CD\u5C06CSS\u6837\u5F0F\u76F4\u63A5\u7F16\u5199\u5728JavaScript\u4EE3\u7801\u4E2D\u7684\u6280\u672F\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u80FD\u591F\u5728JavaScript\u6587\u4EF6\u4E2D\u5B9A\u4E49\u548C\u4F7F\u7528\u6837\u5F0F\u3002",paraId:2,tocIndex:0},{value:"\u5E38\u89C1\u7684CSS-in-JS\u5E93\u5305\u62EC\uFF1A",paraId:3,tocIndex:0},{value:"Styled-Components",paraId:4,tocIndex:0},{value:": \u5141\u8BB8\u4F60\u4F7F\u7528ES6\u7684\u6A21\u677F\u5B57\u7B26\u4E32\u8BED\u6CD5\u5B9A\u4E49\u6837\u5F0F\u3002",paraId:4,tocIndex:0},{value:"Emotion",paraId:4,tocIndex:0},{value:": \u63D0\u4F9B\u4E86\u9AD8\u6027\u80FD\u548C\u7075\u6D3B\u7684API\u6765\u5199CSS\u3002",paraId:4,tocIndex:0},{value:"JSS",paraId:4,tocIndex:0},{value:": \u901A\u8FC7JavaScript\u5BF9\u8C61\u5B9A\u4E49\u6837\u5F0F\uFF0C\u5E76\u5C06\u5176\u52A8\u6001\u6CE8\u5165\u5230DOM\u4E2D\u3002",paraId:4,tocIndex:0},{value:"\u800CReact-Native\u6839\u636E\u5B98\u7F51\u63CF\u8FF0\uFF0C",paraId:5,tocIndex:0},{value:"\u5728React-native\u4E2D\uFF0C\u6837\u5F0F\u662F\u901A\u8FC7JavaScript\u6765\u5B9E\u73B0\u7684\uFF0C\u6240\u6709\u7684\u6838\u5FC3\u7EC4\u4EF6\u90FD\u63A5\u53D7\u540D\u4E3Astyle\u7684\u5C5E\u6027\u3002",paraId:6,tocIndex:0},{value:"\u4E3A\u5E94\u5BF9\u5B9E\u9645\u5F00\u53D1\u4E2D\u7EC4\u4EF6\u7684\u6837\u5F0F\u4F1A\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u5EFA\u8BAE\u4F7F\u7528",paraId:7,tocIndex:0},{value:"StyleSheet.create",paraId:7,tocIndex:0},{value:"\u6765\u96C6\u4E2D\u5B9A\u4E49\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002",paraId:7,tocIndex:0},{value:"via",paraId:8,tocIndex:0},{value:"\u4E3E\u4E00\u4E2A\u57FA\u7840\u6848\u4F8B\uFF1A",paraId:9,tocIndex:0},{value:`const Button = ({ children }) => {
  return (
    <TouchableHighlight style={styles.myButton}>
      {children}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  myButton: {
    height: 47,
    backgroundColor: '#108ee9',
  },
})
`,paraId:10,tocIndex:0},{value:"\u8FD9\u5C31\u662F\u5929\u751F\u7684\u4E14\u53EA\u80FD\u652F\u6301CSS-in-JS\u4E86\u3002",paraId:11,tocIndex:0},{value:"\u5176\u4E2D",paraId:12,tocIndex:0},{value:"StyleSheet.create",paraId:12,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u662F\u7C7B\u4F3C\u4E8E",paraId:12,tocIndex:0},{value:"react-jss",paraId:12,tocIndex:0},{value:"\uFF0C\u5C5E\u4E8ECSS-in-JS\u4E2D\u7684JSS\uFF08JavaScript Style Sheets\uFF09\u4E00\u7C7B\uFF0C\u4ED6\u4EEC\u6709\u7740\u4EE5\u4E0B\u7684\u4F18\u52BF\uFF1A",paraId:12,tocIndex:0},{value:"\u521B\u5EFA\u4E00\u4E2A ",paraId:13,tocIndex:1},{value:"useStyles",paraId:13,tocIndex:1},{value:" hook\u51FD\u6570\uFF0C\u63A5\u6536\u4E00\u4E2Aprops\u5BF9\u8C61\uFF0C\u5E76\u8FD4\u56DE",paraId:13,tocIndex:1},{value:"StyleSheet.create",paraId:13,tocIndex:1},{value:"\u7684\u5BF9\u8C61\u3002",paraId:13,tocIndex:1},{value:"\u8FD9\u6837\u6837\u5F0F\u4E2D\u5C31\u53EF\u4EE5\u4F7F\u7528\u6765\u81EA\u7EC4\u4EF6props\u5BF9\u8C61\uFF1A",paraId:14,tocIndex:1},{value:`const Button = ({children, ...props}) => {
  const styles = useStyles(props)
  return (
    <TouchableHighlight style={styles.myButton}>
      {children}
    </TouchableHighlight>
  )
}

// create useStyles hooks
const useStyles = (props) =>
  StyleSheet.create({
    myButton: {
      height: props.height, // \u6765\u81EA\u7EC4\u4EF6\u7684 \`height\` prop
      backgroundColor: '#108ee9',
    },
  })
`,paraId:15,tocIndex:1},{value:"\u4F7F\u7528Context\u7EDF\u4E00\u7EF4\u62A4\u6240\u6709\u4E3B\u9898\u53D8\u91CF\uFF08",paraId:16,tocIndex:2},{value:"ThemeContext",paraId:16,tocIndex:2},{value:"\uFF09\uFF0C\u5373\u7528",paraId:16,tocIndex:2},{value:"ThemeContext.Provider",paraId:16,tocIndex:2},{value:"\u5305\u88C5\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u5E76\u5C06theme\u5BF9\u8C61\u4F20\u9012\u7ED9",paraId:16,tocIndex:2},{value:"ThemeContext.Provider",paraId:16,tocIndex:2},{value:"\u3002",paraId:16,tocIndex:2},{value:"\u968F\u540E\u521B\u5EFA\u4E00\u4E2A ",paraId:17,tocIndex:2},{value:"useTheme",paraId:17,tocIndex:2},{value:" hook\u51FD\u6570\uFF0C\u8FD4\u56DEtheme\u5BF9\u50CF\uFF1B\u540C\u65F6\u5C06theme\u5BF9\u8C61\u4E5F\u5165\u53C2\u5230 ",paraId:17,tocIndex:2},{value:"useStyles",paraId:17,tocIndex:2},{value:" hook\u51FD\u6570\u4E2D\u3002",paraId:17,tocIndex:2},{value:`const Button = ({ children, ...props }) => {
  const theme = useTheme()
  const styles = useStyles({...props, theme})
  return (
    <TouchableHighlight style={styles.myButton}>
      {children}
    </TouchableHighlight>
  )
}

export const App = () => {
  const theme = {
    colorPrimary: '#108ee9',
  }
  return (
    <ThemeContext.Provider theme={theme}>
      <Button height={47}>I am a button</Button>
    </ThemeContext.Provider>
  )
}

// create ThemeContext & useTheme hooks
const ThemeContext = React.createContext({})
const useTheme = () => {
  return React.useContext(ThemeContext)
}


// useStyles hooks
const useStyles = ({...props, theme}) =>
  StyleSheet.create({
    myButton: {
      height: props.height, // \u6765\u81EA\u7EC4\u4EF6\u7684 height prop
      backgroundColor: theme.colorPrimary, // \u6765\u81EAThemeContext\u53D8\u91CF
    },
  })
`,paraId:18,tocIndex:2},{value:"\u5F53\u6211\u4EEC\u60F3\u5728\u5916\u90E8\u4E3AButton\u7EC4\u4EF6\u6DFB\u52A0",paraId:19,tocIndex:3},{value:"padding",paraId:19,tocIndex:3},{value:"\u6837\u5F0F\u65F6\uFF0C\u9700\u8981\u91CD\u65B0\u8BBE\u8BA1Button\u7EC4\u4EF6\uFF0C\u6539\u52A8\u5185\u90E8\u7684\u6E90\u7801:",paraId:19,tocIndex:3},{value:`export const App = () => {
  return (
-    <Button>I am a button</Button>
+    <Button padding={7}>I am a button</Button>
  )
}

const useStyles = (props) =>
  StyleSheet.create({
    myButton: {
      height: props.height,
+      padding: props.padding
    },
  })
`,paraId:20,tocIndex:3},{value:"\u5927\u81F4\u65B9\u6848\u4E3A\uFF1A",paraId:21,tocIndex:3},{value:"\u6DFB\u52A0\u8DB3\u91CF\u7684style\u7C7Bprops",paraId:22,tocIndex:3},{value:"\u6DFB\u52A0\u8DB3\u91CF\u7684token css\u53D8\u91CF",paraId:22,tocIndex:3},{value:"\u8FD9\u662F\u53EF\u4EE5\u9047\u89C1\u7684\u5F92\u589E\u7EF4\u62A4\u6210\u672C\u3002\u90A3\u4E48\u5982\u4F55\u5B9E\u73B0\u50CFCSS\u90A3\u6837\u53EF\u4EE5\u7528\u5916\u90E8\u6837\u5F0F\u8986\u76D6\u5462\uFF1F",paraId:23,tocIndex:3},{value:"\u901A\u8FC7",paraId:24,tocIndex:4},{value:"styles",paraId:24,tocIndex:4},{value:"\u4E00\u4E2Aprop\u6765\u652F\u6301\u5B9E\u73B0CSS\u6837\u5F0F\u8986\u76D6\u7684\u80FD\u529B\uFF08\u4EE5\u4E0B\u4E3A\u7B80\u6613\u540E\u7684\u4EE3\u7801\uFF0C\u5B9E\u9645\u4F1A\u505A\u4E00\u4E9B\u6027\u80FD\u4F18\u5316\u548C\u8FB9\u9645\u4FDD\u62A4\uFF09\uFF0C\u907F\u514D\u8FC7\u591A\u7684\u975E\u7EC4\u4EF6\u6838\u5FC3\u903B\u8F91\u7684props\u8BBE\u8BA1\u3002",paraId:24,tocIndex:4},{value:`/**
 * @params   styles = { myButton: { padding } }
 * const baseStyles = { myButton: { height } }
 *
 * @return { myButton: [{ height }, { padding }] }
 * **/
const useStyles = ({...props, styles}) => {
  const baseStyles = StyleSheet.create({
    myButton: {
      height: props.height,
    },
  })

  // \u7C7B\u4F3C lodash.mergesWidth
  return _.mergeWidth(baseStyles, styles)
}


<Button styles={{ myButton: { padding: 7 } }}>
    I am a button
</Button>
`,paraId:25,tocIndex:4},{value:"Q\uFF1A\u4E3A\u6B64",paraId:26,tocIndex:4},{value:"styles",paraId:26,tocIndex:4},{value:"\u662F\u4EC0\u4E48\uFF0C\u4E3A\u4EC0\u4E48",paraId:26,tocIndex:4},{value:"@ant-design/react-native",paraId:26,tocIndex:4},{value:"\u7684\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u88AB\u8BBE\u8BA1\u4E86\u8FD9\u4E48\u4E00\u4E2A\u5C5E\u6027\u5462\uFF1F",paraId:26,tocIndex:4},{value:"A\uFF1A",paraId:27,tocIndex:4},{value:"styles",paraId:27,tocIndex:4},{value:"\u5C31\u662F\u652F\u6301\u7EC4\u4EF6\u76F8\u540C\u7684\u6837\u5F0F\u96C6\u5408\uFF0C\u80FD\u8986\u76D6\u7EC4\u4EF6\u7684\u6240\u6709\u6837\u5F0F\uFF0C\u4F46\u662F\u4E5F\u5F3A\u5316\u4E86\u7C7B\u4F3CCSS\u6837\u5F0F\u7C7B\u540D\u7684\u5B58\u5728\u3002",paraId:27,tocIndex:4},{value:"\u4EE5 ",paraId:28,tocIndex:5},{value:"<Picker>",paraId:28,tocIndex:5},{value:" \u4E3A\u4F8B\uFF0C",paraId:28,tocIndex:5},{value:"\u7B2C\u4E00\u6B65\uFF0C\u6211\u4EEC\u9700\u8981\u805A\u7126Picker\u7684\u6837\u5F0F\u7C7B\u540D(",paraId:29,tocIndex:5},{value:"\u6587\u6863",paraId:30,tocIndex:5},{value:"\u4E2D\u6709\u63D0\u4F9B)",paraId:29,tocIndex:5},{value:`interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle

   // item style
  itemWrap: ViewStyle
  itemStyle: TextStyle

  // \u906E\u7F69\u5C42
  mask: ViewStyle
  maskTop: ViewStyle
  maskMiddle: ViewStyle
  maskBottom: ViewStyle
}

interface PickerStyle extends Partial<PickerViewStyle> {
  // modal \u76F8\u5173\u7684\u6837\u5F0F
  modal: ViewStyle
  container: ViewStyle
  header: ViewStyle
  headerItem: ViewStyle
  actionText: TextStyle
  title: TextStyle
  okText: TextStyle
  dismissText: TextStyle
}
`,paraId:31,tocIndex:5},{value:"\u53EF\u4EE5\u501F\u52A9",paraId:32,tocIndex:5},{value:"React Developer Tools",paraId:32,tocIndex:5},{value:"\u6D4F\u89C8\u5668\u63D2\u4EF6\u5B9A\u4F4DDOM\u4FE1\u606F",paraId:32,tocIndex:5},{value:"\u7B2C\u4E8C\u6B65\uFF0C\u8BBE\u7F6E",paraId:33,tocIndex:5},{value:"styles",paraId:33,tocIndex:5},{value:"\u5C5E\u6027",paraId:33,tocIndex:5},{value:`// \u5EFA\u8BAE\u4F7F\u7528 useMemo \u7F13\u5B58\u53D8\u91CF
const styles = useMemo(
  () => ({
    itemActiveStyle: {
      color: '#108ee9',
      fontWeight: 'bold',
    },
    mask: {
      paddingHorizontal: 10,
    },
    maskMiddle: {
      backgroundColor: 'rgba(51,51,51,0.1)',
      borderRadius: 10,
    },
  }),
  [],
)

<Picker 
  styles={styles}
>
...
</Picker>
`,paraId:34,tocIndex:5},{value:"\u57FA\u7840\u6837\u5F0F",paraId:35,tocIndex:5},{value:"\u5B9A\u5236\u6837\u5F0F",paraId:35,tocIndex:5},{value:"\u8BA8\u8BBA\u533A\uFF1A ",paraId:36,tocIndex:6},{value:"https://github.com/ant-design/ant-design-mobile-rn/discussions/1368",paraId:36,tocIndex:6}]},18169:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"@ant-design/react-native",paraId:0},{value:" \u662F ",paraId:0},{value:"Ant Design",paraId:0},{value:" \u7684\u79FB\u52A8\u89C4\u8303\u7684 React \u5B9E\u73B0\uFF0C\u670D\u52A1\u4E8E\u8682\u8681\u53CA\u53E3\u7891\u65E0\u7EBF\u4E1A\u52A1\u3002",paraId:0},{value:`
  `,paraId:1},{value:`
  `,paraId:1},{value:"+",paraId:1},{value:`
  `,paraId:1},{value:"UI \u6837\u5F0F\u9AD8\u5EA6\u53EF\u914D\u7F6E\uFF0C\u62D3\u5C55\u6027\u66F4\u5F3A\uFF0C\u8F7B\u677E\u9002\u5E94\u5404\u7C7B\u4EA7\u54C1\u98CE\u683C",paraId:2,tocIndex:0},{value:"\u57FA\u4E8E React Native \u7684 iOS / Android / Web \u591A\u5E73\u53F0\u652F\u6301\uFF0C\u7EC4\u4EF6\u4E30\u5BCC\u3001\u80FD\u5168\u9762\u8986\u76D6\u5404\u7C7B\u573A\u666F (antd-mobile)",paraId:2,tocIndex:0},{value:'\u63D0\u4F9B "\u7EC4\u4EF6\u6309\u9700\u52A0\u8F7D" / "Web \u9875\u9762\u9AD8\u6E05\u663E\u793A" / "SVG Icon" \u7B49\u4F18\u5316\u65B9\u6848\uFF0C\u4E00\u4F53\u5F0F\u5F00\u53D1',paraId:2,tocIndex:0},{value:"\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\uFF0C\u652F\u6301\u7C7B\u578B\u53CA\u5C5E\u6027\u667A\u80FD\u63D0\u793A\uFF0C\u65B9\u4FBF\u4E1A\u52A1\u5F00\u53D1",paraId:2,tocIndex:0},{value:"\u5168\u9762\u517C\u5BB9 react",paraId:2,tocIndex:0},{value:"\u9002\u5408\u4E8E\u4E2D\u5927\u578B\u4EA7\u54C1\u5E94\u7528",paraId:3,tocIndex:1},{value:"\u9002\u5408\u4E8E\u57FA\u4E8E react-native \u7684\u591A\u7EC8\u7AEF\u5E94\u7528",paraId:3,tocIndex:1},{value:"\u9002\u5408\u4E0D\u540C UI \u98CE\u683C\u7684\u9AD8\u5EA6\u5B9A\u5236\u9700\u6C42\u7684\u5E94\u7528",paraId:3,tocIndex:1},{value:"\u7A33\u5B9A\u7248\uFF1A",paraId:4,tocIndex:2},{value:"\u5F00\u53D1\u7248\uFF1A",paraId:4,tocIndex:2},{value:"\u9996\u5148\uFF0C\u60A8\u9700\u8981\u5C06\u5B83\u4EEC\u5B89\u88C5\u5230\u60A8\u7684\u9879\u76EE\u4E2D\uFF1A",paraId:5,tocIndex:3},{value:`$ npm install @ant-design/react-native @ant-design/icons-react-native
`,paraId:6,tocIndex:3},{value:"\u6211\u4EEC\u5C06\u4EE5\u4E0B\u4F9D\u8D56\u901A\u8FC7 ",paraId:7,tocIndex:4},{value:"peerDependencies",paraId:7,tocIndex:4},{value:" \u8FDB\u884C\u7BA1\u7406\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u8BA9\u60A8\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u9009\u62E9\u7248\u672C\uFF0C\u51CF\u5C11\u91CD\u590D\u5B89\u88C5\u4F9D\u8D56\uFF1A",paraId:7,tocIndex:4},{value:"\u5982\u679C\u4F7F\u7528Expo\u6765\u6784\u5EFA\u9879\u76EE\u7684\uFF0C\u8BF7\u4F7F\u7528 ",paraId:8,tocIndex:4},{value:"expo",paraId:8,tocIndex:4},{value:"\uFF08",paraId:8,tocIndex:4},{value:"\u63A8\u8350\uFF0C\u8FD9\u80FD\u5B89\u88C5\u5230\u6700\u5408\u9002\u7684\u7248\u672C",paraId:8,tocIndex:4},{value:"\uFF09\uFF1A",paraId:8,tocIndex:4},{value:`npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
`,paraId:9,tocIndex:4},{value:"\u5982\u679C\u4F7F\u7528React Native CLI\u539F\u751F\u6784\u5EFA\u9879\u76EE\u7684\uFF0C\u8BF7\u4F7F\u7528 ",paraId:10,tocIndex:4},{value:"npm",paraId:10,tocIndex:4},{value:" \uFF1A",paraId:10,tocIndex:4},{value:`npm install react-native-gesture-handler react-native-reanimated react-native-worklets
`,paraId:11,tocIndex:4},{value:"\u4F60\u8FD8\u9700\u8981\u624B\u52A8\u5C06 ",paraId:12,tocIndex:4},{value:"react-native-worklets/plugin",paraId:12,tocIndex:4},{value:" \u63D2\u4EF6\u6DFB\u52A0\u5230\u4F60\u7684 ",paraId:12,tocIndex:4},{value:"babel.config.js",paraId:12,tocIndex:4},{value:" \u4E2D\uFF1A",paraId:12,tocIndex:4},{value:`module.exports = {
  presets: [
    ... // \u4E0D\u8981\u628A\u5B83\u52A0\u5728\u8FD9\u91CC :)
  ],
  plugins: [
    ...
    'react-native-worklets/plugin',
  ],
};
`,paraId:13,tocIndex:4},{value:"\u66F4\u591A\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:14,tocIndex:4},{value:"react-native-reanimated \u5B89\u88C5\u6587\u6863",paraId:14,tocIndex:4},{value:"\u5C06\u5B57\u4F53\u8D44\u6E90\u8DEF\u5F84\u914D\u7F6E\u5230\u6839\u76EE\u5F55\u4E0B\u7684 ",paraId:15,tocIndex:5},{value:"react-native.config.js",paraId:15,tocIndex:5},{value:" \u6587\u4EF6\u4E2D ( \u5982\u679C\u6CA1\u6709\uFF0C\u8BF7\u521B\u5EFA )\uFF1A",paraId:15,tocIndex:5},{value:`module.exports = {
  assets: ['node_modules/@ant-design/icons-react-native/fonts'],
};
`,paraId:16,tocIndex:5},{value:"\u7136\u540E\u6267\u884C ",paraId:17,tocIndex:5},{value:"react-native-asset",paraId:17,tocIndex:5},{value:" \u7684\u547D\u4EE4\uFF0C\u5B57\u4F53\u6587\u4EF6\u5C06\u4F1A\u81EA\u52A8\u590D\u5236\u5230",paraId:17,tocIndex:5},{value:"ios",paraId:17,tocIndex:5},{value:" \u548C ",paraId:17,tocIndex:5},{value:"android",paraId:17,tocIndex:5},{value:" \u8D44\u6E90\u6587\u4EF6\u4E2D\uFF1A",paraId:17,tocIndex:5},{value:`npx react-native-asset
`,paraId:18,tocIndex:5},{value:"\u5B57\u4F53\u6587\u4EF6\u5C06\u4F1A\u81EA\u52A8\u590D\u5236\u5230",paraId:19,tocIndex:5},{value:"ios",paraId:19,tocIndex:5},{value:" \u548C ",paraId:19,tocIndex:5},{value:"android",paraId:19,tocIndex:5},{value:" \u8D44\u6E90\u6587\u4EF6\u4E2D\u3002",paraId:19,tocIndex:5},{value:"\u5982\u679C\u4F7F\u7528Expo\u6765\u6784\u5EFA\u9879\u76EE\uFF0C\u7701\u7565\u4E0A\u4E24\u6B65\uFF0C\u76F4\u63A5\u4F7F\u7528 ",paraId:20,tocIndex:5},{value:"expo-font",paraId:20,tocIndex:5},{value:" \u52A0\u8F7D\u5B57\u4F53\uFF1A",paraId:20,tocIndex:5},{value:`import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
 antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
})
`,paraId:21,tocIndex:5},{value:"\u7EC4\u4EF6\u4F7F\u7528\u5B9E\u4F8B\uFF1A",paraId:22,tocIndex:6},{value:`import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Button from '@ant-design/react-native/lib/button';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
`,paraId:23,tocIndex:6},{value:"\u5982\u679C\u9700\u8981\u4F7F\u7528",paraId:24,tocIndex:6},{value:"Modal",paraId:24,tocIndex:6},{value:"\u4EE5\u53CA",paraId:24,tocIndex:6},{value:"Toast",paraId:24,tocIndex:6},{value:"\u8FD8\u9700\u8981\u5728 App \u7684\u5165\u53E3\u5904\u52A0\u4E0A",paraId:24,tocIndex:6},{value:"Provider",paraId:24,tocIndex:6},{value:`import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Button, Provider, Toast } from '@ant-design/react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <Provider>
        <Button onPress={() => Toast.info('This is a toast tips')}>
          Start
        </Button>
      </Provider>
    );
  }
}
`,paraId:25,tocIndex:6},{value:"\u4E0B\u9762\u4E24\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5",paraId:26,tocIndex:7},{value:"\u53EA\u52A0\u8F7D",paraId:26,tocIndex:7},{value:"\u7528\u5230\u7684\u7EC4\u4EF6\uFF0C\u9009\u62E9\u5176\u4E2D\u4E00\u79CD\u65B9\u5F0F\u5373\u53EF\u3002",paraId:26,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:27,tocIndex:7},{value:"babel-plugin-import",paraId:27,tocIndex:7},{value:"\uFF08\u63A8\u8350\uFF09\u3002",paraId:27,tocIndex:7},{value:`// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { libraryName: "@ant-design/react-native" }] // \u4E0E Web \u5E73\u53F0\u7684\u533A\u522B\u662F\u4E0D\u9700\u8981\u8BBE\u7F6E style
  ]
}
`,paraId:28,tocIndex:7},{value:"\u7136\u540E\u6539\u53D8\u4ECE @ant-design/react-native \u5F15\u5165\u6A21\u5757\u65B9\u5F0F\u5373\u53EF\u3002",paraId:29,tocIndex:7},{value:`import { Button } from '@ant-design/react-native';
`,paraId:30,tocIndex:7},{value:"\u8BF4\u660E\uFF1A\u6709\u4EBA\u53CD\u6620\u901A\u8FC7 ",paraId:31,tocIndex:7},{value:"react-native init",paraId:31,tocIndex:7},{value:" \u521B\u5EFA\u7684\u9879\u76EE\u5728\u4F7F\u7528\u65F6\u53EF\u80FD\u4F1A\u62A5 ",paraId:31,tocIndex:7},{value:"Unable to resolve module ",paraId:31,tocIndex:7},{value:"react-dom",paraId:31,tocIndex:7},{value:" \u7684\u9519\u8BEF \uFF0C\u6B64\u65F6\u4E0D\u59A8\u5B89\u88C5 ",paraId:31,tocIndex:7},{value:"babel-plugin-module-resolver",paraId:31,tocIndex:7},{value:" \u8BD5\u8BD5~",paraId:31,tocIndex:7},{value:"\u624B\u52A8\u5F15\u5165",paraId:32,tocIndex:7},{value:`import Button from '@ant-design/react-native/lib/button';
`,paraId:33,tocIndex:7},{value:"\u81EA\u5B9A\u4E49 RN \u4E3B\u9898\u548C\u5355\u4E2A\u7EC4\u4EF6\u6837\u5F0F",paraId:34,tocIndex:8},{value:`
\u6BD4\u5982 `,paraId:34,tocIndex:8},{value:"#1853",paraId:34,tocIndex:8},{value:"\u9996\u9875",paraId:35,tocIndex:9},{value:"\u5F00\u53D1\u8005\u6587\u6863",paraId:35,tocIndex:9},{value:"\u5728\u4EFB\u4F55\u5F62\u5F0F\u7684\u53C2\u4E0E\u524D\uFF0C\u8BF7\u5148\u9605\u8BFB ",paraId:36,tocIndex:10},{value:"\u8D21\u732E\u8005\u6587\u6863",paraId:36,tocIndex:10},{value:"\u3002\u6709\u4EFB\u4F55\u5EFA\u8BAE\u6216\u610F\u89C1\u60A8\u53EF\u4EE5 ",paraId:36,tocIndex:10},{value:"Pull Request",paraId:36,tocIndex:10},{value:"\uFF0C\u7ED9\u6211\u4EEC ",paraId:36,tocIndex:10},{value:"\u62A5\u544A Bug",paraId:36,tocIndex:10},{value:"\u3002",paraId:36,tocIndex:10},{value:"\u5F3A\u70C8\u63A8\u8350\u9605\u8BFB ",paraId:37,tocIndex:10},{value:"\u300A\u63D0\u95EE\u7684\u667A\u6167\u300B",paraId:37,tocIndex:10},{value:"\u3001",paraId:37,tocIndex:10},{value:"\u300A\u5982\u4F55\u5411\u5F00\u6E90\u793E\u533A\u63D0\u95EE\u9898\u300B",paraId:37,tocIndex:10},{value:" \u548C ",paraId:37,tocIndex:10},{value:"\u300A\u5982\u4F55\u6709\u6548\u5730\u62A5\u544A Bug\u300B",paraId:37,tocIndex:10},{value:"\uFF0C\u66F4\u597D\u7684\u95EE\u9898\u66F4\u5BB9\u6613\u83B7\u5F97\u5E2E\u52A9\u3002",paraId:37,tocIndex:10},{value:"\u5982\u679C\u60A8\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u78B0\u5230\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u51E0\u4E2A\u9014\u5F84\u5BFB\u6C42\u5E2E\u52A9\uFF0C\u540C\u65F6\u6211\u4EEC\u4E5F\u9F13\u52B1\u8D44\u6DF1\u7528\u6237\u901A\u8FC7\u4E0B\u9762\u7684\u9014\u5F84\u7ED9\u65B0\u4EBA\u63D0\u4F9B\u5E2E\u52A9\u3002",paraId:38,tocIndex:11},{value:"\u901A\u8FC7 Stack Overflow \u6216\u8005 Segment Fault \u63D0\u95EE\u65F6\uFF0C\u5EFA\u8BAE\u52A0\u4E0A ",paraId:39,tocIndex:11},{value:"antd",paraId:39,tocIndex:11},{value:"/",paraId:39,tocIndex:11},{value:"antd-mobile-rn",paraId:39,tocIndex:11},{value:" \u6807\u7B7E\u3002",paraId:39,tocIndex:11},{value:"Stack Overflow",paraId:40,tocIndex:11},{value:"\uFF08\u63A8\u8350\uFF09",paraId:40,tocIndex:11},{value:"Segment Fault",paraId:40,tocIndex:11}]},71127:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"\u58F0\u660E",paraId:0,tocIndex:0},{value:"Ant Design React Native",paraId:1,tocIndex:0},{value:" \u7248\u672C\u4ECE 3.x \u7248\u672C\u5F00\u59CB",paraId:1,tocIndex:0},{value:"\u8682\u8681\u91D1\u670D\u4E0D\u518D\u7EF4\u62A4\u8BE5\u9879\u76EE",paraId:1,tocIndex:0},{value:"\uFF0C\u73B0\u5728\u7531\u6211 ",paraId:1,tocIndex:0},{value:"Github",paraId:1,tocIndex:0},{value:" \u7EF4\u62A4\uFF0C \u4E4B\u524D\u7684\u8BA8\u8BBA\u4EE5\u53CA\u5177\u4F53\u60C5\u51B5\u53EF\u4EE5\u67E5\u770B ",paraId:1,tocIndex:0},{value:"\u65B0\u7248\u8BA1\u5212(The new plan) 3.0.0 - Discussion ",paraId:1,tocIndex:0},{value:"\u4EE5\u4E0B\u5B8C\u5168\u5904\u4E8E\u6211\u81EA\u8EAB\u7684\u8003\u8651\u4E0E\u8682\u8681\u91D1\u670D\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u3002",paraId:2,tocIndex:0},{value:"\u6211\u73B0\u5728\u4F9D\u7136\u8FD8\u5728\u7EF4\u62A4\u4EE5\u53CA\u5F00\u53D1\u8BE5\u9879\u76EE\uFF0C\u6350\u52A9\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u6700\u8FD1\u5496\u5561\u4E5F\u4E0D\u559D\u4E86\u3002\u4E50\u6350\u968F\u610F\u3002",paraId:3,tocIndex:0},{value:"\u4E3A\u4E86\u9879\u76EE\u80FD\u591F\u66F4\u5065\u5EB7\u6301\u7EED\u7684\u53D1\u5C55\u4E0B\u53BB\uFF0C\u6211\u671F\u671B\u80FD\u83B7\u5F97\u90E8\u5206\u8D44\u91D1\u7684\u652F\u6301\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u8D5E\u52A9\u5F00\u53D1\u3002",paraId:4,tocIndex:0},{value:"\u652F\u4ED8\u5B9D",paraId:5,tocIndex:1},{value:"\u5FAE\u4FE1",paraId:5,tocIndex:1},{value:"PayPal",paraId:5,tocIndex:1},{value:"\u8BF7\u8054\u7CFB\u6211 ",paraId:6,tocIndex:2},{value:"sqibang@gmail.com",paraId:6,tocIndex:2},{value:"\u5E2E\u5FD9\u56DE\u7B54\u95EE\u9898\u6216\u8005\u63D0\u95EE\u9898\u7684\u65F6\u5019\u80FD\u7ED9\u51FA\u91CD\u73B0\u4EE3\u7801\u4E5F\u662F\u8D5E\u52A9",paraId:7,tocIndex:2}]},23259:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"\u6B64\u5904\u7740\u91CD\u5217\u51FA\u5347\u7EA7\u4E2D\u7684\u4E0D\u517C\u5BB9\u53D8\u5316\u548C\u63A8\u8350\u6539\u52A8\u3002\u6240\u6709\u53D8\u52A8\u8BF7\u89C1 ",paraId:0},{value:"Changelog",paraId:1},{value:"\u3002",paraId:0},{value:"\u5B89\u88C5 peer \u4F9D\u8D56",paraId:2,tocIndex:0},{value:`npm install @ant-design/icons-react-native react-native-gesture-handler react-native-reanimated react-native-worklets
`,paraId:3,tocIndex:0},{value:"or",paraId:4,tocIndex:0},{value:`yarn add @ant-design/icons-react-native react-native-gesture-handler react-native-reanimated react-native-worklets
`,paraId:5,tocIndex:0},{value:"\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F bare React Native \u9879\u76EE\uFF0C\u4F60\u8FD8\u9700\u8981\u5728 ",paraId:6,tocIndex:0},{value:"babel.config.js",paraId:6,tocIndex:0},{value:" \u4E2D\u624B\u52A8\u6DFB\u52A0 ",paraId:6,tocIndex:0},{value:"react-native-worklets/plugin",paraId:6,tocIndex:0},{value:" \u63D2\u4EF6",paraId:6,tocIndex:0},{value:`module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-worklets/plugin',
    ],
  };
`,paraId:7,tocIndex:0},{value:"\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u89C1 ",paraId:8,tocIndex:0},{value:"react-native-reanimated \u5B89\u88C5\u6587\u6863",paraId:8,tocIndex:0},{value:"\u5B89\u88C5 peer \u4F9D\u8D56",paraId:9,tocIndex:1},{value:`npm install @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
`,paraId:10,tocIndex:1},{value:"or",paraId:11,tocIndex:1},{value:`yarn add @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
`,paraId:12,tocIndex:1},{value:`
> \u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u5165\u53E3\u6587\u4EF6(\u901A\u5E38\u662FApp.js)\u6587\u4EF6\u4E2D\u9700\u8981\u5F15\u5165\u8FD9\u53E5\uFF1A
`,paraId:13},{value:`import 'react-native-gesture-handler';
`,paraId:14,tocIndex:1},{value:"\u5B89\u88C5 peer \u4F9D\u8D56",paraId:15,tocIndex:2},{value:`npm install @react-native-camera-roll/camera-roll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
`,paraId:16,tocIndex:2},{value:"or",paraId:17,tocIndex:2},{value:`yarn add @react-native-camera-roll/camera-roll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
`,paraId:18,tocIndex:2},{value:"\u5B89\u88C5 peer \u4F9D\u8D56",paraId:19,tocIndex:3},{value:`npm install @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view react-native-gesture-handler
`,paraId:20,tocIndex:3},{value:"or",paraId:21,tocIndex:3},{value:`yarn add @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view react-native-gesture-handler
`,paraId:22,tocIndex:3},{value:"\u5347\u7EA7\u5230 4.0.0+\u9700\u8981\u5B89\u88C5 peer \u4F9D\u8D56\u7136\u540E link",paraId:23,tocIndex:4},{value:`npm install @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view
`,paraId:24,tocIndex:4},{value:"or",paraId:25,tocIndex:4},{value:`yarn add @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view
`,paraId:26,tocIndex:4},{value:"\u5B89\u88C5\u5B8C\u4F9D\u8D56\u540E\u9700\u8981\u5230 iOS \u76EE\u5F55 ",paraId:27,tocIndex:4},{value:"pod install",paraId:27,tocIndex:4},{value:"(auto linking)\uFF0CAndroid \u4E0D\u9700\u8981\u624B\u52A8\u5904\u7406",paraId:27,tocIndex:4},{value:`# \u624B\u52A8\u94FE\u63A5\u5B57\u4F53\u56FE\u6807
npx react-native link
`,paraId:28,tocIndex:5},{value:"3.0.0",paraId:29,tocIndex:6},{value:"\u5F00\u59CB\u9700\u8981\u5B89\u88C5 ",paraId:29,tocIndex:6},{value:"react-native@0.57.x",paraId:29,tocIndex:6},{value:"\u4FEE\u6539\u4E4B\u524D\u7684 import \u65B9\u5F0F\u6539\u6210 ",paraId:30,tocIndex:6},{value:"import { Button, ... } from '@ant-design/react-native",paraId:30,tocIndex:6},{value:"\u591A\u8BED\u8A00\u4EE5\u53CA\u4E3B\u9898\uFF0C\u7531\u4E4B\u524D\u7684 ",paraId:31,tocIndex:6},{value:"LocaleProvider",paraId:31,tocIndex:6},{value:" \u6539\u6210",paraId:31,tocIndex:6},{value:"Provider",paraId:31,tocIndex:6},{value:"\uFF0C\u73B0\u5728\u7684",paraId:31,tocIndex:6},{value:"Provider",paraId:31,tocIndex:6},{value:" \u652F\u6301",paraId:31,tocIndex:6},{value:"theme",paraId:31,tocIndex:6},{value:"\u8DDF",paraId:31,tocIndex:6},{value:"locale",paraId:31,tocIndex:6},{value:"\uFF0CProvider \u5FC5\u987B\u5728 app \u5165\u53E3\u6307\u5B9A\uFF0C\u4E0D\u7136\u90E8\u5206\u7EC4\u4EF6\u7528\u4E0D\u4E86\uFF08\u56E0\u4E3A\u73B0\u5728\u652F\u6301\u591A\u4E2A Modal \u4EE5\u53CA\u5728 Modal \u4E0A\u9762\u663E\u793A Toast\uFF09",paraId:31,tocIndex:6},{value:"Provider \u914D\u7F6E",paraId:32,tocIndex:6},{value:`// \u52A8\u6001\u4E3B\u9898\u914D\u7F6E\u53EF\u4EE5\u67E5\u770B ./rn-kitchen-sink/app.js
const RootNavigator = createStackNavigator(scenes);
class App extends React.Component {
  state = {
    theme: null,
    currentTheme: null,
  };
  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme });
  };
  render() {
    const { theme, currentTheme } = this.state;
    return (
      <Provider theme={theme}>
        <RootNavigator
          screenProps={{ changeTheme: this.changeTheme, currentTheme }}
        />
      </Provider>
    );
  }
}
`,paraId:33,tocIndex:6},{value:"\u6837\u5F0F\u91CD\u5199",paraId:34,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:35,tocIndex:6},{value:"Provider",paraId:35,tocIndex:6},{value:" \u7684 theme \u914D\u7F6E\u9ED8\u8BA4\u7684\u5168\u5C40\u4E3B\u9898\u6837\u5F0F",paraId:35,tocIndex:6},{value:"\u901A\u8FC7\u7EC4\u4EF6\u7684 styles \u8986\u76D6\u5C40\u90E8\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u4E0D\u9700\u8981\u5BFC\u5165\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u6837\u5F0F",paraId:35,tocIndex:6},{value:"\u4E0D\u9700\u8981\u50CF 2.x \u90A3\u6837\u5BFC\u5165\u4E00\u4E2A\u6837\u5F0F\u6587\u4EF6\uFF0C\u73B0\u5728\u7684\u6837\u5F0F\u6587\u4EF6\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A function \u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\u4E86",paraId:35,tocIndex:6},{value:"Toast \u79FB\u9664\u4E86 ",paraId:36,tocIndex:6},{value:"hide",paraId:36,tocIndex:6},{value:" \u65B9\u6CD5",paraId:36,tocIndex:6},{value:"\u4FEE\u6539",paraId:37,tocIndex:6},{value:"Grid",paraId:37,tocIndex:6},{value:"\u7684",paraId:37,tocIndex:6},{value:"onClick",paraId:37,tocIndex:6},{value:"\u5C5E\u6027\u4E3A",paraId:37,tocIndex:6},{value:"onPress",paraId:37,tocIndex:6},{value:"Link Icon Fonts",paraId:38,tocIndex:6},{value:`react-native link @ant-design/icons-react-native
`,paraId:39,tocIndex:6},{value:"\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F ",paraId:40,tocIndex:6},{value:"react-native@0.60.x",paraId:40,tocIndex:6},{value:" \u4F1A\u81EA\u52A8 link\uFF0C\u5982\u9700\u624B\u52A8 link \u8BF7\u4F7F\u7528",paraId:40,tocIndex:6},{value:`react-native link @ant-design/react-native
`,paraId:41,tocIndex:6},{value:"antd-mobile upgrade-notes",paraId:42,tocIndex:7}]}}]);
