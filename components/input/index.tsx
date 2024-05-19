import InternalInput from './Input'
import Item from './Item'
import TextArea from './TextArea/index'

type InternalInputType = typeof InternalInput

type CompoundedComponent = InternalInputType & {
  TextArea: typeof TextArea
  Item: typeof Item
}

const Input = InternalInput as CompoundedComponent

Input.TextArea = TextArea
Input.Item = Item

export default Input
