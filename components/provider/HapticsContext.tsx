import * as React from 'react'

export type HapticsFunc = (
  componentName: 'picker' | 'stepper' | 'slider' | 'switch',
) => void

interface HapticsContextProps {
  onHaptics?: HapticsFunc
  children?: React.ReactNode
}

const onHapticsDefault = () => {}
const HapticsContext = React.createContext<HapticsFunc>(onHapticsDefault)

export const HapticsContextProvider: React.FC<HapticsContextProps> = ({
  children,
  onHaptics,
}) => {
  return (
    <HapticsContext.Provider value={onHaptics || onHapticsDefault}>
      {children}
    </HapticsContext.Provider>
  )
}

export default HapticsContext
