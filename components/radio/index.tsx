import InternalRadio from './Radio'
import Group from './RadioGroup'
import RadioItem from './RadioItem'

const Radio = InternalRadio as typeof InternalRadio & {
  RadioItem: typeof RadioItem
  Group: typeof Group
}

Radio.RadioItem = RadioItem
Radio.Group = Group

export default Radio
