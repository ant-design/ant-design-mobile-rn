import * as React from 'react'
import { Platform } from 'react-native'
import LocaleProvider, { Locale } from '../locale-provider'
import Portal from '../portal'
import { PortalContext } from '../portal/portal-host'
import { Theme, ThemeProvider } from '../style'
import { AccessibilityContextProvider } from './AccessibilityContext'
import HapticsContext, {
  HapticsContextProvider,
  HapticsFunc,
} from './HapticsContext'
export interface ProviderProps {
  locale?: Partial<Locale>
  theme?: Partial<Theme>
  onHaptics?: HapticsFunc
  isRTL?: boolean
  children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = (props) => {
  const { children, locale, theme, onHaptics, isRTL } = props

  let childNode = <>{children}</>

  const portalContext = React.useContext(PortalContext)
  if (!portalContext) {
    childNode = <Portal.Host>{children}</Portal.Host>
  }

  const hapticsContext = React.useContext(HapticsContext)
  if (
    !hapticsContext &&
    typeof onHaptics === 'function' &&
    Platform.OS !== 'web'
  ) {
    childNode = (
      <HapticsContextProvider onHaptics={onHaptics}>
        {childNode}
      </HapticsContextProvider>
    )
  }

  if (typeof isRTL === 'boolean') {
    childNode = (
      <AccessibilityContextProvider isRTL={isRTL}>
        {childNode}
      </AccessibilityContextProvider>
    )
  }

  return (
    <LocaleProvider locale={locale}>
      <ThemeProvider value={theme}>{childNode}</ThemeProvider>
    </LocaleProvider>
  )
}

Provider.displayName = 'ConfigProvider'

export default Provider
