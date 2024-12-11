(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[1567],{92832:t=>{t.exports={content:["article",["h2","API"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","afterChange"],["td","callback to be called after a slide is changed"],["td","(current: number) => void"],["td"],["td"]],["tr",["td","autoplay"],["td","autoplay mode active"],["td","Boolean"],["td","false"],["td"]],["tr",["td","autoplayInterval"],["td","interval for autoplay iteration"],["td","Number"],["td","3000"],["td"]],["tr",["td","dots"],["td","whether to display the indication dots"],["td","Boolean"],["td","true"],["td"]],["tr",["td","dotStyle"],["td","style of dots"],["td","ViewStyle"],["td"],["td"]],["tr",["td","dotActiveStyle"],["td","style of active dot"],["td","ViewStyle"],["td"],["td"]],["tr",["td","infinite"],["td","whether is infinite loop"],["td","Boolean"],["td","false"],["td"]],["tr",["td","lazy"],["td","Function which takes an object with the current page and returns a boolean to indicate whether to lazily render the scenes."],["td","Boolean ","|"," ",["code","(index:number) => boolean"]],["td","false"],["td",["code","5.3.1"]]],["tr",["td","renderLazyPlaceholder"],["td","A callback that returns a custom React Element to render for pages not yet rendered. Requires the ",["code","lazy"]," prop to be enabled."],["td",["code","(index:number) => ReactNode"]],["td","-"],["td",["code","5.3.1"]]],["tr",["td","pageStyle"],["td","style of the carousel page"],["td","ViewStyle"],["td"],["td"]],["tr",["td","pagination"],["td","A generator function which could be used to customized pagination."],["td","(props) => ReactNode"],["td"],["td"]],["tr",["td","selectedIndex"],["td","current selected index"],["td","number"],["td","0"],["td"]],["tr",["td","style"],["td","ScrollView style",["br"],"(",["code","tips: Recommended setting, the overall carousel size is determined by the container scrollview and not the inner page"],")"],["td","ViewStyle"],["td"],["td"]],["tr",["td","vertical"],["td","controls the pagination display direction."],["td","Boolean"],["td","false"],["td"]],["tr",["td","onScrollAnimationEnd"],["td","Called when a scrolling animation ends."],["td","()=>void"],["td"],["td",["code","5.3.0"]]]]],["p","The rest of the props of Carousel are exactly the same as the react-native ",["a",{title:null,href:"https://reactnative.dev/docs/scrollview.html"},"ScrollView"],";"],["p","eg: ",["code","scrollEnabled"],"、",["code","onScroll"]," (if it not works, it is a mandatory prop of Carousel)"],["h2","Carousel ref methods"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"]]],["tbody",["tr",["td","goTo"],["td","jump to specified index"],["td",["code","(index: number, animated?: boolean): void"]]],["tr",["td","scrollNextPage"],["td","scroll to next page"],["td",["code","() => void"]]]]],["h2","FAQ"],["h3","1. On the Android platform, when using ",["code","Carousel"]," nested in ",["code","ScrollView"],", the Carousel Item cannot slide. What should I do?"],["p","Support in ",["code","5.1.3"],". Set the ",["code","nestedScrollEnabled"]," property of ",["code","ScrollView"]," to ",["code","true"],"."],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span> <span class="token attr-name">nestedScrollEnabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token operator">...</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">vertical</span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span>'},["code","<ScrollView nestedScrollEnabled={true}>\n  ...\n  <Carousel vertical/>\n</ScrollView>"]],["h3","2. Use ",["code","lazy"]," and ",["code","renderLazyPlaceholder"]," props to render routes as needed"],["p","Support in ",["code","5.3.1"],"."],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// `lazy={true}` only the current page is rendered</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> \n  <span class="token attr-name">lazy</span>\n  <span class="token attr-name">renderLazyPlaceholder</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token comment" spellcheck="true">// eg: Render the sibling pages, a total of 3 pages</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> \n  <span class="token attr-name">lazy</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>selectedIndex <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>'},["code","// `lazy={true}` only the current page is rendered\n<Carousel \n  lazy\n  renderLazyPlaceholder={()=> <Loading /> }\n/>\n\n// eg: Render the sibling pages, a total of 3 pages\n<Carousel \n  lazy={(i) => Math.abs(selectedIndex - i) < 2}\n>"]],["h3","3. Why choose Carousel instead of ",["code","react-native-pager-view"]," ?"],["p","First, Carousel supports the ",["code","infinite"]," property, which means 🌟a true infinite loop🌟. ",["br"],"\nSecond, Carousel is completely based on ",["code","ScrollView"],", which is not only lighter but also more compatible."]],meta:{category:"Components",type:"Data Display",title:"Carousel",filename:"components/carousel/index.en-US.md"}}}}]);