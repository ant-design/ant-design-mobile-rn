import { lazy } from 'react'
module.exports = {
  UIBARS: [
    {
      title: 'NoticeBar',
      description: '通告栏',
      icon: 'https://os.alipayobjects.com/rmsportal/EFpWULKNsectBDK.png',
      module: lazy(() => import('../components/notice-bar/demo/basic')),
    },
    {
      title: 'SearchBar',
      description: '搜索栏',
      icon: 'https://os.alipayobjects.com/rmsportal/QnAmpSwlfPzjpSL.png',
      module: lazy(() => import('../components/search-bar/demo/basic')),
    },
    {
      title: 'TabBar',
      description: '标签栏',
      icon: 'https://zos.alipayobjects.com/rmsportal/OZInMeAaDCHtaJU.png',
      module: lazy(() => import('../components/tab-bar/demo/basic')),
    },
  ],
  UIVIEWS: [
    {
      title: 'Accordion',
      description: '手风琴',
      icon: 'https://os.alipayobjects.com/rmsportal/gfWmRfZNzMyVUss.png',
      module: lazy(() => import('../components/accordion/demo/basic')),
    },
    {
      title: 'ActionSheet',
      description: '动作面板',
      icon: 'https://zos.alipayobjects.com/rmsportal/cYmaBafYBnAxCqQ.png',
      module: lazy(() => import('../components/action-sheet/demo/basic')),
    },
    {
      title: 'Card',
      description: '卡片',
      icon: 'https://os.alipayobjects.com/rmsportal/daARhPjKcxlSuuZ.png',
      module: lazy(() => import('../components/card/demo/basic')),
    },
    {
      title: 'Drawer',
      description: '抽屉',
      icon: 'https://os.alipayobjects.com/rmsportal/oSokuHUVgeoTLJl.png',
      module: lazy(() => import('../components/drawer/demo/basic')),
    },
    {
      title: 'Icon',
      description: '图标',
      icon: 'https://os.alipayobjects.com/rmsportal/yhnfleZZoezOjtU.png',
      module: lazy(() => import('../components/icon/demo/basic')),
    },
    {
      title: 'List',
      description: '列表',
      icon: 'https://os.alipayobjects.com/rmsportal/tiapjpdKPQGHhnC.png',
      module: lazy(() => import('../components/list/demo/basic')),
    },
    {
      title: 'ListView',
      description: '列表',
      icon: 'https://os.alipayobjects.com/rmsportal/tiapjpdKPQGHhnC.png',
      module: lazy(() => import('../components/list-view/demo/basic')),
    },
    {
      title: 'Modal',
      description: '对话框',
      icon: 'https://os.alipayobjects.com/rmsportal/HzRRcuwtqUCCOBg.png',
      module: lazy(() => import('../components/modal/demo/basic')),
    },
    {
      title: 'Popover',
      description: '气泡',
      icon: 'https://os.alipayobjects.com/rmsportal/iIOLFHTKUCxBgUV.png',
      module: lazy(() => import('../components/popover/demo/basic')),
    },
    {
      title: 'Portal',
      description: 'portal',
      icon: 'https://os.alipayobjects.com/rmsportal/iIOLFHTKUCxBgUV.png',
      module: lazy(() => import('../components/portal/demo/basic')),
    },
    {
      title: 'Result', // 必须
      description: '结果页',
      icon: 'https://os.alipayobjects.com/rmsportal/nREwETegxvDndJZ.png',
      module: lazy(() => import('../components/result/demo/basic')),
    },
    {
      title: 'Toast', // 必须
      description: '轻提示',
      icon: 'https://os.alipayobjects.com/rmsportal/nREwETegxvDndJZ.png',
      module: lazy(() => import('../components/toast/demo/basic')),
    },
  ],
  UICONTROLS: [
    {
      title: 'ActivityIndicator',
      description: '活动指示器',
      icon: 'https://zos.alipayobjects.com/rmsportal/yVtRfZGoDxXObTK.png',
      module: lazy(() => import('../components/activity-indicator/demo/basic')),
    },
    {
      title: 'Badge',
      description: '徽标数',
      icon: 'https://os.alipayobjects.com/rmsportal/UwUpBYPYnlwVicM.png',
      module: lazy(() => import('../components/badge/demo/basic')),
    },
    {
      title: 'Button',
      description: '按钮',
      icon: 'https://os.alipayobjects.com/rmsportal/ZRDUYEzfOzKWdzE.png',
      module: lazy(() => import('../components/button/demo/basic')),
    },
    {
      title: 'Carousel', // 必须
      description: '走马灯',
      icon: 'https://os.alipayobjects.com/rmsportal/FbIGJuDaiQoKNvj.png',
      module: lazy(() => import('../components/carousel/demo/basic')), // 必须
    },
    {
      title: 'Checkbox', // 必须
      description: '复选框',
      icon: 'https://os.alipayobjects.com/rmsportal/MJszdVSBKhtGmIP.png',
      module: lazy(() => import('../components/checkbox/demo/basic')), // 必须
    },
    {
      title: 'DatePicker', // 必须
      description: '日期选择',
      icon: 'https://os.alipayobjects.com/rmsportal/IQtMSWmYwLEuqln.png',
      module: lazy(() => import('../components/date-picker/demo/basic')),
    },
    {
      title: 'DatePickerView', // 必须
      description: '日期选择视图',
      icon: 'https://os.alipayobjects.com/rmsportal/IQtMSWmYwLEuqln.png',
      module: lazy(() => import('../components/date-picker-view/demo/basic')),
    },
    {
      title: 'ImagePicker',
      description: '图片选择',
      icon: 'https://os.alipayobjects.com/rmsportal/NDsSvklLUeodsHK.png',
      module: lazy(() => import('../components/image-picker/demo/basic')),
    },
    {
      title: 'InputItem',
      description: '文本输入',
      icon: 'https://os.alipayobjects.com/rmsportal/SdSqpihcSBoBrFO.png',
      module: lazy(() => import('../components/input-item/demo/basic')),
    },
    {
      title: 'Picker',
      description: '选择器',
      icon: 'https://os.alipayobjects.com/rmsportal/STBLvEutBwPySbL.png',
      module: lazy(() => import('../components/picker/demo/basic')),
    },
    {
      title: 'PickerView',
      description: '选择器视图',
      icon: 'https://os.alipayobjects.com/rmsportal/STBLvEutBwPySbL.png',
      module: lazy(() => import('../components/picker-view/demo/basic')),
    },
    {
      title: 'Progress',
      description: '进度条',
      icon: 'https://os.alipayobjects.com/rmsportal/ihijukOXDlqXvPS.png',
      module: lazy(() => import('../components/progress/demo/basic')),
    },
    {
      title: 'Pagination',
      description: '分页器',
      icon: 'https://zos.alipayobjects.com/rmsportal/fOQwMYUYaRRKYtd.png',
      module: lazy(() => import('../components/pagination/demo/basic')),
    },
    {
      title: 'Radio',
      description: '单选框',
      icon: 'https://os.alipayobjects.com/rmsportal/dWPGltvdjaanrRd.png',
      module: lazy(() => import('../components/radio/demo/basic')), // 必须
    },
    {
      title: 'Slider',
      description: '滑动输入条',
      icon: 'https://os.alipayobjects.com/rmsportal/mCyccAjoVLFVhSH.png',
      module: lazy(() => import('../components/slider/demo/basic')),
    },
    {
      title: 'Stepper',
      description: '步进器',
      icon: 'https://os.alipayobjects.com/rmsportal/eYnIAokGATNUxlD.png',
      module: lazy(() => import('../components/stepper/demo/basic')),
    },
    {
      title: 'Steps', // 必须
      description: '步骤条',
      icon: 'https://os.alipayobjects.com/rmsportal/nvQVDIUiTmXcJtO.png',
      module: lazy(() => import('../components/steps/demo/basic')), // 必须
    },
    {
      title: 'SegmentedControl',
      description: '分段器',
      icon: 'https://zos.alipayobjects.com/rmsportal/qCqRFuSbewqIWyv.png',
      module: lazy(() => import('../components/segmented-control/demo/basic')),
    },
    {
      title: 'Switch',
      description: '滑动开关',
      icon: 'https://os.alipayobjects.com/rmsportal/ITFdMlELFchsTmz.png',
      module: lazy(() => import('../components/switch/demo/basic')),
    },
    {
      title: 'SwipeAction', // 必须
      description: '滑动或长按操作',
      icon: 'https://os.alipayobjects.com/rmsportal/nlDYwTsLwJdnaKc.png',
      module: lazy(() => import('../components/swipe-action/demo/basic')),
    },
    {
      title: 'Tabs', // 必须
      description: '标签页',
      icon: 'https://os.alipayobjects.com/rmsportal/stWeDgdtEIKoiTU.png',
      module: lazy(() => import('../components/tabs/demo/basic')), // 必须
    },
    {
      title: 'Tag', // 必须
      description: '标签',
      icon: 'https://os.alipayobjects.com/rmsportal/gfstSzAhvXqKyEg.png',
      module: lazy(() => import('../components/tag/demo/basic')),
    },
    {
      title: 'TextAreaItem',
      description: '多行输入',
      icon: 'https://os.alipayobjects.com/rmsportal/PfzuWlDVfndrQUK.png',
      module: lazy(() => import('../components/textarea-item/demo/basic')),
    },
  ],
  OTHERS: [
    {
      title: 'Flex',
      description: '布局',
      icon: 'https://os.alipayobjects.com/rmsportal/zFqYaBWIPpYYORq.png',
      module: lazy(() => import('../components/flex/demo/basic')),
    },
    {
      title: 'GridList',
      description: '网格列表',
      icon: 'https://os.alipayobjects.com/rmsportal/UBGcnLKfVQIXgUb.png',
      module: lazy(() => import('../components/grid/demo/basic')),
    },
    {
      title: 'LocaleProvider',
      description: '国际化',
      icon: 'https://os.alipayobjects.com/rmsportal/HzRRcuwtqUCCOBg.png',
      module: lazy(() => import('../components/locale-provider/demo/basic')),
    },
    {
      title: 'View',
      description: '更安全的基础组件',
      icon: 'https://os.alipayobjects.com/rmsportal/DUkfOYZVcLctGot.png',
      module: lazy(() => import('../components/view/demo/basic')),
    },
    {
      title: 'WhiteSpace',
      description: '上下留白',
      icon: 'https://os.alipayobjects.com/rmsportal/NfomhEsOdhFxEws.png',
      module: lazy(() => import('../components/white-space/demo/basic')),
    },
    {
      title: 'WingBlank',
      description: '两翼留白',
      icon: 'https://os.alipayobjects.com/rmsportal/DUkfOYZVcLctGot.png',
      module: lazy(() => import('../components/wing-blank/demo/basic')),
    },
  ],
}
