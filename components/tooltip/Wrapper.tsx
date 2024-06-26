import React, { ClassAttributes, ReactElement, memo, useCallback } from 'react'
import { Platform, findNodeHandle } from 'react-native'

export default memo(
  (props: {
    children: ReactElement & ClassAttributes<ReactElement>
    setReference: (el: any) => void
    onLayout: (e: any) => void
    trigger: string
    onTrigger: () => void
  }) => {
    const childElement = React.Children.only(props.children)

    // ref for web
    const ref = useCallback(
      (el) => {
        if (typeof childElement.ref === 'function') {
          childElement.ref(el)
        }
        props.setReference?.(findNodeHandle(el))
      },
      [childElement, props],
    )
    // onLayout to get ref target for not web
    const onLayout = useCallback(
      (e) => {
        if (typeof childElement.props.onLayout === 'function') {
          childElement.props.onLayout(e)
        }
        props.setReference?.(e.target)
        props.onLayout?.(e)
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
      ...(Platform.OS === 'web' ? { ref } : { onLayout }),
      [props.trigger]: onTrigger,
    })
  },
)
