import React from 'react'
import { TextProps } from 'react-native'
import AntmView from '../view'

export interface AntmTextProps extends TextProps {
  children?: React.ReactNode
}
const InternalText = (props: AntmTextProps, ref: any) => {
  return <AntmView {...props} ref={ref} />
}

const AntmText = React.forwardRef(InternalText)
AntmText.displayName = 'AntmText'

export default AntmText
