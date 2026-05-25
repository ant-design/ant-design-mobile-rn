## Form

### Usage Example

```jsx
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
import { district } from 'antd-mobile-demo-data'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'


const Col = Row.Item

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
            renderHeader="水平布局菜单">
            <Form.Item
              label="地址"
              name="address"
              rules={[{ required: true, message: '地址不能为空' }]}
              arrow="horizontal"
              onPress={() => {
                pickerRef.current.toggle()
              }}>
              <Picker data={district} cols={3} ref={pickerRef}>
                {({ extra, value, toggle }) => (
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
    </Provider>
  )
}

export default FormExample
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ListItemStyle, ListStyle } from '../../list/style'
import { Theme } from '../../style'

export interface FormStyle extends ListStyle {}
export interface FormItemStyle extends ListItemStyle {
  formItemLabel: ViewStyle
  formItemLabelText: ViewStyle | TextStyle
  formItemControl: ViewStyle
  asterisk: TextStyle
  optional: TextStyle
}

export interface ValidateStatusStyle {
  error: TextStyle
  warning: TextStyle
  success: TextStyle
  validating: TextStyle
  feedbackIcon: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<Partial<FormItemStyle & ValidateStatusStyle>>({
    formItemLabel: {
      minWidth: theme.prefix_width,
      position: 'relative',
      flexDirection: 'row',
      paddingTop: theme.prefix_padding,
    },
    formItemLabelText: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
    },
    asterisk: {
      position: 'absolute',
      left: -theme.font_size_heading / 2,
      top: theme.prefix_padding,
      color: theme.brand_error,
      fontSize: theme.font_size_heading,
    },
    optional: {
      color: 'rgba(0, 0, 0, 0.45)',
      fontSize: theme.font_size_heading,
    },
    formItemControl: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    error: {
      color: theme.brand_error,
    },
    warning: {
      color: theme.brand_warning,
    },
    success: {
      color: theme.brand_success,
    },
    validating: {
      color: theme.brand_primary,
    },
    feedbackIcon: {},
  })
```

### Abstract DOM Structure

```html
<!-- 顶层表单容器，包含整个表单列表，支持样式透传 -->
<FieldForm
  component={AntmList}
  style={...} styles={{ List }}
>
  <!-- 表单列表容器，显示表单项列表 -->
  <AntmList styles={{ List }}>
    <!-- 表单项节点（List.Item），为表单的基本单元，支持基本样式 -->
    <List.Item styles={{ Item }} style={...}>
      <!-- 表单项标签容器，负责渲染label及必选标记 -->
      <View styles={{ formItemLabel }}>
        <!-- 必选星号，条件渲染 -->
        <!-- 对应 styles.asterisk：必填星号样式 -->
        <Text styles={{ asterisk }} />
        <!-- 标签文本容器，支持 labelStyle 叠加 -->
        <!-- 对应 styles.formItemLabelText：标签文本样式 -->
        <AntdView style={...} styles={{ formItemLabelText }} />
        <!-- 可选文字，条件渲染requiredMark='optional'时显示 -->
        <!-- 对应 styles.optional：可选标记样式 -->
        <Text styles={{ optional }} />
      </View>
      <!-- 表单控件容器，包含表单控件及校验错误提示 -->
      <View styles={{ formItemControl }} style={...}>
        <!-- 表单控件（children），典型为输入框或选择器等，支持用户传入任意控件 -->
        {...children}
        <!-- 错误提示列表，条件渲染，有错误或帮助提示时显示 -->
        <Brief styles={{ error, warning, success, validating }}>
          <!-- 错误或帮助提示文本 -->
          ...
        </Brief>
      </View>
      <!-- 验证状态反馈图标，条件渲染hasFeedback为true，动态样式 -->
      <View styles={{ feedbackIcon }}>
        <!-- success, warning, error, validating 状态对应不同图标或loading -->
        <Icon styles={{ success | warning | error | validating }} />
        <ActivityIndicator styles={{ validating }} />
      </View>
      <!-- 分割线，List.Item内部行分割线 -->
      <View styles={{ Line }} />
      <!-- 缩略图，List.Item中的Thumb，支持样式定制 -->
      <Image styles={{ Thumb }} />
    </List.Item>
    <!-- 其它重复的List.Item表示表单中不同项 -->
  </AntmList>
</FieldForm>
```
