(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[440],{68569:t=>{t.exports={content:["article",["p","After clicking on a control or an area, a Tooltip menu appears for doing more.\nIf set mask prop, it is recommended to exit by clicking on any of the mask layers."],["h2","API"],["h3","Tooltip"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","children"],["td","The element that triggered the Tooltip"],["td",["code","React.ReactElement"]],["td","-"]],["tr",["td","content"],["td","The content of the Tooltip"],["td",["code","React.ReactNode"]],["td","-"]],["tr",["td","defaultVisible"],["td","Whether to show or hide by default"],["td",["code","boolean"]],["td",["code","false"]]],["tr",["td","mode"],["td","Set bright color mode or black mode"],["td",["code","'light' | 'dark'"]],["td",["code","'light'"]]],["tr",["td","crossOffset"],["td","Set the offset of the pop-up window position; Top: Additional offset applied along the main axis between the element and its triggering element. Left: Additional offset applied along the horizontal axis between the element and its triggering element."],["td",["code","{ top: number, left: number }"]],["td",["code","'{ top: StatusBar.currentHeight, left: 0 } '"]]],["tr",["td","onVisibleChange"],["td","Callback when the visible prop is changed"],["td",["code","(visible: boolean) => void"]],["td","-"]],["tr",["td","placement"],["td","The position of the Tooltip"],["td",["code","'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'"]],["td",["code","'top'"]]],["tr",["td","styles"],["td","Semantic DOM style"],["td",["a",{title:null,href:"#tooltipstyle-interface"},"TooltipStyle"]],["td","-"]],["tr",["td","trigger"],["td","Event to trigger"],["td",["code","'onPress'"]],["td","-"]],["tr",["td","visible"],["td","Whether to display pop-up content in controlled mode"],["td",["code","boolean"]],["td","-"]]]],["h3","Ref"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Type"]]],["tbody",["tr",["td","hide"],["td","Hide the Tooltip"],["td",["code","() => void"]]],["tr",["td","show"],["td","Show the Tooltip"],["td",["code","() => void"]]],["tr",["td","visible"],["td","Whether the Tooltip is diplaying"],["td",["code","boolean"]]]]],["h2","Tooltip.scrollProps"],["p","While ",["code","Tooltip"]," is inside a ",["code","<ScrollView />"],", please pread ",["code","Tooltip.scrollProps"]," to the ScrollView,\n",["br"],"\notherwise it will not follow the scroll"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ScrollView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Tooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span>\n\n<span class="token operator">&lt;</span>ScrollView <span class="token punctuation">{</span><span class="token operator">...</span>Tooltip<span class="token punctuation">.</span>scrollProps<span class="token punctuation">}</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span><span class="token punctuation">></span></span>'},["code","import { ScrollView } from 'react-native'\nimport { Tooltip } from '@ant-design/react-native'\n\n<ScrollView {...Tooltip.scrollProps}>\n  <Tooltip>...</Tooltip>\n<ScrollView>"]],["h2","Tooltip.Menu"],["h3","Props"],["p","Except for ",["code","content"],", all other attributes are inherited from ",["code","Tooltip"],", the unique attributes are as follows:"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","actions"],["td","Menu list, used when the pop-up content is a standard menu"],["td",["code","Action[]"]],["td","-"]],["tr",["td","maxCount"],["td","Maximum number of menu lists, if exceeded, hide for scrolling"],["td",["code","number"]],["td","-"]],["tr",["td","onAction"],["td","Callback of the selected menum, when the menu list is used"],["td",["code","(item: Action) => void"]],["td","-"]]]],["h3","Action"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","disabled"],["td","Whether disabled"],["td",["code","boolean"]],["td",["code","false"]]],["tr",["td","icon"],["td","The icon of the menu item"],["td",["code","ReactNode"]],["td",["code","null"]]],["tr",["td","key"],["td","The unique identifier of the menu, the default is ",["code","index"]],["td",["code","string | number"]],["td",["code","actions"]," array's ",["code","index"]]],["tr",["td","onPress"],["td","Triggered on click"],["td",["code","() => void"]],["td","-"]],["tr",["td","text"],["td","Menu list, used when the pop-up content is a standard menu"],["td",["code","ReactNode"]],["td","-"]]]],["h3","TooltipStyle interface"],["pre",{lang:"typescript",highlighted:'<span class="token keyword">interface</span> <span class="token class-name">TooltipStyle</span> <span class="token keyword">extends</span> <span class="token class-name">ListItemStyle</span> <span class="token punctuation">{</span>\n  tooltip<span class="token punctuation">:</span> ViewStyle\n  tooltipText<span class="token punctuation">:</span> TextStyle\n  arrow<span class="token punctuation">:</span> ViewStyle\n<span class="token punctuation">}</span>'},["code","interface TooltipStyle extends ListItemStyle {\n  tooltip: ViewStyle\n  tooltipText: TextStyle\n  arrow: ViewStyle\n}"]],["h3","Ref"],["p","Same as Tooltip."],["h2","FAQ"],["h3","Why can't some children components wrapped by Tooltip be opened onPress?"],["p","First, Tooltip's children must be ",["code","React.ReactElement"],", which is a JSX Element rather than a variable."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>press<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>\n  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello</span> <span class="token attr-name">World"</span>\n  <span class="token attr-name">defaultVisible</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span>element<span class="token punctuation">}</span> <span class="token comment" spellcheck="true">// ❌ DO NOT USE</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>press<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span> <span class="token comment" spellcheck="true">// ✅ YES</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>'},["code",'const element = <Button>press</Button>\n\n<Tooltip\n  content="Hello World"\n  defaultVisible>\n  {element} // ❌ DO NOT USE\n  <Button>press</Button> // ✅ YES\n</Tooltip>']],["p","Secondly, the positioning of Tooltip is calculated based on ",["code","View.onLayout"],", so the children component must support the ",["a",{title:null,href:"https://reactnative.dev/docs/view#onlayout"},"onLayout"]," event."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> CustomButton <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    onLayout<span class="token punctuation">:</span> <span class="token punctuation">(</span>event<span class="token punctuation">:</span> LayoutChangeEvent<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">void</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">onLayout</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onLayout<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token operator">...</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>\n  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello</span> <span class="token attr-name">World"</span>\n  <span class="token attr-name">defaultVisible</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomButton</span><span class="token punctuation">></span></span>press<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomButton</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>'},["code",'const CustomButton = (props: {\n    onLayout: (event: LayoutChangeEvent) => void\n  }) => (\n    <View onLayout={props.onLayout}>\n      ...\n    </View>\n  )\n\n<Tooltip\n  content="Hello World"\n  defaultVisible>\n  <CustomButton>press<CustomButton>\n</Tooltip>']]],meta:{category:"Components",type:"Navigation",title:"Tooltip",version:"5.2.1",filename:"components/tooltip/index.en-US.md"}}}}]);