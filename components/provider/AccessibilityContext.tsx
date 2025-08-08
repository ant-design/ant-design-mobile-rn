import * as React from 'react'
import { I18nManager } from 'react-native'

export type IsRTL = boolean | undefined

const AccessibilityContext = React.createContext<IsRTL>(I18nManager.isRTL)

export interface AccessibilityContextProps {
  isRTL?: IsRTL
  children?: React.ReactNode
}

export const AccessibilityContextProvider: React.FC<AccessibilityContextProps> =
  ({ children, isRTL }) => {
    const originValue = React.useContext(AccessibilityContext)
    return (
      <AccessibilityContext.Provider value={isRTL ?? originValue}>
        {children}
      </AccessibilityContext.Provider>
    )
  }

export default AccessibilityContext
