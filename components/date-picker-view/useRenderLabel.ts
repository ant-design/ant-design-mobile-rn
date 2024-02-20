import { useCallback } from 'react'
import { RenderLabel } from './PropsType'

export default function useRenderLabel(
  renderLabel?: RenderLabel,
  locale?: any,
): RenderLabel {
  return useCallback(
    (type, data) => {
      if (renderLabel) {
        return renderLabel(type, data)
      }

      // Default render
      switch (type) {
        case 'year':
        case 'month':
        case 'day':
          return data.toString() + (locale?.[type] || '')
        case 'minute':
        case 'second':
        case 'hour':
          return ('0' + data.toString()).slice(-2) + (locale?.[type] || '')
        case 'now':
          return locale.tillNow
        default:
          return data.toString()
      }
    },
    [locale, renderLabel],
  )
}
