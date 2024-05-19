import Brief from './Brief'
import InternalList from './List'
import InternalItem from './ListItem'

const Item = InternalItem as typeof InternalItem & { Brief: typeof Brief }
const List = InternalList as typeof InternalList & { Item: typeof Item }

List.Item = Item
Item.Brief = Brief

export default List
