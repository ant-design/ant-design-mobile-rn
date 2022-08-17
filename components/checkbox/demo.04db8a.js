(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[5466],{45995:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/checkbox/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox<span class="token punctuation">,</span> List<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicCheckboxExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      checkBox1<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      agreeItem1<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      checkboxItem1<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span>\n            <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checkBox1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#f00\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkBox1<span class="token punctuation">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n          <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span><span class="token punctuation">></span></span>Checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span><span class="token punctuation">></span></span>\n          Agree agreement agreement agreement agreement agreement agreement\n          agreement\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>agreeItem1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">checkboxStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#f00\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> agreeItem1<span class="token punctuation">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n        <span class="token punctuation">></span></span>\n          Agree agreement\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Not selected<span class="token punctuation">.</span> Not editable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n          Force selected<span class="token punctuation">.</span> Not editable\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Multiple options<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span>\n            <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checkboxItem1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkboxItem1<span class="token punctuation">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n          <span class="token punctuation">></span></span>\n            Option <span class="token number">1</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span><span class="token punctuation">></span></span>Option <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Option <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">disabled</span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span>\n            Option <span class="token number">4</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import React from 'react';\nimport { Text, View } from 'react-native';\nimport { Checkbox, List, WhiteSpace } from '@ant-design/react-native';\nconst AgreeItem = Checkbox.AgreeItem;\nconst CheckboxItem = Checkbox.CheckboxItem;\nexport default class BasicCheckboxExample extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = {\n      checkBox1: true,\n      agreeItem1: true,\n      checkboxItem1: true,\n    };\n  }\n  render() {\n    return (\n      <View>\n        <View style={{ padding: 10 }}>\n          <Checkbox\n            checked={this.state.checkBox1}\n            style={{ color: '#f00' }}\n            onChange={event => {\n              this.setState({ checkBox1: event.target.checked });\n            }}\n          />\n          <WhiteSpace />\n          <Checkbox>Checkbox</Checkbox>\n          <WhiteSpace />\n          <Checkbox checked disabled />\n          <WhiteSpace />\n          <Checkbox disabled />\n        </View>\n\n        <WhiteSpace />\n        <AgreeItem>\n          Agree agreement agreement agreement agreement agreement agreement\n          agreement\n        </AgreeItem>\n        <WhiteSpace />\n        <AgreeItem\n          checked={this.state.agreeItem1}\n          checkboxStyle={{ color: '#f00' }}\n          onChange={event => {\n            this.setState({ agreeItem1: event.target.checked });\n          }}\n        >\n          Agree agreement\n        </AgreeItem>\n        <WhiteSpace />\n        <AgreeItem disabled>Not selected. Not editable</AgreeItem>\n        <WhiteSpace />\n        <AgreeItem checked disabled>\n          Force selected. Not editable\n        </AgreeItem>\n\n        <List style={{ marginTop: 12 }}>\n          <Text style={{ marginTop: 12 }}>Multiple options</Text>\n          <CheckboxItem\n            checked={this.state.checkboxItem1}\n            onChange={event => {\n              this.setState({ checkboxItem1: event.target.checked });\n            }}\n          >\n            Option 1\n          </CheckboxItem>\n          <CheckboxItem>Option 2</CheckboxItem>\n          <CheckboxItem disabled>Option 3</CheckboxItem>\n          <CheckboxItem disabled checked>\n            Option 4\n          </CheckboxItem>\n        </List>\n      </View>\n    );\n  }\n}"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/checkbox/demo/basic.md"}}},3404:(n,a,s)=>{n.exports={basic:s(45995)}}}]);