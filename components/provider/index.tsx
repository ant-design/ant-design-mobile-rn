import * as React from 'react';
import Portal from '../portal/portal';
import { LocaleProvider, LocaleValue } from '../locale-provider';
import { ThemeProvider, Theme } from '../style';
export interface ProviderProps {
  locale?: LocaleValue;
  theme?: Theme;
}
export default class Provider extends React.Component<ProviderProps> {
  render() {
    return (
      <LocaleProvider value={this.props.locale}>
        <ThemeProvider value={this.props.theme}>
          <Portal.Host>{this.props.children}</Portal.Host>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}
