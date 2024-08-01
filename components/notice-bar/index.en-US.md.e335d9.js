(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[558],{1462:e=>{e.exports={content:["article",["p","Component to display a system message, event notice and etc. Which is under the navigation bar."],["h3","Rules"],["ul",["li",["p","Be used to attract user's attension, the importance level is lower than ",["code","Modal"]," and higher than ",["code","Toast"],"."]]],["h2","API"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","action"],["td","text which is used to replace right icon"],["td",["code","ReactNode"]],["td","-"],["td"]],["tr",["td","children"],["td","The children rendered inside the marquee"],["td",["code","ReactNode"]],["td","-"],["td"]],["tr",["td","icon"],["td","Set the icon at the start position"],["td",["code","ReactNode"]],["td",["code",'<Icon name="sound" color={theme.brand_error} />']],["td"]],["tr",["td","marqueeProps"],["td","marquee params"],["td",["a",{title:null,href:"#marquee-props"},"MarqueeProps"]],["td",["code","{loop: false, leading: 500, trailing: 800, fps: 40}"]],["td"]],["tr",["td","mode"],["td","Type of NoticeBar. Invalid when ",["code","action"]," is present"],["td",["code","closable"],"|",["code","link"]],["td","-"],["td"]],["tr",["td","onClose"],["td","A callback function, can be executed when you click the ",["code","action"]," icon. Only valid in ",["code",'mode="closable"']],["td",["code","() => void"]],["td","-"],["td",["code","5.2.0"]]],["tr",["td","onPress"],["td","A callback function, can be executed when you click on the operating area"],["td",["code","() => void"]],["td","-"],["td"]],["tr",["td","style"],["td","Container style"],["td",["code","StyleProp<ViewStyle>"]],["td","-"],["td"]],["tr",["td","styles"],["td","Semantic DOM style"],["td",["a",{title:null,href:"#noticebarstyle-interface"},"NoticeBarStyle"]],["td","-"],["td"]]]],["ul",["li",["p","Theme color ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx#L43"},"theme.brand_error"]," = ",["code","#f4333c"]]]],["h3","Marquee props"],["blockquote",["p","Design Reference ",["a",{title:null,href:"https://github.com/justin-chu/react-fast-marquee"},"https://github.com/justin-chu/react-fast-marquee"]]],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoFill"],["td","Whether to automatically fill blank space in the marquee with copies of the children or not"],["td",["code","Boolean"]],["td","false"],["td",["code","5.2.0"]]],["tr",["td","direction"],["td","The direction the marquee slides"],["td",["code",'"left"']," ","|"," ",["code",'"right"']],["td",'"left"'],["td",["code","5.2.0"]]],["tr",["td","fps"],["td","Speed calculated as pixels/second"],["td",["code","Number"]],["td","40"],["td"]],["tr",["td","leading"],["td","Duration to delay the animation after first render, in millisecond"],["td",["code","Number"]],["td","500"],["td"]],["tr",["td","loop"],["td","The number of times the marquee should loop, ",["code","true/0"]," is equivalent to infinite"],["td",["code","Boolean"]," ","|"," ",["code","Number"]],["td","false"],["td"]],["tr",["td","onFinish"],["td","A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero or false."],["td",["code","() => void"]],["td","-"],["td",["code","5.2.0"]]],["tr",["td","onCycleComplete"],["td","A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead)."],["td",["code","() => void"]],["td","-"],["td",["code","5.2.0"]]],["tr",["td","play"],["td","Whether to play or pause the marquee"],["td",["code","Boolean"]],["td","true"],["td",["code","5.2.0"]]],["tr",["td","spacing"],["td","Spacing between repeting elements, valid when ",["code","autoFill={true}"]],["td",["code","Number"]],["td","0"],["td",["code","5.2.0"]]],["tr",["td","style"],["td","The marquee Text style"],["td",["code","TextStyle"]],["td","-"],["td"]],["tr",["td","trailing"],["td","Duration to delay the animation after previous loop, valid when ",["code","autoFill={false}"],", in millisecond"],["td",["code","Number"]],["td","800"],["td"]]]],["h2","NoticeBarStyle interface"],["blockquote",["p","New in ",["code","5.2.0"]]],["pre",{lang:"ts",highlighted:'<span class="token keyword">interface</span> <span class="token class-name">NoticeBarStyle</span> <span class="token punctuation">{</span>\n    container<span class="token punctuation">:</span> ViewStyle<span class="token punctuation">,</span>   <span class="token comment" spellcheck="true">// Outermost container style</span>\n    font<span class="token punctuation">:</span> TextStyle<span class="token punctuation">,</span>        <span class="token comment" spellcheck="true">// Font style, default: {color: theme.brand_error}</span>\n    background<span class="token punctuation">:</span> ViewStyle<span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// Background color, default: {backgroundColor: #fffada}</span>\n\n    marquee<span class="token punctuation">:</span> TextStyle<span class="token punctuation">,</span>     <span class="token comment" spellcheck="true">// marquee font style</span>\n\n    iconWrap<span class="token punctuation">:</span> ViewStyle<span class="token punctuation">,</span>    <span class="token comment" spellcheck="true">// left icon wrap</span>\n    actionWrap<span class="token punctuation">:</span> ViewStyle<span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// right action wrap</span>\n    close<span class="token punctuation">:</span> ViewStyle<span class="token punctuation">,</span>       <span class="token comment" spellcheck="true">// mode="closeable" icon</span>\n    link<span class="token punctuation">:</span> ViewStyle         <span class="token comment" spellcheck="true">// mode="link" icon</span>\n<span class="token punctuation">}</span>'},["code",'interface NoticeBarStyle {\n    container: ViewStyle,   // Outermost container style\n    font: TextStyle,        // Font style, default: {color: theme.brand_error}\n    background: ViewStyle,  // Background color, default: {backgroundColor: #fffada}\n\n    marquee: TextStyle,     // marquee font style\n\n    iconWrap: ViewStyle,    // left icon wrap\n    actionWrap: ViewStyle,  // right action wrap\n    close: ViewStyle,       // mode="closeable" icon\n    link: ViewStyle         // mode="link" icon\n}']]],meta:{category:"Components",type:"Data Display",title:"NoticeBar",version:"update",filename:"components/notice-bar/index.en-US.md"}}}}]);