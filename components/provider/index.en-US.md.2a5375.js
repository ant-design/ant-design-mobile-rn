(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[2813],{32185:n=>{n.exports={content:["article",["p",["code","Provider"]," provides a uniform localization support for built-in text of components."],["h2","When to use"],["ul",["li",["p","You want to use other languages than ",["code","Chinese"]]],["li",["p","You want to change the default theme color."]],["li",["p","You want to add vibration feedback to built-in component."]],["li",["p","You want to use the ",["code","Portal component"],"."]]],["h3","Portal Component"],["p",["code","ActionSheet"]," ",["code","Modal"]," ",["code","Picker"]," ",["code","Toast"]," ",["code","ToolTip"]," belongs to Portal component;"],["p","To use these components, you must wrap your root component (usually in App.js) with ",["code","Provider"]," component."],["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","locale"],["td","Language package setting(",["code","The default language is Chinese"],"), ",["br"],"you can find the packages in this path: ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider"},["code","@ant-design/react-native/lib/locale-provider/"]]],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider/index.tsx#L4"},"Locale"]],["td","-"],["td"]],["tr",["td","theme"],["td","Theme customization, you can override some or all variables as needed"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx"},"Theme"]],["td","-"],["td"]],["tr",["td","onHaptics"],["td","Set the vibration engine. This method will be triggered when the built-in component needs vibration feedback."],["td",["code","(componentName: 'picker' | 'stepper' | 'slider' | 'switch') => void"]],["td","-"],["td",["code","5.2.0"]]],["tr",["td","isRTL"],["td","Whether use Right-to-Left (RTL) languages. ",["br"],"Currently only applies to ",["code","<SwipeAction/>"]],["td",["code","Boolean"]],["td",["code","I18nManager.isRTL"]],["td",["code","5.2.0"]]]]],["h2","FAQ"],["h3","How do I customize my theme?"],["p","For example: Modifying the following theme variables has a relatively large impact"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Provider theme<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    brand_primary<span class="token punctuation">:</span> palette<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// Brand base color #108ee9</span>\n    fill_base<span class="token punctuation">:</span> palette<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>      <span class="token comment" spellcheck="true">// Component default background color #ffffff</span>\n    primary_button_fill<span class="token punctuation">:</span> palette<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>     <span class="token comment" spellcheck="true">// &lt;Button type="primary"> background color</span>\n    primary_button_fill_tap<span class="token punctuation">:</span> palette<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// &lt;Button type="primary"> onTap background color</span>\n    color_icon_base<span class="token punctuation">:</span> palette<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>         <span class="token comment" spellcheck="true">// Background color for many icons</span>\n<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n<span class="token operator">...</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span>'},["code",'<Provider theme={{\n    brand_primary: palette[5],  // Brand base color #108ee9\n    fill_base: palette[0],      // Component default background color #ffffff\n    primary_button_fill: palette[5],     // <Button type="primary"> background color\n    primary_button_fill_tap: palette[3], // <Button type="primary"> onTap background color\n    color_icon_base: palette[4],         // Background color for many icons\n}}>\n...\n</Provider>']],["h3","How to activate component vibration?"],["p","Since the vibration engines of different platforms are different, we expose the vibration events and execute them by the plug-in engine."],["p","Usually, the ",["code","expo-haptics"]," engine is used in Expo; the ",["code","react-native-haptic-feedback"]," engine is used in React-Native-CLI;"],["p","Here we take Expo CLI as an example"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Haptics <span class="token keyword">from</span> <span class="token string">\'expo-haptics\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Platform <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> \n    <span class="token attr-name">onHaptics</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Platform<span class="token punctuation">.</span>OS <span class="token operator">!==</span> <span class="token string">\'web\'</span> <span class="token operator">&amp;&amp;</span> Haptics<span class="token punctuation">.</span><span class="token function">impactAsync</span><span class="token punctuation">(</span><span class="token string">\'light\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>\n<span class="token operator">...</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span>'},["code","import * as Haptics from 'expo-haptics'\nimport { Platform } from 'react-native'\n\n<Provider \n    onHaptics={() => Platform.OS !== 'web' && Haptics.impactAsync('light')}\n>\n...\n</Provider>"]]],meta:{category:"Components",title:"Provider",type:"Other",version:"update",filename:"components/provider/index.en-US.md"}}}}]);