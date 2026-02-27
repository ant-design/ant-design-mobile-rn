import { List, Stepper, Toast } from '@ant-design/react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default function StepperExample() {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
      <ScrollView>
        <List renderHeader={'基础用法'}>
          <List.Item
            extra={
              <Stepper
                defaultValue={1}
                onChange={(value) => {
                  console.log(value)
                }}
              />
            }>
            基础用法
          </List.Item>
          <List.Item extra={<Stepper step={10} defaultValue={10} />}>
            步长设置
          </List.Item>
          <List.Item extra={<Stepper min={-5} max={5} />}>
            限制输入范围
          </List.Item>
          <List.Item extra={<Stepper digits={1} />}>格式化到一位小数</List.Item>
          <List.Item
            extra={
              <Stepper
                defaultValue={93}
                formatter={(value) => `$ ${value}`}
                parser={(text) => parseFloat(text.replace('$', ''))}
                onChange={(value) => {
                  console.log(value, typeof value)
                }}
              />
            }>
            自定义格式
          </List.Item>
        </List>
        <List renderHeader={'状态/样式'}>
          <List.Item extra={<Stepper disabled />}>禁用状态</List.Item>
          <List.Item extra={<Stepper readOnly />}>输入框只读状态</List.Item>
          <List.Item
            extra={
              <Stepper
                onFocus={() => {
                  Toast.info('获得焦点')
                }}
                onBlur={() => {
                  Toast.info('失去焦点')
                }}
              />
            }>
            获得/失去焦点
          </List.Item>
          <List.Item
            extra={
              <Stepper
                allowEmpty={true}
                min={10}
                max={20}
                onChange={(value) => {
                  console.log(value)
                }}
              />
            }>
            允许清空
          </List.Item>
          <List.Item extra={<Stepper defaultValue={10000} step={10000} />}>
            自定义样式
          </List.Item>
        </List>
        <StringModeExample />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const StringModeExample = () => {
  const [value, setValue] = React.useState('9999999999999999')
  return (
    <List renderHeader={'stringMode'}>
      <List.Item>
        <Stepper
          stringMode
          defaultValue="0.000000000000002"
          step="0.000000000000001"
          onChange={console.log}
          style={{ width: '100%' }}
        />
      </List.Item>
      <List renderHeader={'stringMode control'}>
        <List.Item>
          <Stepper
            stringMode
            value={value}
            step="13579"
            onChange={setValue}
            style={{ width: '100%' }}
          />
        </List.Item>
      </List>
    </List>
  )
}
