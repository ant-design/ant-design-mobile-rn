import AgreeItem from './AgreeItem'
import InternalCheckbox from './Checkbox'
import CheckboxItem from './CheckboxItem'

const Checkbox = InternalCheckbox as typeof InternalCheckbox & {
  CheckboxItem: typeof CheckboxItem
  AgreeItem: typeof AgreeItem
}

Checkbox.CheckboxItem = CheckboxItem
Checkbox.AgreeItem = AgreeItem

export default Checkbox
