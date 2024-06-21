export default function Wrapper(props: any) {
  const { children, ...rest } = props
  return children
}
