(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[2364],{81710:t=>{t.exports={content:["article",["p","用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。"],["h3","规则"],["ul",["li",["p","尽可能少用。Modal 会打断用户操作，只用在重要的时候。"]],["li",["p","标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。"]],["li",["p","操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。"]],["li",["p","一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。"]]],["h2","API"],["h3","Modal"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","visible"],["td","对话框是否可见"],["td","Boolean"],["td","false"]],["tr",["td","closable"],["td","是否显示关闭按钮"],["td","Boolean"],["td","false"]],["tr",["td","maskClosable"],["td","点击蒙层是否允许关闭"],["td","Boolean"],["td","true"]],["tr",["td","onClose"],["td","点击 x 或 mask 回调"],["td","(): void"],["td","无"]],["tr",["td","transparent"],["td","是否背景透明"],["td","Boolean"],["td","false"]],["tr",["td","popup"],["td","是否弹窗模式"],["td","Boolean"],["td","false"]],["tr",["td","animationType"],["td","可选: 'fade' / 'slide'"],["td","String"],["td","fade"]],["tr",["td","title"],["td","标题"],["td","React.Element"],["td","无"]],["tr",["td","footer"],["td","底部内容"],["td","Array ",["span","{text, onPress}"]],["td","[]"]],["tr",["td","onRequestClose"],["td",["code","onRequestClose"],"回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。返回true时会在 modal 处于开启状态时阻止",["code","BackHandler"],"事件。"],["td","(): boolean"],["td","false"]]]],["h2","静态方法"],["h3","Modal.alert(title, message, actions?, platform?)"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","title"],["td","标题"],["td","String 或 React.Element"],["td","无"]],["tr",["td","message"],["td","提示信息"],["td","String 或 React.Element"],["td","无"]],["tr",["td","actions"],["td","按钮组, ",["span","{text, onPress, style}"]],["td","Array"],["td","无"]],["tr",["td","onBackHandler"],["td","返回键的回调(非必须)，返回true则关闭modal，false阻止modal关闭"],["td","(): boolean"],["td","无"]]]],["h3","Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?)"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","title"],["td","标题"],["td","String 或 React.Element"],["td","无"]],["tr",["td","message"],["td","提示信息"],["td","String 或 React.Element"],["td","无"]],["tr",["td","callbackOrActions"],["td","按钮组 ",["span","{text, onPress}"]," 或回调函数"],["td","Array or Function"],["td","无"]],["tr",["td","type"],["td","prompt 的样式"],["td","String (",["code","default"],", ",["code","secure-text"],", ",["code","login-password"],")"],["td",["code","default"]]],["tr",["td","defaultValue"],["td","默认值(input 为 password 类型不支持)"],["td","String"],["td","-"]],["tr",["td","placeholders"],["td",["span","'', ''"]],["td","String[]"],["td","-"]],["tr",["td","onBackHandler"],["td","返回键的回调(非必须)，返回true则关闭modal，false阻止modal关闭"],["td","(): boolean"],["td","无"]]]],["h3","Modal.operation(actions?, onBackHandler?)"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","actions"],["td","按钮组, ",["span","{text, onPress, style}"]],["td","Array"],["td","无"]],["tr",["td","onBackHandler"],["td","返回键的回调(非必须)，返回true则关闭modal，false阻止modal关闭"],["td","(): boolean"],["td","无"]]]],["h2","FAQ"],["h3","静态方法Modal如何关闭？"],["p","需要借助",["code","Portal.remove(key)"],"方法； 以下 ",["code","Modal.alert"]," 为例"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Modal<span class="token punctuation">,</span> Portal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> onOpen <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    key<span class="token punctuation">.</span>current <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> onClose <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 关闭Modal.alert</span>\n    Portal<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import { Modal, Portal } from '@ant-design/react-native'\nimport { useRef } from 'react'\n\nfunction App() {\n  const key = useRef()\n\n  const onOpen = () => {\n    key.current = Modal.alert({})\n  }\n\n  const onClose = () => {\n    // 关闭Modal.alert\n    Portal.remove(key)\n  }\n}"]]],meta:{category:"Components",type:"Feedback",title:"Modal",subtitle:"对话框",filename:"components/modal/index.zh-CN.md"}}}}]);