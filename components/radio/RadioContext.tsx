import * as React from 'react'
import { RadioGroupContextProps } from './PropsType'

const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(
  null,
)

export const RadioGroupContextProvider = RadioGroupContext.Provider

export default RadioGroupContext
