import * as React from 'react'

import Brief from '../list/Brief'
import { ThemeContext } from '../style'
import type { ValidateStatus } from './FormItem'
import FormItemStyle, { ValidateStatusStyle } from './style'

const EMPTY_LIST: React.ReactNode[] = []

interface ErrorEntity {
  error: React.ReactNode
  errorStatus?: ValidateStatus
  key: string
}

function toErrorEntity(
  error: React.ReactNode,
  prefix: string,
  errorStatus?: ValidateStatus,
  index: number = 0,
): ErrorEntity {
  return {
    key: typeof error === 'string' ? error : `${prefix}-${index}`,
    error,
    errorStatus,
  }
}

export interface ErrorListProps {
  styles?: Partial<ValidateStatusStyle>
  help?: React.ReactNode
  helpStatus?: ValidateStatus
  errors?: React.ReactNode[]
  warnings?: React.ReactNode[]
  onVisibleChanged?: (visible: boolean) => void
}

const ErrorList: React.FC<ErrorListProps> = ({
  styles,
  help,
  helpStatus,
  errors = EMPTY_LIST,
  warnings = EMPTY_LIST,
}) => {
  const fullKeyList = React.useMemo<ErrorEntity[]>(() => {
    if (help !== undefined && help !== null) {
      return [toErrorEntity(help, 'help', helpStatus)]
    }

    return [
      ...errors.map((error, index) =>
        toErrorEntity(error, 'error', 'error', index),
      ),
      ...warnings.map((warning, index) =>
        toErrorEntity(warning, 'warning', 'warning', index),
      ),
    ]
  }, [help, helpStatus, errors, warnings])

  // styles
  const theme = React.useContext(ThemeContext)
  const defaultStyles = React.useMemo(() => FormItemStyle(theme), [theme])

  return (
    <>
      {fullKeyList.map(({ key, error, errorStatus }) => (
        <Brief
          key={key}
          style={[
            errorStatus
              ? [defaultStyles[errorStatus], styles?.[errorStatus]]
              : undefined,
          ]}>
          {error}
        </Brief>
      ))}
    </>
  )
}

export default ErrorList
