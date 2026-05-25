"use strict";(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[7387],{54304:function(s,n,e){var a;e.r(n),e.d(n,{demos:function(){return _}});var d=e(15009),o=e.n(d),r=e(99289),i=e.n(r),l=e(67294),m=e(75560),_={"dumi-pages-index-cn-demo-code":{component:l.memo(l.lazy(function(){return Promise.all([e.e(1067),e.e(2433)]).then(e.bind(e,19846))})),asset:{type:"BLOCK",id:"dumi-pages-index-cn-demo-code",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29496).Z},"@ant-design/react-native":{type:"NPM",value:"5.4.3"},react:{type:"NPM",value:"19.1.0"}},entry:"index.tsx"},context:{"@ant-design/react-native":m,react:a||(a=e.t(l,2))},renderOpts:{compile:function(){var v=i()(o()().mark(function b(){var u,g=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8764),e.e(6862)]).then(e.bind(e,16862));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,g));case 3:case"end":return t.stop()}},b)}));function c(){return v.apply(this,arguments)}return c}()}}}},50696:function(s,n,e){var a;e.r(n),e.d(n,{demos:function(){return _}});var d=e(15009),o=e.n(d),r=e(99289),i=e.n(r),l=e(67294),m=e(75560),_={"dumi-pages-index-demo-code":{component:l.memo(l.lazy(function(){return Promise.all([e.e(1067),e.e(2433)]).then(e.bind(e,85943))})),asset:{type:"BLOCK",id:"dumi-pages-index-demo-code",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40639).Z},"@ant-design/react-native":{type:"NPM",value:"5.4.3"},react:{type:"NPM",value:"19.1.0"}},entry:"index.tsx"},context:{"@ant-design/react-native":m,react:a||(a=e.t(l,2))},renderOpts:{compile:function(){var v=i()(o()().mark(function b(){var u,g=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8764),e.e(6862)]).then(e.bind(e,16862));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,g));case 3:case"end":return t.stop()}},b)}));function c(){return v.apply(this,arguments)}return c}()}}}},42997:function(s,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[]},88927:function(s,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[]},29496:function(s,n){n.Z=`const styles = {
  itemActiveStyle: {
    color: '#108ee9',
    fontWeight: 'bold',
  },
  maskMiddle: {
    backgroundColor: 'rgba(51,51,51,0.1)',
    borderRadius: 10,
  },
}
import { List, PickerView } from '@ant-design/react-native'
import React from 'react'

const basicColumns = [
  [
    { label: '2021\u5E74', value: '2021' },
    { label: '2022\u5E74', value: '2022' },
    { label: '2023\u5E74', value: '2023' },
    { label: '2024\u5E74', value: '2024' },
    { label: '2025\u5E74', value: '2025' },
  ],
  [
    { label: '1\u6708', value: '1' },
    { label: '2\u6708', value: '2' },
    { label: '3\u6708', value: '3' },
    { label: '4\u6708', value: '4' },
    { label: '5\u6708', value: '5' },
  ],
  [
    { label: '1\u65E5', value: '1' },
    { label: '2\u65E5', value: '2' },
    { label: '3\u65E5', value: '3' },
    { label: '4\u65E5', value: '4' },
    { label: '5\u65E5', value: '5' },
  ],
]

export default class PickerViewExample extends React.Component {
  state = {
    value: ['2023', '3', '3'],
  }
  onChange = (value: any) => {
    this.setState({
      value,
    })
  }
  render() {
    return (
      <List renderHeader={'\u9009\u62E9\u65E5\u671F'}>
        <PickerView
          styles={styles}
          onChange={this.onChange}
          value={this.state.value}
          data={basicColumns}
          cascade={false}
        />
      </List>
    )
  }
}
`},40639:function(s,n){n.Z=`const styles = {
  itemActiveStyle: {
    color: '#108ee9',
    fontWeight: 'bold',
  },
  maskMiddle: {
    backgroundColor: 'rgba(51,51,51,0.1)',
    borderRadius: 10,
  },
}
import { List, PickerView } from '@ant-design/react-native'
import React from 'react'

const basicColumns = [
  [
    { label: '2021\u5E74', value: '2021' },
    { label: '2022\u5E74', value: '2022' },
    { label: '2023\u5E74', value: '2023' },
    { label: '2024\u5E74', value: '2024' },
    { label: '2025\u5E74', value: '2025' },
  ],
  [
    { label: '1\u6708', value: '1' },
    { label: '2\u6708', value: '2' },
    { label: '3\u6708', value: '3' },
    { label: '4\u6708', value: '4' },
    { label: '5\u6708', value: '5' },
  ],
  [
    { label: '1\u65E5', value: '1' },
    { label: '2\u65E5', value: '2' },
    { label: '3\u65E5', value: '3' },
    { label: '4\u65E5', value: '4' },
    { label: '5\u65E5', value: '5' },
  ],
]

export default class PickerViewExample extends React.Component {
  state = {
    value: ['2023', '3', '3'],
  }
  onChange = (value: any) => {
    this.setState({
      value,
    })
  }
  render() {
    return (
      <List renderHeader={'\u9009\u62E9\u65E5\u671F'}>
        <PickerView
          styles={styles}
          onChange={this.onChange}
          value={this.state.value}
          data={basicColumns}
          cascade={false}
        />
      </List>
    )
  }
}
`}}]);
