import * as React from 'react'

export type HapticsFunc = (
  componentName: 'picker' | 'stepper' | 'slider' | 'switch',
) => void

interface HapticsContextProps {
  onHaptics?: HapticsFunc
  children?: React.ReactNode
}

const HapticsContext = React.createContext<HapticsFunc | undefined>(undefined)

export const HapticsContextProvider: React.FC<HapticsContextProps> = ({
  children,
  onHaptics,
}) => {
  return (
    <HapticsContext.Provider value={onHaptics}>
      {children}
    </HapticsContext.Provider>
  )
}

export default HapticsContext
