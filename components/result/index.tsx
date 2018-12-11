
import React from 'react';
import { Image, ImageURISource, StyleProp, Text, View, ViewStyle } from 'react-native';
import Button from '../button/index';
import { WithTheme, WithThemeStyles } from '../style';
import { ResultPropsType } from './PropsType';
import ResultStyles, { ResultStyle } from './style/index';

export interface ResultNativeProps
  extends ResultPropsType,
    WithThemeStyles<ResultStyle> {
  style?: StyleProp<ViewStyle>;
}

export default class Result extends React.Component<ResultNativeProps, any> {
  static defaultProps = {
    buttonType: '',
  };

  render() {
    const {
      style,
      img,
      imgUrl,
      title,
      message,
      buttonText,
      onButtonClick,
      buttonType,
    } = this.props;
    return (
      <WithTheme styles={this.props.styles} themeStyles={ResultStyles}>
        {styles => {
          let imgContent: JSX.Element | null = null;
          if (img) {
            imgContent = <View style={styles.imgWrap}>{img}</View>;
          } else if (imgUrl) {
            imgContent = (
              <View style={styles.imgWrap}>
                <Image
                  source={imgUrl as ImageURISource | ImageURISource[]}
                  style={styles.img}
                />
              </View>
            );
          }

          return (
            <View style={[styles.result, style]}>
              {imgContent}
              {title ? (
                <View style={styles.title}>
                  {typeof title === 'string' ? (
                    <Text style={styles.titleText}>{title}</Text>
                  ) : (
                    title
                  )}
                </View>
              ) : null}
              {message ? (
                <View style={styles.message}>
                  {typeof message === 'string' ? (
                    <Text style={styles.messageText}>{message}</Text>
                  ) : (
                    message
                  )}
                </View>
              ) : null}
              {buttonText ? (
                <View style={styles.buttonWrap}>
                  <Button
                    style={styles.button}
                    type={buttonType}
                    onPress={onButtonClick}
                  >
                    {buttonText}
                  </Button>
                </View>
              ) : null}
            </View>
          );
        }}
      </WithTheme>
    );
  }
}
