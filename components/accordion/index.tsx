// tslint:disable:jsx-no-multiline-js
import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import RNAccordion, { AccordionProps } from 'react-native-collapsible/Accordion';
import Icon from '../icon';
import { WithTheme, WithThemeStyles } from '../style';
import AccordionStyles, { AccordionStyle } from './style/index';

export interface AccordionPanelProps {
  key?: string;
  header: any;
}

export interface AccordionNativeProps<T>
  extends WithThemeStyles<AccordionStyle>,
    Partial<AccordionProps<T>> {
  style?: StyleProp<ViewStyle>;
}
export interface AccordionHeader {
  title: string;
  content: React.ReactElement<any>;
  style: StyleProp<ViewStyle>;
}
class AccordionPanel extends React.Component<AccordionPanelProps, any> {
  render() {
    return null;
  }
}

class Accordion<T extends AccordionHeader> extends React.Component<
  AccordionNativeProps<T>,
  any
> {
  static Panel: any;

  renderHeader = (styles: ReturnType<typeof AccordionStyles>) => (
    section: T,
    _: number,
    isActive: boolean,
  ) => {
    return (
      <View style={[styles.header, section.style]}>
        {React.isValidElement(section.title) ? (
          section.title
        ) : (
          <View style={styles.headerWrap}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        <View style={styles.arrow}>
          <Icon name={isActive ? 'up' : 'down'} style={styles.arrow} />
        </View>
      </View>
    );
  };

  renderContent = (styles: ReturnType<typeof AccordionStyles>) => (
    section: T,
  ) => {
    return React.isValidElement(section.content) ? (
      section.content
    ) : (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  render() {
    const { children, style, activeSections = [], ...rest } = this.props;
    const styles = this.props.styles!;

    const headers: AccordionHeader[] = React.Children.map(
      children,
      (child: any) => {
        return {
          title: child.props.header,
          content: child.props.children,
          style: child.props.style || {},
        };
      },
    );

    return (
      <WithTheme themeStyles={AccordionStyles} styles={styles}>
        {s => (
          <View style={[s.container, style]}>
            <RNAccordion
              underlayColor="transparent"
              renderHeader={this.renderHeader(s)}
              renderContent={this.renderContent(s)}
              duration={0}
              sections={headers}
              activeSections={activeSections}
              {...rest as AccordionProps<T>}
            />
          </View>
        )}
      </WithTheme>
    );
  }
}

Accordion.Panel = AccordionPanel;

export default Accordion;
