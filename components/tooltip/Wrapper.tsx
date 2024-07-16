import React, { ClassAttributes, ReactElement, memo, useCallback } from 'react'

export default memo(
  (props: {
    children: ReactElement & ClassAttributes<ReactElement>
    setReference: (el: any) => void
    onLayout: () => void
    trigger: string
    onTrigger: (e: any) => void
  }) => {
    const childElement = React.Children.only(props.children)

    // onLayout to get ref target
    const onLayout = useCallback(
      (e) => {
        if (typeof childElement.props.onLayout === 'function') {
          childElement.props.onLayout(e)
        }
        props.setReference?.(e.target || e.nativeEvent.target)
        props.onLayout()
      },
      [childElement.props, props],
    )

    // trigger event
    const onTrigger = useCallback(
      (e) => {
        if (typeof childElement.props[props.trigger] === 'function') {
          childElement.props[props.trigger](e)
        }
        props.onTrigger(e)
      },
      [childElement.props, props],
    )

    return React.cloneElement(childElement, {
      onLayout,
      [props.trigger]: onTrigger,
    })
  },
)
