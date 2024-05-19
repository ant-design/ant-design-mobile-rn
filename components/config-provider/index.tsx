import React from 'react'

export interface ConfigConsumerProps {}

export const ConfigContext = React.createContext<ConfigConsumerProps>({})

export const { Consumer: ConfigConsumer } = ConfigContext
