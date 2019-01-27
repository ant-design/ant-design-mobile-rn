import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Popover } from '../../';

const Item = Popover.Item;

export default class PopoverExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  onSelect = (value: any) => {
    this.setState({
      // visible: false,
      selected: value,
    });
  };
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
      <React.Fragment>
        <List>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => this.renderList(overlay, item))}
        </List>
        <Popover
          overlay={
            <Popover.Item value={'test'}>
              <Text>自定义组件 x</Text>
            </Popover.Item>
          }
          renderOverlayComponent={nodes => (
            <View>
              <Text
                style={{
                  paddingHorizontal: 9,
                  paddingTop: 16,
                  color: '#2b2b2b',
                  fontWeight: 'bold',
                }}
              >
                我是自定义组件title
              </Text>
              {nodes}
            </View>
          )}
        >
          <Text
            style={{
              margin: 16,
            }}
          >
            自定义组件
          </Text>
        </Popover>
      </React.Fragment>
    );
  }

  private renderList(overlay: JSX.Element[], key: number) {
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
