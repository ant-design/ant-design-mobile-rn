/**
 * @jest-environment jsdom
 */
import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import { Picker, Provider } from '../../'

jest.mock('@react-navigation/stack', () => ({
  generateKey: jest.fn(() => 123),
}))
describe('Picker', () => {
  describe('test cascade props', () => {
    it('when cascade={true} should be render MultiPicker', () => {
      const onChange = jest.fn()
      const onPress = jest.fn()

      // I cant resolve :(, same issue as https://github.com/enzymejs/enzyme/issues/1990 when:
      // const wrapper = mount(<TouchableHighlight><Text>1</Text></TouchableHighlight>)

      const data = [
        {
          label: '北京市',
          value: '11',
          children: [
            {
              label: '市辖区',
              value: '1101',
              children: [
                { label: '东城区', value: '110101' },
                { label: '西城区', value: '110102' },
              ],
            },
          ],
        },
      ]
      const wrapper = renderer.create(
        <Provider>
          <Picker data={data} cols={3} onChange={onChange}>
            <Text onPress={onPress} testID={'button'}>
              省市选择
            </Text>
          </Picker>
        </Provider>,
      )
      wrapper.root.findByType(Text).props.onPress()
      expect(wrapper).toMatchSnapshot()
    })

    // it('when cascade={false} should be render MultiPicker', () => {
    //   const seasons = [
    //     [
    //       {
    //         label: '2013',
    //         value: '2013',
    //       },
    //       {
    //         label: '2014',
    //         value: '2014',
    //       },
    //     ],
    //     [
    //       {
    //         label: '春',
    //         value: '春',
    //       },
    //       {
    //         label: '夏',
    //         value: '夏',
    //       },
    //     ],
    //   ];
    //   const { debug, container } = render(<PickerView
    //     data={seasons}
    //     cascade={false}
    //   />);
    //   debug();
    //   expect(container.getByDisplayValue('MultiPicker')).toBe(true);
    // });
  })

  // describe('test some events', () => {
  //   // fix: https://github.com/ant-design/ant-design-mobile-rn/issues/734
  //   it('fires onPickerChange event', () => {
  //     const dataFromIssue = [
  //       [
  //         { label: 'label1', value: 'value1' },
  //         { label: 'label2', value: 'value2' },
  //       ],
  //       [
  //         { label: 'label3', value: 'value3' },
  //         { label: 'label4', value: 'value4' },
  //       ],
  //     ];
  //     const onPickerChange = jest.fn();

  //     const wrapper = render(<Picker
  //       data={dataFromIssue}
  //       cols={2}
  //       cascade={false}
  //       onPickerChange={onPickerChange}
  //     >
  //       <Text testID={'button'}>省市选择</Text>
  //     </Picker>);

  //     wrapper.find(PopupCascader).prop('cascader').props.onValueChange(dataFromIssue[0][0]);
  //     expect(onPickerChange).toBeCalledWith(dataFromIssue[0][0]);
  //   });
  // });
})
