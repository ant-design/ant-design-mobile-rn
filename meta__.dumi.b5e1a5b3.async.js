"use strict";(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[7387],{54304:function(s,n,e){var t;e.r(n),e.d(n,{demos:function(){return v}});var u=e(15009),o=e.n(u),r=e(99289),i=e.n(r),l=e(67294),m=e(64633),_=e(49817),v={"dumi-pages-index-cn-demo-code":{component:l.memo(l.lazy(function(){return Promise.all([e.e(1067),e.e(2433)]).then(e.bind(e,19846))})),asset:{type:"BLOCK",id:"dumi-pages-index-cn-demo-code",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29496).Z},"@ant-design/react-native":{type:"NPM",value:"5.4.3"},react:{type:"NPM",value:"18.3.1"},"react-native-web":{type:"NPM",value:"0.21.2"}},entry:"index.tsx"},context:{"@ant-design/react-native":m,react:t||(t=e.t(l,2)),"react-native":_},renderOpts:{compile:function(){var c=i()(o()().mark(function E(){var d,y=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(8764),e.e(6862)]).then(e.bind(e,16862));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,y));case 3:case"end":return a.stop()}},E)}));function b(){return c.apply(this,arguments)}return b}()}}}},50696:function(s,n,e){var t;e.r(n),e.d(n,{demos:function(){return v}});var u=e(15009),o=e.n(u),r=e(99289),i=e.n(r),l=e(67294),m=e(64633),_=e(49817),v={"dumi-pages-index-demo-code":{component:l.memo(l.lazy(function(){return Promise.all([e.e(1067),e.e(2433)]).then(e.bind(e,83416))})),asset:{type:"BLOCK",id:"dumi-pages-index-demo-code",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40639).Z},"@ant-design/react-native":{type:"NPM",value:"5.4.3"},react:{type:"NPM",value:"18.3.1"},"react-native-web":{type:"NPM",value:"0.21.2"}},entry:"index.tsx"},context:{"@ant-design/react-native":m,react:t||(t=e.t(l,2)),"react-native":_},renderOpts:{compile:function(){var c=i()(o()().mark(function E(){var d,y=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(8764),e.e(6862)]).then(e.bind(e,16862));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,y));case 3:case"end":return a.stop()}},E)}));function b(){return c.apply(this,arguments)}return b}()}}}},42997:function(s,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},88927:function(s,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},29496:function(s,n){n.Z=`const styles = {
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
import { ScrollView } from 'react-native'

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
      <ScrollView nestedScrollEnabled>
        <List renderHeader={'\u9009\u62E9\u65E5\u671F'}>
          <PickerView
            styles={styles}
            onChange={this.onChange}
            value={this.state.value}
            data={basicColumns}
            cascade={false}
          />
        </List>
      </ScrollView>
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
import { ScrollView } from 'react-native'

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
      <ScrollView nestedScrollEnabled>
        <List renderHeader={'\u9009\u62E9\u65E5\u671F'}>
          <PickerView
            styles={styles}
            onChange={this.onChange}
            value={this.state.value}
            data={basicColumns}
            cascade={false}
          />
        </List>
      </ScrollView>
    )
  }
}
`}}]);
