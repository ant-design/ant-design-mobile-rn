/**
 * title: Try it live!
 * description: Experience Ant Design Mobile RN components in your browser.
 */

import {
  Button,
  Form,
  Input,
  Picker,
  Provider,
  Radio,
  Flex as Row,
  Switch,
} from '@ant-design/react-native'
import type { FormProps } from '@ant-design/react-native/lib/form'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

const Col = Row.Item

const data = require('./data.json')

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
    <Provider>
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
            renderHeader="Horizontal Layout">
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Address is required' }]}
              arrow="horizontal"
              onPress={() => {
                pickerRef.current.toggle()
              }}>
              <Picker data={data} cols={3} ref={pickerRef}>
                {({ extra, value, toggle }) => (
                  <Input
                    value={value?.length ? extra : undefined}
                    onFocus={toggle}
                    placeholder="Province / City / District"
                  />
                )}
              </Picker>
            </Form.Item>

            <Form.Item
              label="Recipient"
              name="username"
              extra={
                <Form.Item name="gender" noStyle>
                  <Radio.Group>
                    <Row>
                      <Radio value={1}>Mr.</Radio>
                      <Radio value={2}>Ms.</Radio>
                    </Row>
                  </Radio.Group>
                </Form.Item>
              }>
              <Input placeholder="Enter recipient name" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              hasFeedback
              validateDebounce={500}
              rules={[
                { pattern: /^1[3456789]\d{9}$/, message: 'Invalid phone number' },
                { required: true, message: 'Phone number is required' },
              ]}>
              <Input type="number" placeholder="Enter phone number" />
            </Form.Item>

            <Form.Item
              label="Set as Default"
              name="isDefault"
              wrapperStyle={{ alignItems: 'flex-end' }}
              valuePropName="checked">
              <Switch />
            </Form.Item>
          </Form>

          <Form name="vertical" layout="vertical" renderHeader="Vertical Layout">
            <Form.Item label="Issue Description">
              <Input.TextArea
                placeholder="Please enter at least 10 characters so we can better assist you."
                maxLength={200}
                showCount
                rows={6}
              />
            </Form.Item>

            <Form.Item
              label="Contact Number"
              name="phone"
              help="If provided, this information will be shared with the developer">
              <Input type="number" placeholder="Optional, enter your phone number" />
            </Form.Item>

            <Form.Item>
              <Row>
                <Col style={{ marginRight: 10 }}>
                  <Button onPress={() => form.resetFields()}>Reset</Button>
                </Col>
                <Col>
                  <Button type="primary" onPress={onSubmit}>
                    Save
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  )
}

export default FormExample