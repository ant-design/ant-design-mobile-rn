import React from 'react'
import Checkbox from './Checkbox'
import { CheckboxProps } from './PropsType'

const AgreeItem = (props: CheckboxProps) => {
  return (
    <Checkbox
      {...props}
      styles={{
        checkbox_checked: {
          borderColor: 'red',
          ...(props.styles?.checkbox_checked || {}),
        },
        checkbox_inner: {
          backgroundColor: 'red',
          ...(props.styles?.checkbox_inner || {}),
        },
      }}
    />
  )
}

export default AgreeItem
