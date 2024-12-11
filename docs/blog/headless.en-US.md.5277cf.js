(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[8686],{33839:n=>{n.exports={content:["article",["p","2024-11-19 ",["a",{title:null,href:"https://github.com/1uokun"},"@1uokun"]],["blockquote",["p","Take Slider as an example"]],["ul",["li",["p",["strong","Basic"]],["ul",["li",["p","Ant Design"],["pre",{lang:"jsx",highlighted:'    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token punctuation">/></span></span>'},["code","    <Slider />"]]],["li",["p","Headless UI"],["pre",{lang:"jsx",highlighted:'    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Root</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Track</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Range</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Slider.Tack</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Thumb</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Slider.Root</span><span class="token punctuation">></span></span>'},["code","    <Slider.Root>\n        <Slider.Track>\n            <Slider.Range />\n        </Slider.Tack>\n        <Slider.Thumb />\n    </Slider.Root>"]]]]],["li",["p",["strong","Two Slider thumb"]],["ul",["li",["p","Ant Design"],["pre",{lang:"jsx",highlighted:'    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">range</span><span class="token punctuation">/></span></span>'},["code","    <Slider range/>"]]],["li",["p","Headless UI"],["pre",{lang:"diff",highlighted:'    &lt;Slider.Root>\n        &lt;Slider.Track>\n            &lt;Slider.Range />\n        &lt;/Slider.Tack>\n<span class="token inserted">+    &lt;Slider.Thumb index={0}/></span>\n<span class="token inserted">+    &lt;Slider.Thumb index={1}/></span>\n    &lt;/Slider.Root>'},["code","    <Slider.Root>\n        <Slider.Track>\n            <Slider.Range />\n        </Slider.Tack>\n+    <Slider.Thumb index={0}/>\n+    <Slider.Thumb index={1}/>\n    </Slider.Root>"]]]]],["li",["p",["strong","修改轨道样式"]],["ul",["li",["p","Ant Design"],["pre",{lang:"jsx",highlighted:'    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">styles</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>track<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token attr-name">}</span><span class="token punctuation">/></span></span>'},["code","    <Slider styles={{track:{...}}}/>"]]],["li",["p","Headless UI"],["pre",{lang:"diff",highlighted:'    &lt;Slider.Root>\n<span class="token inserted">+    &lt;Slider.Track style={{...}} className={{...}}></span>\n<span class="token deleted">-    &lt;Slider.Track></span>\n            &lt;Slider.Range />\n        &lt;/Slider.Tack>\n        &lt;Slider.Thumb />\n    &lt;/Slider.Root>'},["code","    <Slider.Root>\n+    <Slider.Track style={{...}} className={{...}}>\n-    <Slider.Track>\n            <Slider.Range />\n        </Slider.Tack>\n        <Slider.Thumb />\n    </Slider.Root>"]]]]],["li",["p",["strong","Track style change"]],["ul",["li",["p","Ant Design\n(Not support❌)"]],["li",["p","Headless UI"],["pre",{lang:"diff",highlighted:'    &lt;Slider.Root>\n        &lt;Slider.Track>\n            &lt;Slider.Range />\n<span class="token inserted">+         &lt;View></span>\n<span class="token inserted">+            ...</span>\n<span class="token inserted">+         &lt;/View></span>\n        &lt;/Slider.Tack>\n        &lt;Slider.Thumb />\n    &lt;/Slider.Root>'},["code","    <Slider.Root>\n        <Slider.Track>\n            <Slider.Range />\n+         <View>\n+            ...\n+         </View>\n        </Slider.Tack>\n        <Slider.Thumb />\n    </Slider.Root>"]]]]]],["h2","Advantages"],["ol",["li",["p",["code","styles"]," has been deconstructed, each element style is independent and better supports ",["code","tailwind"]," and ",["code","animate style"]]],["li",["p","Functions can be added or removed by adding or removing ",["code","react element"]," instead of ",["code","props"]]],["li",["p","Component code is localized and can be expanded by yourself"]]],["h2","Implementation"],["ol",["li",["p","Deconstructing the components of ",["code","Slider"]],["ul",["li",["p","Track"]],["li",["p","Range"]],["li",["p","Thumb"]],["li",["p","Gesture"]],["li",["p","Root"]]]],["li",["p","Root component uses ",["code","Context"]," to share props to children"],["pre",{lang:"jsx",highlighted:' <span class="token comment" spellcheck="true">// &lt;Slier.Root> code</span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SliderContext.Provider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Gesture</span> <span class="token attr-name">gesture</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>gesture<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n         <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Slider.Gesture</span><span class="token punctuation">></span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SliderContext.Provider</span><span class="token punctuation">></span></span>'},["code"," // <Slier.Root> code\n <SliderContext.Provider value={props}>\n     <Slider.Gesture gesture={gesture}>\n         {props.children}\n     </Slider.Gesture>\n </SliderContext.Provider>"]]],["li",["p","Still retain support for ",["strong","Ant Design"]],["blockquote",["p","Just download a set of antd style template code"]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// @/components/ui/slider</span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Root</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">{...props}</span><span class="token punctuation">></span>\n     <span class="token attr-name">&lt;Slider.Track</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Range</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span>/</span><span class="token punctuation">></span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Slider.Tack</span><span class="token punctuation">></span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Thumb</span> <span class="token attr-name">index</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span>/</span><span class="token punctuation">></span></span>\n     <span class="token punctuation">{</span>props<span class="token punctuation">.</span>range <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider.Thumb</span> <span class="token attr-name">index</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span>/</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Slider.Root</span><span class="token punctuation">></span></span>'},["code",'// @/components/ui/slider\n <Slider.Root className="..." {...props}>\n     <Slider.Track className="...">\n         <Slider.Range className="..."/>\n     </Slider.Tack>\n     <Slider.Thumb index={0} className="..."/>\n     {props.range && <Slider.Thumb index={1} className="..."/>}\n </Slider.Root>']],["p","Usage:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/slider"</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">33</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code",'import { Slider } from "@/components/ui/slider"\n\n<Slider defaultValue={33} max={100} step={1} />']]]],["h2","The End"],["blockquote",["p","discussions:  ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/discussions/1395"},"https://github.com/ant-design/ant-design-mobile-rn/discussions/1395"]]]],meta:{category:"Blog",title:"Use Headless style to transform antd",author:"1uokun",date:"2024-11-19T00:00:00.000Z",filename:"docs/blog/headless.en-US.md"}}}}]);