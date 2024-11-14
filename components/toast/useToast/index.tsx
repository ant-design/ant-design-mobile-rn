import React, { useCallback, useMemo } from 'react'
import Toast, { ToastShowProps } from '..'
import { defaultConfig } from '../methods'
import ToastContainer from '../ToastContainer'

export type HookAPI = Omit<
  typeof Toast,
  'useToast' | 'SHORT' | 'LONG' | 'defaultConfig' | 'getConfig' | 'config'
>
let nextKey = 300000

function useToast(): readonly [
  instance: HookAPI,
  contextHolder?: React.ReactElement,
] {
  // ========================== Effect ==========================
  const [actionQueue, setActionQueue] = React.useState<
    {
      key: number
      el: React.ReactElement
    }[]
  >([])

  const remove = useCallback((key: number) => {
    setActionQueue((prev) => prev.filter((p) => p.key !== key))
  }, [])
  const removeAll = useCallback(() => {
    setActionQueue([])
  }, [])

  const ElementsHolder = React.useMemo(
    () =>
      actionQueue.length ? <>{actionQueue.map((a) => a.el)}</> : undefined,
    [actionQueue],
  )

  const notice = useCallback(
    (
      content: string | ToastShowProps,
      type: string,
      duration = defaultConfig.duration,
      onClose = defaultConfig.onClose,
      mask = defaultConfig.mask,
    ) => {
      let props = {
        ...defaultConfig,
        content: content as string | React.ReactNode,
        type,
        duration,
        onClose,
        mask,
      }

      if (typeof content !== 'string') {
        props = {
          ...props,
          ...content,
        }
      }

      if (!props.stackable) {
        removeAll()
      }

      const key = nextKey++
      setActionQueue((prev) => [
        ...prev,
        {
          key,
          el: (
            <ToastContainer
              {...props}
              onAnimationEnd={() => {
                remove(key)
              }}
              key={key}
            />
          ),
        },
      ])
      return key
    },
    [remove, removeAll],
  )

  const base = useCallback(
    (type: string) => {
      return (
        props: string | ToastShowProps,
        duration?: number,
        onClose?: () => void,
        mask?: boolean,
      ) => notice(props, type, duration, onClose, mask)
    },
    [notice],
  )

  const show = useCallback(
    (props: string | ToastShowProps, duration?: number, mask?: boolean) => {
      return notice(props, 'info', duration ?? 1.5, () => {}, mask ?? false)
    },
    [notice],
  )

  const methods = useMemo(
    () => ({
      show,
      info: base('info'),
      success: base('success'),
      fail: base('fail'),
      offline: base('offline'),
      loading: base('loading'),
    }),
    [base, show],
  )

  // =========================== Hook ===========================
  const fns = React.useMemo<HookAPI>(
    () => ({
      ...methods,
      remove,
      removeAll,
    }),
    [methods, remove, removeAll],
  )

  return [fns, ElementsHolder] as const
}

export default useToast
