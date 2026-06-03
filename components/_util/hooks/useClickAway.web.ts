import { useCallback, useEffect, useRef } from 'react'

let _propagationStopped: boolean | undefined

export const CustomSyntheticEvent = {
  stopPropagation() {
    _propagationStopped = true
  },
  preventDefault() {
    _propagationStopped = undefined
  },
  isPropagationStopped() {
    return _propagationStopped
  },
  emit() {},
}

function isClickFromDisabledPressable(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) {
    return false
  }
  return target.closest('[aria-disabled="true"]') != null
}

export default function useClickAway(onClickAway: () => void) {
  const isDragging = useRef(false)
  const shouldRespond = useRef(true)
  const listener = useCallback(
    (event: MouseEvent) => {
      if (CustomSyntheticEvent.isPropagationStopped()) {
        CustomSyntheticEvent.preventDefault()
        return
      }
      if (isClickFromDisabledPressable(event)) {
        return
      }
      if (shouldRespond.current) {
        onClickAway()
      } else {
        shouldRespond.current = true
      }
    },
    [onClickAway],
  )

  const onMousedown = () => {
    isDragging.current = true
  }

  const onMousemove = () => {
    if (isDragging.current && shouldRespond.current) {
      shouldRespond.current = false
    }
  }

  const onMouseup = () => {
    isDragging.current = false
  }

  useEffect(() => {
    document.addEventListener('mousedown', onMousedown)
    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseup)
    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('mousedown', onMousedown)
      document.removeEventListener('mousemove', onMousemove)
      document.removeEventListener('mouseup', onMouseup)
      document.removeEventListener('click', listener)
    }
  }, [listener])

  return [CustomSyntheticEvent]
}
