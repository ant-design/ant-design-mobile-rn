(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[3208],{75103:n=>{n.exports={content:["article",["p","DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。"],["h2","API"],["pre",{lang:"ts",highlighted:'type Precision <span class="token operator">=</span>\n  <span class="token operator">|</span> <span class="token string">\'week\'</span>\n  <span class="token operator">|</span> <span class="token string">\'week-day\'</span>\n  <span class="token operator">|</span> <span class="token string">\'year\'</span>\n  <span class="token operator">|</span> <span class="token string">\'month\'</span>\n  <span class="token operator">|</span> <span class="token string">\'day\'</span>\n  <span class="token operator">|</span> <span class="token string">\'hour\'</span>\n  <span class="token operator">|</span> <span class="token string">\'minute\'</span>\n  <span class="token operator">|</span> <span class="token string">\'second\'</span>\n\ntype DatePickerFilter <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>\n  Record<span class="token operator">&lt;</span>\n    Precision<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>\n      val<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">,</span>\n      extend<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        date<span class="token punctuation">:</span> Date\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">boolean</span>\n  <span class="token operator">></span>\n<span class="token operator">></span>'},["code","type Precision =\n  | 'week'\n  | 'week-day'\n  | 'year'\n  | 'month'\n  | 'day'\n  | 'hour'\n  | 'minute'\n  | 'second'\n\ntype DatePickerFilter = Partial<\n  Record<\n    Precision,\n    (\n      val: number,\n      extend: {\n        date: Date\n      }\n    ) => boolean\n  >\n>"]],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","precision"],["td","精度"],["td",["code","Precision"]],["td",["code","day"]],["td",["code","5.1.0"]]],["tr",["td","value"],["td","当前选中时间"],["td","Date"],["td","无"],["td"]],["tr",["td","defaultValue"],["td","默认选中时间"],["td","Date"],["td","无"],["td"]],["tr",["td","minDate"],["td","最小可选日期"],["td","Date"],["td","2000-1-1"],["td"]],["tr",["td","maxDate"],["td","最大可选日期"],["td","Date"],["td","2030-1-1"],["td"]],["tr",["td","onChange"],["td","时间发生变化的回调函数"],["td",["code","(value: Date) => void"]],["td","-"],["td"]],["tr",["td","onValueChange"],["td","每列 picker 改变时的回调"],["td",["code","(value: Date, index: number) => void"]],["td","-"],["td"]],["tr",["td","renderLabel"],["td","自定义渲染每列展示的内容。其中 ",["code","type"]," 参数为 ",["code","precision"]," 中的任意值或 ",["code","now"],"，",["code","data"]," 参数为默认渲染的数字"],["td",["code","(type:Precision / 'now', data: number) => ReactNode"]],["td","-"],["td"]],["tr",["td","filter"],["td","过滤可供选择的时间"],["td",["code","DatePickerFilter"]],["td","-"],["td",["code","5.1.0"]]]]],["p","此外还支持 ",["a",{title:null,href:"/components/picker-view-cn"},"PickerView"]," 的以下属性：",["code","style"]," ",["code","styles"]," ",["code","itemStyle"]," ",["code","itemHeight"]," ",["code","numberOfLines"]," ",["code","renderMaskTop"]," ",["code","renderMaskBottom"]]],meta:{category:"Components",type:"Data Entry",title:"DatePickerView",subtitle:"日期选择器",filename:"components/date-picker-view/index.zh-CN.md"}}}}]);