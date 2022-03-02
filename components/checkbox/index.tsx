import * as React from 'react'
import AgreeItem from './AgreeItem'
import InternalCheckbox, { CheckboxProps } from './Checkbox'
import CheckboxItem from './CheckboxItem'

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<CheckboxProps> {
  AgreeItem: typeof AgreeItem
  CheckboxItem: typeof CheckboxItem
  __ANTM_CHECKBOX: boolean
}

const Checkbox = InternalCheckbox as CompoundedComponent

Checkbox.AgreeItem = AgreeItem
Checkbox.CheckboxItem = CheckboxItem
Checkbox.__ANTM_CHECKBOX = true

export default Checkbox
