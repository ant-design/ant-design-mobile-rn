import type { Meta } from 'rc-field-form/lib/interface'
import React, { useMemo } from 'react'
import { FormItemProps } from '.'
import { List, View } from '../..'
import { useTheme } from '../../style'
import ErrorList from '../ErrorList'
import FormItemLabel from '../FormItemLabel'
import type { ReportMetaChange } from '../context'
import { FormContext, NoStyleItemContext } from '../context'
import useDebounce from '../hooks/useDebounce'
import FormItemStyle from '../style/index'
import { getStatus } from '../util'
import StatusProvider from './StatusProvider'

export interface ItemHolderProps extends FormItemProps {
  errors: React.ReactNode[]
  warnings: React.ReactNode[]
  meta: Meta
  children?: React.ReactNode
  fieldId?: string
  isRequired?: boolean
  onSubItemMetaChange: ReportMetaChange
}

export default function ItemHolder(props: ItemHolderProps) {
  const {
    style,
    styles,
    fieldId,
    help,
    errors,
    warnings,
    validateStatus,
    meta,
    hasFeedback,
    layout,
    extra,
    wrapperStyle,
    hidden,
    children,
    required,
    isRequired,
    onSubItemMetaChange,
    ...resetListItemProps
  } = props

  const { requiredMark } = React.useContext(FormContext)

  // ======================== Margin ========================
  const debounceErrors = useDebounce(errors)
  const debounceWarnings = useDebounce(warnings)

  // ======================== Status ========================

  const getValidateState = (isDebounce = false) => {
    const _errors = isDebounce ? debounceErrors : meta.errors
    const _warnings = isDebounce ? debounceWarnings : meta.warnings

    return getStatus(
      _errors,
      _warnings,
      meta,
      '',
      !!hasFeedback,
      validateStatus,
    )
  }
  const mergedValidateStatus = getValidateState()

  // ======================== Render ========================
  const { wrapperStyle: contextWrapperStyle, layout: contextLayout } =
    React.useContext(FormContext)

  const mergeLayout = layout || contextLayout
  const mergedWrapperStyle = wrapperStyle || contextWrapperStyle || {}
  const ss = useTheme({ styles, themeStyles: FormItemStyle })
  const itemStyles = useMemo(
    () => ({
      column: mergeLayout === 'horizontal' ? ss.formitemRow : ss.formitemColumn,
      ...styles,
    }),
    [mergeLayout, ss.formitemRow, ss.formitemColumn, styles],
  )

  return (
    <NoStyleItemContext.Provider value={onSubItemMetaChange}>
      <StatusProvider
        styles={ss}
        meta={meta}
        errors={meta.errors}
        warnings={meta.warnings}
        hasFeedback={hasFeedback}
        // Already calculated
        validateStatus={mergedValidateStatus}>
        <List.Item
          {...resetListItemProps}
          styles={itemStyles}
          extra={<View style={ss.formItemExtra}>{extra}</View>}
          style={[style, hidden && { display: 'none' }]}>
          <FormItemLabel
            {...props}
            styles={ss}
            requiredMark={requiredMark}
            required={required ?? isRequired}
          />
          <View
            nativeID={fieldId}
            style={[ss.formItemControl, mergedWrapperStyle]}>
            {children}
            <ErrorList
              errors={debounceErrors}
              warnings={debounceWarnings}
              help={help}
              helpStatus={mergedValidateStatus}
              styles={ss}
            />
          </View>
        </List.Item>
      </StatusProvider>
    </NoStyleItemContext.Provider>
  )
}
