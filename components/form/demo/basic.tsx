import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { FormProps } from '..'
import { Button, Form, Input, Picker, Radio, Flex as Row, Switch } from '../../'

const Col = Row.Item

const data = require('../../picker/demo/data.json')

type FieldType = {
  username?: string
  password?: string
  remember?: string
  isDefault?: boolean
}

const FormExample: React.FC = () => {
  const [form] = Form.useForm()

  const onSubmit = () => {
    form.submit()
  }

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo)
  }

  const pickerRef = React.useRef<any>(null)

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Form
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            doorNumber: '',
            username: '',
            phoneNumber: '',
            isDefault: false,
          }}
          renderHeader="水平布局菜单">
          <Form.Item
            label="地址"
            name="address"
            rules={[{ required: true, message: '地址不能为空' }]}
            arrow="horizontal"
            onPress={() => {
              pickerRef.current.toggle()
            }}>
            <Picker data={data} cols={3} ref={pickerRef}>
              {({ extra, value, toggle }: any) => (
                <Input
                  value={value?.length ? extra : undefined}
                  onFocus={toggle}
                  placeholder="省/市/区"
                />
              )}
            </Picker>
          </Form.Item>

          <Form.Item
            label="收货人"
            name="username"
            extra={
              <Form.Item name="gender" noStyle>
                <Radio.Group>
                  <Row>
                    <Radio value={1}>先生</Radio>
                    <Radio value={2}>女士</Radio>
                  </Row>
                </Radio.Group>
              </Form.Item>
            }>
            <Input placeholder="请输入收货人姓名" />
          </Form.Item>

          <Form.Item
            label="手机号"
            name="phoneNumber"
            hasFeedback
            validateDebounce={500}
            rules={[{ pattern: /^1[3456789]\d{9}$/ }, { required: true }]}>
            <Input type="number" placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            label="设为默认"
            name="isDefault"
            wrapperStyle={{ alignItems: 'flex-end' }}
            valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item>
            <Row>
              <Col style={{ marginRight: 10 }}>
                <Button onPress={() => form.resetFields()}>重置</Button>
              </Col>
              <Col>
                <Button type="primary" onPress={onSubmit}>
                  保存
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <Form name="vertical" layout="vertical" renderHeader="垂直布局菜单">
          <Form.Item label="问题描述">
            <Input.TextArea
              placeholder="请填写10个字以上的问题描述，以便我们提供更好的服务。"
              maxLength={200}
              showCount
              rows={6}
            />
          </Form.Item>
          <Form.Item
            label="联系电话"
            name="phone"
            help="如您选择填写联系方式，该信息将同步至开发者">
            <Input type="number" placeholder="选填，请填写您的手机号码" />
          </Form.Item>
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default FormExample
