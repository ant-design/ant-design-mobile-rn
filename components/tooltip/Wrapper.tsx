import { composeRef } from 'rc-util/lib/ref'
import React, { ClassAttributes, ReactElement, Ref, memo, useCallback } from 'react'
import { LayoutChangeEvent, View } from 'react-native'

type ChildElement = ReactElement & {
  props: {
    onLayout?: (e: LayoutChangeEvent) => void
    [key: string]: unknown
  }
  ref?: React.Ref<View>
}

export default memo(
  (props: {
    children: ReactElement & ClassAttributes<ReactElement>
    setReference: (el: View | null) => void
    onLayout: () => void
    trigger: string
    onTrigger: (e: unknown) => void
  }) => {
    const { setReference, onLayout: onLayoutUpdate, onTrigger, trigger } =
      props
    const childElement = React.Children.only(props.children) as ChildElement

    const onLayout = useCallback(
      (e: LayoutChangeEvent) => {
        if (typeof childElement.props.onLayout === 'function') {
          childElement.props.onLayout(e)
        }
        onLayoutUpdate()
      },
      [childElement.props, onLayoutUpdate],
    )

    const handleTrigger = useCallback(
      (e: unknown) => {
        const triggerHandler = childElement.props[trigger]
        if (typeof triggerHandler === 'function') {
          triggerHandler(e)
        }
        onTrigger(e)
      },
      [childElement.props, onTrigger, trigger],
    )

    const ref = useCallback(
      (node: View | null) => {
        setReference(node)
      },
      [setReference],
    )

    return React.cloneElement(childElement, {
      ref: composeRef(childElement.ref as Ref<View>, ref),
      onLayout,
      [trigger]: handleTrigger,
    })
  },
)
