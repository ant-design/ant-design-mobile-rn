import { List } from 'rc-field-form'
import type { StoreValue, ValidatorRule } from 'rc-field-form/lib/interface'
import * as React from 'react'

import devWarning from '../_util/devWarning'
import { FormItemPrefixContext } from './context'

export interface FormListFieldData {
  name: number
  key: number
  /** @deprecated No need anymore Use key instead */
  fieldKey?: number
}

export interface FormListOperation {
  add: (defaultValue?: StoreValue, insertIndex?: number) => void
  remove: (index: number | number[]) => void
  move: (from: number, to: number) => void
}

export interface FormListProps {
  name: string | number | (string | number)[]
  rules?: ValidatorRule[]
  initialValue?: any[]
  children: (
    fields: FormListFieldData[],
    operation: FormListOperation,
    meta: { errors: React.ReactNode[]; warnings: React.ReactNode[] },
  ) => React.ReactNode
}

const FormList: React.FC<FormListProps> = ({ children, ...props }) => {
  if (__DEV__) {
    devWarning(
      typeof props.name === 'number' ||
        (Array.isArray(props.name) ? !!props.name.length : !!props.name),
      'Form.List',
      'Miss `name` prop.',
    )
  }

  const contextValue = React.useMemo(
    () => ({
      status: 'error' as const,
    }),
    [],
  )

  return (
    <List {...props}>
      {(fields, operation, meta) => (
        <FormItemPrefixContext.Provider value={contextValue}>
          {children(
            fields.map((field) => ({ ...field, fieldKey: field.key })),
            operation,
            {
              errors: meta.errors,
              warnings: meta.warnings,
            },
          )}
        </FormItemPrefixContext.Provider>
      )}
    </List>
  )
}

export default FormList
