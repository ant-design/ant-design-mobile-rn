import React, { useContext } from 'react'

import devWarning from '../../_util/devWarning'
import { FormItemInputContext } from '../context'
import { ValidateStatus } from '../FormItem'

type UseFormItemStatus = () => {
  status?: ValidateStatus
  errors: React.ReactNode[]
  warnings: React.ReactNode[]
}

const useFormItemStatus: UseFormItemStatus = () => {
  const {
    status,
    errors = [],
    warnings = [],
  } = useContext(FormItemInputContext)

  devWarning(
    status !== undefined,
    'Form.Item',
    'Form.Item.useStatus should be used under Form.Item component. For more information: https://u.ant.design/form-item-usestatus',
  )

  return { status, errors, warnings }
}

// Only used for compatible package. Not promise this will work on future version.
;(useFormItemStatus as any).Context = FormItemInputContext

export default useFormItemStatus
