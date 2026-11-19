import React from 'react'
import DrawerLayout, {
  DrawerKeyboardDismissMode,
  DrawerLayoutMethods,
  DrawerLayoutProps,
  DrawerPosition,
} from 'react-native-gesture-handler/ReanimatedDrawerLayout'
import { DrawerProps } from './PropsType'

export interface DrawerNativeProps
  extends Partial<DrawerLayoutProps>,
    DrawerProps {
  drawerRef?: (el: DrawerLayoutMethods | null) => void
  drawerWidth?: number
  drawerBackgroundColor?: string
  children?: React.ReactNode
}

export default class Drawer extends React.Component<DrawerNativeProps, any> {
  static defaultProps = {
    position: 'left',
    open: false,
    drawerWidth: 300,
  }

  drawer: DrawerLayoutMethods | null = null

  componentDidMount() {
    if (this.props.open && this.drawer) {
      this.drawer.openDrawer()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: DrawerNativeProps) {
    if (nextProps.open !== this.props.open && this.drawer) {
      this.drawer[nextProps.open ? 'openDrawer' : 'closeDrawer']()
    }
  }

  onOpenChange(isOpen: boolean) {
    if (this.props.onOpenChange) {
      this.props.onOpenChange(isOpen)
    }
  }

  render() {
    const {
      sidebar,
      position,
      drawerRef,
      drawerWidth = 300,
      ...restProps
    } = this.props
    ;[
      'onOpenChange',
      'onDrawerOpen',
      'onDrawerClose',
      'drawerPosition',
      'renderNavigationView',
      'keyboardDismissMode',
    ].forEach((prop) => {
      if (restProps.hasOwnProperty(prop)) {
        delete (restProps as any)[prop]
      }
    })

    const drawerPosition =
      position === 'right' ? DrawerPosition.RIGHT : DrawerPosition.LEFT

    return (
      <DrawerLayout
        ref={(el) => {
          if (drawerRef) {
            drawerRef(el)
          }
          this.drawer = el
        }}
        renderNavigationView={() => sidebar}
        drawerPosition={drawerPosition}
        onDrawerOpen={() => this.onOpenChange(true)}
        onDrawerClose={() => this.onOpenChange(false)}
        keyboardDismissMode={DrawerKeyboardDismissMode.ON_DRAG}
        drawerWidth={drawerWidth}
        {...restProps}
      />
    )
  }
}
