import { useCallback, useEffect, useRef } from 'react'

export const CustomSyntheticEvent = {
  stopPropagation: function () {},
  preventDefault: function () {},
  isPropagationStopped() {
    return true
  },
  emit() {},
}

export default function useClickAway(onClickAway: () => void) {
  const isDragging = useRef(false)
  const shouldRespond = useRef(true)
  const listener = useCallback(() => {
    if (shouldRespond.current) {
      onClickAway()
    } else {
      shouldRespond.current = true
    }
  }, [onClickAway])

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
