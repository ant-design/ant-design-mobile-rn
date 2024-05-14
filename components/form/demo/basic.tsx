import React from 'react'
import { ScrollView } from 'react-native'
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
    <ScrollView>
      <Form
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

        <Form.Item label="手机号" name="phoneNumber">
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
              <Button onPress={() => form.resetFields()}>删除</Button>
            </Col>
            <Col>
              <Button type="primary" onPress={onSubmit}>
                保存
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
      <Form layout="vertical" renderHeader="竖直布局表单">
        <Form.Item label="">
          <Input.TextArea
            rows={4}
            placeholder="粘贴整段文字，自动识别地址、姓名、电话"
          />
        </Form.Item>
      </Form>
    </ScrollView>
  )
}

export default FormExample
