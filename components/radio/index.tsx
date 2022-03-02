import * as React from 'react'
import InternalRadio, { RadioProps } from './Radio'
import RadioGroup from './RadioGroup'
import RadioItem from './RadioItem'

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<RadioProps> {
  RadioItem: typeof RadioItem
  Group: typeof RadioGroup
  __ANTM_CHECKBOX: boolean
}

const Radio = InternalRadio as CompoundedComponent
Radio.RadioItem = RadioItem
Radio.Group = RadioGroup

Radio.__ANTM_CHECKBOX = true

export default Radio
