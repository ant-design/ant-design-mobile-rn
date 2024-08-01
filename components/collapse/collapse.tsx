import useMergedState from 'rc-util/lib/hooks/useMergedState'
import type { FC, ReactElement, ReactNode } from 'react'
import React, { isValidElement } from 'react'
import { GestureResponderEvent, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { traverseReactNode } from '../_util/traverse-react-node'
import Icon from '../icon'
import List from '../list'
import { CollapsePanelContent } from './CollapsePanelContent'
import { CollapsePanelProps, CollapseProps } from './PropsType'

export const CollapsePanel: FC<CollapsePanelProps> = () => {
  return null
}
export const Collapse: FC<CollapseProps> = (props) => {
  const panels: ReactElement<CollapsePanelProps>[] = []
  traverseReactNode(props.children, (child) => {
    if (!isValidElement<CollapsePanelProps>(child)) {
      return
    }
    const key = child.key
    if (typeof key !== 'string') {
      return
    }

    panels.push(child)
  })

  const handlePropsValue = () => {
    if (!props.accordion) {
      return {
        value: props.activeKey,
        defaultValue: props.defaultActiveKey ?? [],
        onChange: props.onChange,
      }
    }

    const initValue: {
      value?: string[]
      defaultValue: string[]
      onChange: (v: string[]) => void
    } = {
      value: [],
      defaultValue: [],
      onChange: (v) => {
        props.onChange?.(v[0] ?? null)
      },
    }

    if (props.activeKey === undefined) {
      initValue.value = undefined
    } else if (props.activeKey !== null) {
      initValue.value = [props.activeKey]
    }

    if (
      ![null, undefined].includes(props.defaultActiveKey as null | undefined)
    ) {
      initValue.defaultValue = [props.defaultActiveKey as string]
    }

    return initValue
  }

  const [activeKey, setActiveKey] = useMergedState<string[]>(
    [],
    handlePropsValue(),
  )

  const activeKeyList =
    activeKey === null ? [] : Array.isArray(activeKey) ? activeKey : [activeKey]

  return (
    <List styles={props.styles}>
      {panels.map((panel) => {
        const key = panel.key as string
        const active = activeKeyList.includes(key)
        function handleClick(event: GestureResponderEvent) {
          if (props.accordion) {
            if (active) {
              setActiveKey([])
            } else {
              setActiveKey([key])
            }
          } else {
            if (active) {
              setActiveKey(activeKeyList.filter((v) => v !== key))
            } else {
              setActiveKey([...activeKeyList, key])
            }
          }

          panel.props.onPress?.(event)
        }

        const renderArrow = () => {
          let arrow: CollapseProps['arrow'] = <Icon name="down" />
          if (props.arrow !== undefined) {
            arrow = props.arrow
          }
          if (panel.props.arrow !== undefined) {
            arrow = panel.props.arrow
          }
          return typeof arrow === 'function' ? (
            arrow(active)
          ) : (
            <ArrowAnimated active={active}>{arrow}</ArrowAnimated>
          )
        }

        return (
          <React.Fragment key={key}>
            <List.Item
              styles={props.styles}
              onPress={handleClick}
              disabled={panel.props.disabled}
              extra={renderArrow()}>
              {panel.props.title}
            </List.Item>
            <CollapsePanelContent
              visible={active}
              forceRender={!!panel.props.forceRender}
              destroyOnClose={!!panel.props.destroyOnClose}>
              <List.Item
                wrap
                styles={{
                  ...(panel.props.styles || {}),
                  Content: StyleSheet.flatten([
                    styles.Content,
                    panel.props.styles?.Content,
                  ]),
                }}>
                {panel.props.children}
              </List.Item>
            </CollapsePanelContent>
          </React.Fragment>
        )
      })}
    </List>
  )
}

const styles = StyleSheet.create({
  Content: {
    color: '#999999',
    fontSize: 13,
  },
})

export function ArrowAnimated(props: { children: ReactNode; active: boolean }) {
  const rotate = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value * -180}deg` }],
  }))

  React.useEffect(() => {
    if (props.active) {
      rotate.value = withTiming(1)
    } else {
      rotate.value = withTiming(0)
    }
  }, [props.active, rotate])

  return <Animated.View style={animatedStyles}>{props.children}</Animated.View>
}
