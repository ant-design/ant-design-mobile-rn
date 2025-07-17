// tslint:disable:no-empty
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Divider, Flex, List, WhiteSpace, WingBlank } from '../..'

const Item = List.Item

const BasicDividerExample = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f5f9' }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <List renderHeader="基础分割线">
        <Item>
          <Divider />
        </Item>
      </List>
      <List renderHeader="带内容的分割线">
        <Item>
          <WhiteSpace />
          <Divider content="默认内容在中间" />
          <WhiteSpace />
          <Divider content="左侧内容" position="left" />
          <WhiteSpace />
          <Divider content="右侧内容" position="right" />
        </Item>
      </List>
      <List renderHeader="竖向分割线">
        <Item>
          <WingBlank>
            <Flex direction="row">
              <Text style={{ fontSize: 14 }}>Home</Text>
              <Divider
                orientation="vertical"
                style={{ marginHorizontal: 10 }}
              />
              <Text style={{ fontSize: 14 }}>Guide</Text>
              <Divider
                orientation="vertical"
                style={{ marginHorizontal: 10 }}
              />
              <Text style={{ fontSize: 14 }}>Contact</Text>
            </Flex>
          </WingBlank>
        </Item>
      </List>
      <List renderHeader="自定义颜色">
        <Item>
          <Divider color="#5383ec" />
          <WhiteSpace size="lg" />
          <Divider variant="dashed" color="#d85140" />
        </Item>
      </List>
      <List renderHeader="自定义厚度">
        <Item>
          <WhiteSpace size="lg" />
          <Divider thickness={10} />
          <WhiteSpace size="lg" />
        </Item>
      </List>
      <List renderHeader="自定义节段">
        <Item>
          <WhiteSpace size="lg" />
          <Divider variant="dashed" color="#d85140" thickness={1} />
          <WhiteSpace size="lg" />
          <Divider
            variant="dashed"
            color="#d85140"
            pattern={[20, 10]}
            thickness={1}
          />
          <WhiteSpace size="lg" />
        </Item>
      </List>
      <List renderHeader="innerPadding">
        <Item>
          <WhiteSpace size="lg" />
          <Divider content="中间内容" innerPadding={0} thickness={1} />
          <WhiteSpace size="lg" />
          <Divider content="中间内容" innerPadding={30} thickness={1} />
          <WhiteSpace size="lg" />
        </Item>
      </List>
      <List renderHeader="orientationMargin">
        <Item>
          <WhiteSpace size="lg" />
          <Divider
            content="左侧内容"
            position="left"
            orientationMargin={0}
            thickness={1}
          />
          <WhiteSpace size="lg" />
          <Divider
            content="右侧内容"
            position="right"
            variant="dashed"
            orientationMargin={30}
            thickness={1}
          />
          <WhiteSpace size="lg" />
        </Item>
      </List>
    </ScrollView>
  )
}

export default BasicDividerExample
