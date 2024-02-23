import { PickerColumn, PickerValue } from './PropsType'

export function getColumns(
  d: PickerColumn | PickerColumn[],
  val: PickerValue[],
  cols: number,
  cascade: boolean,
): PickerColumn[] {
  if (!d || d.length === 0) {
    return []
  }

  if (!cascade) {
    // when d is PickerColumn
    if (!Array.isArray(d[0])) {
      return [d as PickerColumn]
    }
    // when d is PickerColumn[]
    return (d as PickerColumn[]).slice(0, cols!)
  }

  // cascade data
  const columns = []
  let currentOptions = (d as PickerColumn).slice()
  let selected = val || []
  let i = 0
  while (i < cols!) {
    columns.push(
      currentOptions.map((option: any) => ({
        label: option.label,
        value: option.value,
      })),
    )
    const x = selected[i]
    const targetOptions =
      currentOptions.find((option: any) => option.value === x) ||
      currentOptions[0]
    if (!targetOptions.children) {
      break
    }
    currentOptions = targetOptions.children
    i++
  }
  return columns
}

export function getValueExtend(
  d: PickerColumn | PickerColumn[],
  val: PickerValue[],
  cols: number,
  cascade: boolean,
) {
  if (!d || d.length === 0) {
    return { nextValue: [], extend: [] }
  }

  if (!cascade) {
    const columns = getColumns(d, val, cols, false).map(
      (column: PickerColumn, index: number) =>
        column.find((item) => item.value === val[index]) ?? column[0],
    )

    return { nextValue: columns.map((item) => item.value), extend: columns }
  }

  // cascade data
  let currentOptions = (d as PickerColumn).slice()
  const nextValue = []
  const extend = []
  let selected = val || []
  let i = 0
  while (i < cols!) {
    const x = selected[i]
    const targetOptions =
      currentOptions.find((option: any) => option.value === x) ||
      currentOptions[0]
    nextValue[i] = targetOptions.value
    extend[i] = targetOptions
    if (!targetOptions.children) {
      break
    }
    currentOptions = targetOptions.children
    i++
  }
  return { nextValue, extend }
}
