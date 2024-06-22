import React, { ClassAttributes, ReactElement, memo, useCallback } from 'react'
import { findNodeHandle } from 'react-native'

export default memo(
  (props: {
    children: ReactElement & ClassAttributes<ReactElement>
    setReference: any
    onLayout: () => void
    onBlur: () => void
    trigger: string
    onTrigger: () => void
  }) => {
    const childElement = React.Children.only(props.children)

    // ref
    const ref = useCallback(
      (el) => {
        if (typeof childElement.ref === 'function') {
          childElement.ref(el)
        }
        props.setReference?.(findNodeHandle(el))
      },
      [childElement, props],
    )
    // onLayout to get measure
    const onLayout = useCallback(
      (e) => {
        if (typeof childElement.props.onLayout === 'function') {
          childElement.props.onLayout(e)
        }
        props.onLayout()
      },
      [childElement.props, props],
    )
    // onBlur to close popover
    const onBlur = useCallback(
      (e) => {
        if (typeof childElement.props.onBlur === 'function') {
          childElement.props.onBlur(e)
        }
        props.onBlur()
      },
      [childElement.props, props],
    )

    // trigger event
    const onTrigger = useCallback(
      (e) => {
        if (typeof childElement.props[props.trigger] === 'function') {
          childElement.props[props.trigger](e)
        }
        props.onTrigger()
      },
      [childElement.props, props],
    )

    return React.cloneElement(childElement, {
      ref,
      onLayout,
      onBlur,
      [props.trigger]: onTrigger,
    })
  },
)
