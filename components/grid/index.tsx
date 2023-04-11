import React from 'react'
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import Carousel, { CarouselProps } from '../carousel/index'
import Flex from '../flex/index'
import { WithTheme, WithThemeStyles } from '../style'
import { DataItem, GridPropsType } from './PropsType'
import GridStyles, { GridStyle } from './style/index'

export interface GridProps extends GridPropsType, WithThemeStyles<GridStyle> {
  itemStyle?: StyleProp<ViewStyle>
  carouselProps?: CarouselProps
}

export default class Grid extends React.Component<GridProps, any> {
  static defaultProps: GridProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    itemStyle: {},
    carouselProps: {},
  }

  getFlexItemStyle(columnNum: number) {
    return {
      height: Dimensions.get('window').width / columnNum,
      borderRightWidth: this.props.hasLine ? StyleSheet.hairlineWidth : 0,
    }
  }

  render() {
    const {
      data,
      hasLine,
      isCarousel,
      onPress = () => {},
      carouselProps,
    } = this.props
    const columnNum = this.props.columnNum
    const customItemStyle = this.props.itemStyle
    const carouselMaxRow = this.props.carouselMaxRow
    const dataLength = (data && data.length) || 0
    const rowCount = Math.ceil(dataLength / columnNum)

    return (
      <WithTheme styles={this.props.styles} themeStyles={GridStyles}>
        {(styles) => {
          const renderItem =
            this.props.renderItem ||
            ((dataItem: DataItem, index: number) => (
              <Flex
                direction="column"
                justify="center"
                style={{ flex: 1 }}
                onPress={() => onPress(dataItem, index)}>
                {React.isValidElement(dataItem.icon) ? (
                  dataItem.icon
                ) : (
                  <Image source={{ uri: dataItem.icon }} style={styles.icon} />
                )}
                <Text style={styles.text}>{dataItem.text}</Text>
              </Flex>
            ))

          const flexItemStyle = this.getFlexItemStyle(columnNum)
          const rowsArr: any[] = []

          for (let i = 0; i < rowCount; i++) {
            const rowArr: any[] = []
            for (let j = 0; j < columnNum; j++) {
              const dataIndex = i * columnNum + j
              if (dataIndex < dataLength) {
                const el = data && data[dataIndex]
                rowArr.push(
                  <Flex.Item
                    key={j}
                    style={[
                      styles.grayBorderBox,
                      flexItemStyle,
                      {
                        borderLeftWidth:
                          hasLine && j === 0 ? StyleSheet.hairlineWidth : 0,
                      },
                      customItemStyle,
                    ]}
                    onPress={() => onPress(el, dataIndex)}>
                    {el && renderItem(el, dataIndex)}
                  </Flex.Item>,
                )
              } else {
                rowArr.push(
                  <Flex.Item
                    key={j}
                    style={[
                      styles.grayBorderBox,
                      flexItemStyle,
                      customItemStyle,
                    ]}
                  />,
                )
              }
            }
            const boxBorderStyle = {
              borderTopWidth: hasLine && i === 0 ? StyleSheet.hairlineWidth : 0,
              borderBottomWidth: hasLine ? StyleSheet.hairlineWidth : 0,
            }
            rowsArr.push(
              <Flex key={i} style={[styles.grayBorderBox, boxBorderStyle]}>
                {rowArr}
              </Flex>,
            )
          }

          const pageCount = Math.ceil(rowCount / carouselMaxRow)
          const pagesArr: any[] = []
          if (isCarousel && pageCount > 1) {
            for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
              const pageRows: any[] = []
              for (let ii = 0; ii < carouselMaxRow; ii++) {
                const rowIndex = pageIndex * carouselMaxRow + ii
                if (rowIndex < rowCount) {
                  pageRows.push(rowsArr[rowIndex])
                } else {
                  const res: any = []
                  for (let jjj = 0; jjj < columnNum; jjj++) {
                    res.push(
                      <Flex.Item
                        key={jjj}
                        style={[styles.grayBorderBox, flexItemStyle]}
                      />,
                    )
                  }
                  pageRows.push(
                    <Flex
                      key={rowIndex}
                      style={[
                        styles.grayBorderBox,
                        {
                          borderBottomWidth: hasLine
                            ? StyleSheet.hairlineWidth
                            : 0,
                        },
                      ]}>
                      {res}
                    </Flex>,
                  )
                }
              }
              pagesArr.push(
                <View
                  key={pageIndex}
                  style={[
                    styles.grayBorderBox,
                    {
                      borderTopWidth:
                        hasLine && pageIndex !== 0
                          ? StyleSheet.hairlineWidth
                          : 0,
                    },
                  ]}>
                  {pageRows}
                </View>,
              )
            }
          }

          return isCarousel && pageCount > 1 ? (
            <Carousel infinite={false} dots {...carouselProps}>
              {pagesArr}
            </Carousel>
          ) : (
            <View>{rowsArr}</View>
          )
        }}
      </WithTheme>
    )
  }
}
