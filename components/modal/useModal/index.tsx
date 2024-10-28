import React, { useCallback } from 'react'
import { Modal, View } from 'react-native'
import AlertContainer from '../AlertContainer'
import OperationContainer from '../OperationContainer'
import PropmptContainer from '../PromptContainer'
import alert from '../alert'
import operation from '../operation'
import prompt from '../prompt'

const StaticMethod = { alert, prompt, operation }
export type HookAPI = typeof StaticMethod & { remove: (key: number) => void }

let nextKey = 200000

function useModal(): readonly [
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

  const ElementsHolder = React.useMemo(
    () =>
      actionQueue.length ? (
        <Modal transparent>
          <View style={{ flex: 1, position: 'relative' }}>
            {actionQueue.map((a) => a.el)}
          </View>
        </Modal>
      ) : undefined,
    [actionQueue],
  )

  // =========================== Hook ===========================
  const fns = React.useMemo<HookAPI>(
    () => ({
      alert: (...args: Parameters<typeof alert>) => {
        const [title, content, actions = [{ text: '确定' }], onBackHandler] =
          args

        const key = nextKey++
        setActionQueue((prev) => [
          ...prev,
          {
            key,
            el: (
              <AlertContainer
                key={key}
                title={title}
                content={content}
                actions={actions}
                onAnimationEnd={(visible: boolean) => {
                  if (!visible) {
                    remove(key)
                  }
                }}
                onBackHandler={onBackHandler}
                modalType="view"
              />
            ),
          },
        ])
        return key
      },
      prompt: (...args: Parameters<typeof prompt>) => {
        const [
          title,
          message,
          callbackOrActions,
          type = 'default',
          defaultValue = '',
          placeholders = ['', ''],
          onBackHandler,
        ] = args

        if (!callbackOrActions) {
          console.error('Must specify callbackOrActions')
          return
        }

        const key = nextKey++
        setActionQueue((prev) => [
          ...prev,
          {
            key,
            el: (
              <PropmptContainer
                key={key}
                title={title}
                message={message}
                actions={callbackOrActions}
                type={type as any}
                defaultValue={defaultValue}
                onAnimationEnd={(visible: boolean) => {
                  if (!visible) {
                    remove(key)
                  }
                }}
                placeholders={placeholders}
                onBackHandler={onBackHandler}
                modalType="view"
              />
            ),
          },
        ])
        return key
      },
      operation: (...args: Parameters<typeof operation>) => {
        const [actions, onBackHandler] = args

        const key = nextKey++
        setActionQueue((prev) => [
          ...prev,
          {
            key,
            el: (
              <OperationContainer
                key={key}
                actions={actions.length > 0 ? actions : [{ text: '确定' }]}
                onAnimationEnd={(visible: boolean) => {
                  if (!visible) {
                    remove(key)
                  }
                }}
                onBackHandler={onBackHandler}
                modalType="view"
              />
            ),
          },
        ])
        return key
      },
      remove,
    }),
    [remove],
  )

  return [fns, ElementsHolder] as const
}

export default useModal
