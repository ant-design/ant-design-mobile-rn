import type { Meta } from 'rc-field-form/lib/interface'
import * as React from 'react'
import { ActivityIndicator } from 'react-native'
import Icon from '../../icon'
import View from '../../view'

import type { FeedbackIcons, ValidateStatus } from '.'
import type { FormItemStatusContextProps } from '../context'
import { FormContext, FormItemInputContext } from '../context'
import { ValidateStatusStyle } from '../style'
import { getStatus } from '../util'

export interface StatusProviderProps {
  children?: React.ReactNode
  validateStatus?: ValidateStatus
  meta: Meta
  errors: React.ReactNode[]
  warnings: React.ReactNode[]
  hasFeedback?: boolean | { icons?: FeedbackIcons }
  noStyle?: boolean
  styles?: Partial<ValidateStatusStyle>
}

export default function StatusProvider({
  children,
  errors,
  warnings,
  hasFeedback,
  validateStatus,
  meta,
  noStyle,
  styles,
}: StatusProviderProps) {
  const { feedbackIcons } = React.useContext(FormContext)

  const iconMap = React.useMemo(
    () => ({
      success: <Icon name="check-circle" style={styles?.success} />,
      warning: <Icon name="exclamation-circle" style={styles?.warning} />,
      error: <Icon name="close-circle" style={styles?.error} />,
      validating: (
        <ActivityIndicator animating size="small" style={styles?.validating} />
      ),
    }),
    [styles?.error, styles?.success, styles?.validating, styles?.warning],
  )

  const mergedValidateStatus = getStatus(
    errors,
    warnings,
    meta,
    null,
    !!hasFeedback,
    validateStatus,
  )

  const {
    isFormItemInput: parentIsFormItemInput,
    status: parentStatus,
    hasFeedback: parentHasFeedback,
    feedbackIcon: parentFeedbackIcon,
  } = React.useContext(FormItemInputContext)

  // ====================== Context =======================
  const formItemStatusContext =
    React.useMemo<FormItemStatusContextProps>(() => {
      let feedbackIcon: React.ReactNode
      if (hasFeedback) {
        const customIcons =
          (hasFeedback !== true && hasFeedback.icons) || feedbackIcons
        const customIconNode =
          mergedValidateStatus &&
          customIcons?.({ status: mergedValidateStatus, errors, warnings })?.[
            mergedValidateStatus
          ]
        const IconNode = (mergedValidateStatus &&
          iconMap[mergedValidateStatus]) as any
        feedbackIcon =
          customIconNode !== false && IconNode ? (
            <View style={styles?.feedbackIcon}>
              {customIconNode || IconNode}
            </View>
          ) : null
      }

      const context: FormItemStatusContextProps = {
        status: mergedValidateStatus || '',
        errors,
        warnings,
        hasFeedback: !!hasFeedback,
        feedbackIcon,
        isFormItemInput: true,
      }

      // No style will follow parent context
      if (noStyle) {
        context.status = (mergedValidateStatus ?? parentStatus) || ''
        context.isFormItemInput = parentIsFormItemInput
        context.hasFeedback = !!(hasFeedback ?? parentHasFeedback)
        context.feedbackIcon =
          hasFeedback !== undefined ? context.feedbackIcon : parentFeedbackIcon
      }

      return context
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      mergedValidateStatus,
      hasFeedback,
      noStyle,
      parentIsFormItemInput,
      parentStatus,
      styles?.feedbackIcon,
    ])

  // ======================= Render =======================
  return (
    <FormItemInputContext.Provider value={formItemStatusContext}>
      {children}
    </FormItemInputContext.Provider>
  )
}
