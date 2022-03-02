import React from 'react'
import Checkbox, { CheckboxProps } from './Checkbox'

const AgreeItem = (props: CheckboxProps) => {
  return (
    <Checkbox
      {...props}
      styles={{
        checkbox_checked: { borderColor: 'red' },
        checkbox_inner: { backgroundColor: 'red' },
      }}
    />
  )
}

export default AgreeItem
