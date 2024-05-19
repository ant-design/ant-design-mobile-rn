import type { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface'
import type { FormInstance, FormProps } from './Form'
import InternalForm, { useForm, useWatch } from './Form'
import type { FormItemProps } from './FormItem'
import Item from './FormItem'
import type {
  FormListFieldData,
  FormListOperation,
  FormListProps,
} from './FormList'
import List from './FormList'

import ErrorList from './ErrorList'
import { FormProvider } from './context'
import useFormInstance from './hooks/useFormInstance'

export type FormLayout = 'horizontal' | 'vertical'
type InternalFormType = typeof InternalForm

type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm
  useFormInstance: typeof useFormInstance
  useWatch: typeof useWatch
  Item: typeof Item
  List: typeof List
  ErrorList: typeof ErrorList
  Provider: typeof FormProvider
}

const Form = InternalForm as CompoundedComponent

Form.Item = Item
Form.List = List
Form.ErrorList = ErrorList
Form.useForm = useForm
Form.useFormInstance = useFormInstance
Form.useWatch = useWatch
Form.Provider = FormProvider

export type {
  FormInstance,
  FormItemProps,
  FormListFieldData,
  FormListOperation,
  FormListProps,
  FormProps,
  Rule,
  RuleObject,
  RuleRender,
}

export default Form
