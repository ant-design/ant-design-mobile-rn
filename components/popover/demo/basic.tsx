import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Popover } from '../../';

const Item = Popover.Item;

export default class PopoverExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      // visible: false,
      selected: '',
    };
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.refs.mc.refs.menuContext.toggleMenu('m');
  //   }, 2000);
  // }
  onSelect = (value: any) => {
    this.setState({
      // visible: false,
      selected: value,
    });
  };
  // handleVisibleChange = (_visible) => {
  //   this.setState({
  //     visible,
  //   });
  // }
  render() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Item key={index} value={`option ${i}`}>
        <Text>option {i}</Text>
      </Item>
    ));
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled>
        <Text style={{ color: '#ddd' }}>disabled opt</Text>
      </Item>,
      <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
        <Text>关闭</Text>
      </Item>,
    ]);
    return (
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => this.newMethod(overlay, item))}
      </List>
    );
  }

  private newMethod(overlay: JSX.Element[], key: number) {
    return (
      <List.Item
        key={key}
        extra={
          <Popover
            overlay={overlay}
            triggerStyle={styles.triggerStyle}
            onSelect={v =>
              this.setState({
                [`selected${key}`]: v,
              })
            }
          >
            <Text>菜单</Text>
          </Popover>
        }
      >
        <View>
          <Text>选择了：{this.state[`selected${key}`]}</Text>
        </View>
      </List.Item>
    );
  }
}

const styles = StyleSheet.create({

  triggerStyle: {
    paddingHorizontal: 6,
  },

});

export const title = 'Popover';
export const description = 'Popover example';
