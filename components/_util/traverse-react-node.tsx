import type { ReactNode } from 'react'
import React from 'react'
import { isFragment } from './reactNode'

export function traverseReactNode(
  children: ReactNode,
  fn: (child: ReactNode, index: number) => void,
) {
  let i = 0
  function handle(target: ReactNode) {
    React.Children.forEach(target, (child) => {
      if (!isFragment(child)) {
        fn(child, i)
        i += 1
      } else {
        // @ts-ignore
        handle(child.props.children)
      }
    })
  }
  handle(children)
}
