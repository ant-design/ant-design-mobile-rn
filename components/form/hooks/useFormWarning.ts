import { useEffect } from 'react'

import devWarning from '../../_util/devWarning'
import type { FormProps } from '../Form'

const names: Record<string, number> = {}

export default function useFormWarning({ name }: FormProps) {
  useEffect(() => {
    if (name) {
      names[name] = (names[name] || 0) + 1

      devWarning(
        names[name] <= 1,
        'Form',
        'There exist multiple Form with same `name`.',
      )

      return () => {
        names[name] -= 1
      }
    }
  }, [name])
}
