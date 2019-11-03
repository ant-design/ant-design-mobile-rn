import React from 'react';
import { StyleProp, Text, TextInput, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import StepperStyles from './style';

function noop() {}

function defaultParser(input: string) {
  return input.replace(/[^\w\.-]+/g, '');
}

/**
 * When click and hold on a button - the speed of auto changin the value.
 */
const SPEED = 200;

/**
 * When click and hold on a button - the delay before auto changin the value.
 */
const DELAY = 600;

/**
 * Max Safe Integer -- on IE this is not available, so manually set the number in that case.
 * The reason this is used, instead of Infinity is because numbers above the MSI are unstable
 */
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

export interface InputNumberProps {
  style?: StyleProp<ViewStyle>;
  onChange?: (e: any) => void;
  readOnly?: boolean;
  disabled?: boolean;
  onFocus?: (e?: any) => void;
  onBlur?: (e: any, ...rest: any[]) => void;
  max?: number;
  min?: number;
  step?: string | number;
  parser?: (v: any) => void;
  precision?: number;
  value?: number;
  defaultValue?: number;
  autoFocus?: boolean;
  styles: ReturnType<typeof StepperStyles>;
  upStyle?: StyleProp<ViewStyle>;
  downStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  keyboardType?: any;
}
export interface InputNumberState {
  value: number;
  inputValue?: number;
  focused?: boolean;
}

export default class InputNumber<
  P extends InputNumberProps = InputNumberProps,
  S extends InputNumberState = InputNumberState
> extends React.Component<P, S> {
  static defaultProps = {
    max: MAX_SAFE_INTEGER,
    min: -MAX_SAFE_INTEGER,
    step: 1,
    style: {},
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    parser: defaultParser,
  };

  autoStepTimer: any;
  _stepDown: any;
  _stepDownText: any;
  _stepUp: any;
  _stepUpText: any;

  constructor(props: P) {
    super(props as P);

    let value;
    if ('value' in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    value = this.toNumber(value);
    this.state = {
      inputValue: this.toPrecisionAsStep(value),
      value,
      focused: props.autoFocus,
    } as S;
  }

  componentWillReceiveProps(nextProps: P) {
    if ('value' in nextProps) {
      const value = this.state.focused
        ? nextProps.value
        : this.getValidValue(nextProps.value);
      this.setState({
        value,
        inputValue: value,
      });
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  onChange = (e: any) => {
    const { parser, onChange } = this.props;
    const input = parser && parser(this.getValueFromEvent(e).trim());
    this.setState({ inputValue: input } as S);
    // tslint:disable-next-line:no-unused-expression
    onChange && onChange(this.toNumberWhenUserInput(input)); // valid number or invalid string
  };

  onFocus = (...args: any[]) => {
    this.setState({
      focused: true,
    });
    const { onFocus } = this.props;
    // tslint:disable-next-line:no-unused-expression
    onFocus && onFocus(...args);
  };

  onBlur = (e: any, ...args: any[]) => {
    this.setState({
      focused: false,
    });
    const value = this.getCurrentValidValue(this.state.inputValue);
    e.persist(); // fix https://github.com/react-component/input-number/issues/51
    this.setValue(value, () => {
      const { onBlur } = this.props;
      // tslint:disable-next-line:no-unused-expression
      onBlur && onBlur(e, ...args);
    });
  };

  getCurrentValidValue = (value: any) => {
    let val = value;
    if (val === '') {
      val = '';
    } else if (!this.isNotCompleteNumber(val)) {
      val = this.getValidValue(val);
    } else {
      val = this.state.value;
    }
    return this.toNumber(val);
  };

  getValidValue = (value: any) => {
    let val = parseFloat(value);
    // https://github.com/ant-design/ant-design/issues/7358
    if (isNaN(val)) {
      return value;
    }
    if (val < this.props.min) {
      val = this.props.min as number;
    }
    if (val > this.props.max) {
      val = this.props.max as number;
    }
    return val;
  };

  setValue = (v: any, callback?: any) => {
    // trigger onChange
    const newValue = this.isNotCompleteNumber(parseFloat(v))
      ? undefined
      : parseFloat(v);
    const changed =
      newValue !== this.state.value ||
      `${newValue}` !== `${this.state.inputValue}`; // https://github.com/ant-design/ant-design/issues/7363
    if (!('value' in this.props)) {
      this.setState(
        {
          value: newValue,
          inputValue: this.toPrecisionAsStep(v),
        } as S,
        callback,
      );
    } else {
      // always set input value same as value
      this.setState(
        {
          inputValue: this.toPrecisionAsStep(this.state.value),
        },
        callback,
      );
    }
    if (changed) {
      const { onChange } = this.props;
      // tslint:disable-next-line:no-unused-expression
      onChange && onChange(newValue);
    }
  };

  getPrecision = (value: any) => {
    if ('precision' in this.props) {
      return this.props.precision as number;
    }
    const valueString = value.toString();
    if (valueString.indexOf('e-') >= 0) {
      return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
    }
    let precision = 0;
    if (valueString.indexOf('.') >= 0) {
      precision = valueString.length - valueString.indexOf('.') - 1;
    }
    return precision;
  };

  // step={1.0} value={1.51}
  // press +
  // then value should be 2.51, rather than 2.5
  // if this.props.precision is undefined
  // https://github.com/react-component/input-number/issues/39
  getMaxPrecision = (currentValue: any, ratio = 1) => {
    if ('precision' in this.props) {
      return this.props.precision as number;
    }
    const { step } = this.props;
    const ratioPrecision = this.getPrecision(ratio);
    const stepPrecision = this.getPrecision(step);
    const currentValuePrecision = this.getPrecision(currentValue);
    if (!currentValue) {
      return ratioPrecision + stepPrecision;
    }
    return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
  };

  getPrecisionFactor = (currentValue: any, ratio = 1) => {
    const precision = this.getMaxPrecision(currentValue, ratio);
    return Math.pow(10, precision as number);
  };

  toPrecisionAsStep = (num: any) => {
    if (this.isNotCompleteNumber(num) || num === '') {
      return num;
    }
    const precision = Math.abs(this.getMaxPrecision(num));
    if (!isNaN(precision)) {
      return Number(num).toFixed(precision);
    }
    return num.toString();
  };

  // '1.' '1x' 'xx' '' => are not complete numbers
  isNotCompleteNumber = (num: any) => {
    return (
      isNaN(num) ||
      num === '' ||
      num === null ||
      (num && num.toString().indexOf('.') === num.toString().length - 1)
    );
  };

  toNumber = (num: any) => {
    if (this.isNotCompleteNumber(num)) {
      return num;
    }
    if ('precision' in this.props) {
      return Number(Number(num).toFixed(this.props.precision));
    }
    return Number(num);
  };

  // '1.0' '1.00'  => may be a inputing number
  toNumberWhenUserInput = (num: any) => {
    // num.length > 16 => prevent input large number will became Infinity
    if ((/\.\d*0$/.test(num) || num.length > 16) && this.state.focused) {
      return num;
    }
    return this.toNumber(num);
  };

  stepCompute = (type: 'up' | 'down', val: any, rat: any) => {
    const { step, min } = this.props;
    const precisionFactor = this.getPrecisionFactor(val, rat);
    const precision = Math.abs(this.getMaxPrecision(val, rat));
    let result;
    const direct = type === 'up' ? 1 : -1;
    if (typeof val === 'number') {
      result = (
        (precisionFactor * val + direct * precisionFactor * +step * rat) /
        precisionFactor
      ).toFixed(precision);
    } else {
      result = min === -Infinity ? direct * +step : min;
    }
    return this.toNumber(result);
  };

  step = (type: 'up' | 'down', e: any, ratio = 1) => {
    if (e) {
      e.preventDefault();
    }
    const props = this.props;
    if (props.disabled) {
      return false;
    }
    const value = this.getCurrentValidValue(this.state.inputValue) || 0;
    if (this.isNotCompleteNumber(value)) {
      return false;
    }
    let val = this.stepCompute(type, value, ratio);
    const outOfRange = val > props.max || val < props.min;
    if (val > props.max) {
      val = props.max;
    } else if (val < props.min) {
      val = props.min;
    }
    this.setValue(val);
    this.setState({
      focused: true,
    });
    return !outOfRange;
  };

  stop = () => {
    if (this.autoStepTimer) {
      clearTimeout(this.autoStepTimer);
    }
  };

  action = (type: 'up' | 'down', e: any, ratio?: any, recursive?: any) => {
    if (e.persist) {
      e.persist();
    }
    this.stop();
    if (this.step(type, e, ratio)) {
      this.autoStepTimer = setTimeout(
        () => {
          this.action(type, e, ratio, true);
        },
        recursive ? SPEED : DELAY,
      );
    }
  };

  down = (e: any, ratio?: any, recursive?: any) => {
    this.action('down', e, ratio, recursive);
  };

  up = (e: any, ratio?: any, recursive?: any) => {
    this.action('up', e, ratio, recursive);
  };

  onPressIn(type: string) {
    if (this.props.disabled) {
      return;
    }
    const { styles } = this.props;
    (this as any)[type].setNativeProps({
      style: [styles.stepWrap, styles.highlightStepBorderColor],
    });
    (this as any)[`${type}Text`].setNativeProps({
      style: [styles.stepText, styles.highlightStepTextColor],
    });
  }

  onPressOut(type: any) {
    if (this.props.disabled) {
      return;
    }
    const { styles } = this.props;
    (this as any)[type].setNativeProps({
      style: [styles.stepWrap],
    });
    (this as any)[`${type}Text`].setNativeProps({
      style: [styles.stepText],
    });
  }

  onPressInDown = (e: any) => {
    this.onPressIn('_stepDown');
    this.down(e, true);
  };
  onPressOutDown = () => {
    this.onPressOut('_stepDown');
    this.stop();
  };

  onPressInUp = (e: any) => {
    this.onPressIn('_stepUp');
    this.up(e, true);
  };

  onPressOutUp = () => {
    this.onPressOut('_stepUp');
    this.stop();
  };

  getValueFromEvent(e: any) {
    return e.nativeEvent.text;
  }

  render() {
    const { props, state } = this;
    const { style, upStyle, downStyle, inputStyle, styles } = this.props;
    const editable = !this.props.readOnly && !this.props.disabled;

    let upDisabledStyle = null;
    let downDisabledStyle = null;
    let upDisabledTextStyle = null;
    let downDisabledTextStyle = null;
    const value = +state.value;
    if (!isNaN(value)) {
      const val = Number(value);
      if (val >= (props.max as number)) {
        upDisabledStyle = styles.stepDisabled;
        upDisabledTextStyle = styles.disabledStepTextColor;
      }
      if (val <= (props.min as number)) {
        downDisabledStyle = styles.stepDisabled;
        downDisabledTextStyle = styles.disabledStepTextColor;
      }
    } else {
      upDisabledStyle = styles.stepDisabled;
      downDisabledStyle = styles.stepDisabled;
      upDisabledTextStyle = styles.disabledStepTextColor;
      downDisabledTextStyle = styles.disabledStepTextColor;
    }

    let inputDisabledStyle = null;
    if (props.disabled) {
      upDisabledStyle = styles.stepDisabled;
      downDisabledStyle = styles.stepDisabled;
      upDisabledTextStyle = styles.disabledStepTextColor;
      downDisabledTextStyle = styles.disabledStepTextColor;
      inputDisabledStyle = styles.disabledStepTextColor;
    }

    let inputDisplayValue;
    if (state.focused) {
      inputDisplayValue = `${state.inputValue}`;
    } else {
      inputDisplayValue = `${state.value}`;
    }

    if (inputDisplayValue === undefined) {
      inputDisplayValue = '';
    }

    return (
      <View style={[styles.container, style]}>
        <TouchableWithoutFeedback
          onPressIn={
            editable && !downDisabledStyle ? this.onPressInDown : undefined
          }
          onPressOut={
            editable && !downDisabledStyle ? this.onPressOutDown : undefined
          }
          accessible
          accessibilityLabel="Decrease Value"
          accessibilityComponentType="button"
          accessibilityTraits={
            editable && !downDisabledStyle ? 'button' : 'disabled'
          }
        >
          <View
            ref={component => (this._stepDown = component)}
            style={[styles.stepWrap, downDisabledStyle, downStyle]}
          >
            <Text
              ref={component => (this._stepDownText = component)}
              style={[styles.stepText, downDisabledTextStyle]}
            >
              -
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TextInput
          style={[styles.input, inputDisabledStyle, inputStyle]}
          value={inputDisplayValue}
          autoFocus={props.autoFocus}
          editable={editable}
          onFocus={this.onFocus}
          onEndEditing={this.onBlur}
          onChange={this.onChange}
          underlineColorAndroid="transparent"
          keyboardType={props.keyboardType}
        />
        <TouchableWithoutFeedback
          onPressIn={
            editable && !upDisabledStyle ? this.onPressInUp : undefined
          }
          onPressOut={
            editable && !upDisabledStyle ? this.onPressOutUp : undefined
          }
          accessible
          accessibilityLabel="Increase Value"
          accessibilityComponentType="button"
          accessibilityTraits={
            editable && !upDisabledStyle ? 'button' : 'disabled'
          }
        >
          <View
            ref={component => (this._stepUp = component)}
            style={[styles.stepWrap, upDisabledStyle, upStyle]}
          >
            <Text
              ref={component => (this._stepUpText = component)}
              style={[styles.stepText, upDisabledTextStyle]}
            >
              +
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
