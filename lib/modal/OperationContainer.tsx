import React from 'react';
import { BackHandler, TextStyle } from 'react-native';
import { WithTheme } from '../style';
import Modal from './Modal';
import { Action, CallbackOnBackHandler } from './PropsType';
import modalStyle from './style/index';

export interface OperationContainerProps {
  actions: Action<TextStyle>[];
  onAnimationEnd?: (visible: boolean) => void;
  onBackHandler?: CallbackOnBackHandler;
}

export default class OperationContainer extends React.Component<
  OperationContainerProps,
  any
  > {
  constructor(props: OperationContainerProps) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
    const { onBackHandler } = this.props;
    if (typeof onBackHandler === 'function') {
      const flag = onBackHandler();
      if(flag){
        this.onClose();
      }
      return true;
    } else if (this.state.visible) {
      this.onClose();
      return true;
    }
    return false;
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { actions, onAnimationEnd } = this.props;
    const footer = actions.map(button => {
      // tslint:disable-next-line:only-arrow-functions
      const orginPress = button.onPress || function () { };
      button.onPress = () => {
        const res = orginPress();
        if (res && (res as any).then) {
          (res as any).then(() => {
            this.onClose();
          });
        } else {
          this.onClose();
        }
      };
      return button;
    });
    return (
      <WithTheme themeStyles={modalStyle}>
        {styles => (
          <Modal
            operation
            transparent
            maskClosable
            visible={this.state.visible}
            onClose={this.onClose}
            onAnimationEnd={onAnimationEnd}
            style={styles.operationContainer}
            bodyStyle={styles.operationBody}
            footer={footer}
          />
        )}
      </WithTheme>
    );
  }
}
