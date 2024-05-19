import React, { ReactNode } from 'react'
import { StyleProp, TextStyle } from 'react-native'

export interface ListPropsType {
  renderHeader?: (() => React.ReactType) | string | React.ReactElement
  renderFooter?: (() => React.ReactType) | string | React.ReactElement
  children?: false | React.ReactElement | React.ReactElement[]
}

export interface ListItemPropsType {
  align?: 'top' | 'middle' | 'bottom'
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | ''
  children?: ReactNode
  extra?: ReactNode
  multipleLine?: boolean
  thumb?: ReactNode | null
  wrap?: boolean
}

export interface BriefProps {
  children?: ReactNode
  wrap?: boolean
  style?: StyleProp<TextStyle>
}
