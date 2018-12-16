import { presetPalettes } from 'ant-design-palettes';
import React from 'react';
import { Button, Flex, Icon, Modal } from '../../components';

class ThemePanel extends React.Component {
  state = {
    currentTheme: this.props.currentTheme,
  }
  render() {
    const { changeTheme } = this.props;

    return (
      <Flex direction="row" wrap="wrap">
        {Object.keys(presetPalettes).map(palettes => (
          <Button
            style={{
              width: '46%',
              marginRight: 10,
              marginBottom: 10,
            }}
            type={this.state.currentTheme === palettes ? 'primary' : undefined}
            key={palettes}
            onPress={() => {
              const palette = presetPalettes[palettes];
              changeTheme({
                fill_base: palette[0],
                primary_button_fill: palette[6],
                primary_button_fill_tap: palette[3],
                color_icon_base: palette[4],
              }, palettes);
              this.setState({ currentTheme: palettes });
            }
            }
          >
            {palettes}
          </Button>
        ))}
      </Flex>
    );
  }
}
// eslint-disable-next-line
export default class Theme extends React.Component {
  render() {
    const { changeTheme, currentTheme } = this.props;

    return (
      <Button
        onPress={() => Modal.alert('动态主题配置', <ThemePanel changeTheme={changeTheme} currentTheme={currentTheme} />)}
        type="ghost"
        styles={{
          wrapperStyle: { borderWidth: 0 },
        }}
      >
        <Icon name="setting" />
      </Button>
    );
  }
}
