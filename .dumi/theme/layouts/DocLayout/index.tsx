/**
 * 本地覆盖：先加载默认 DocLayout（会注入 dumi 默认 less），再加载本目录的 index.less，
 * 这样 index.less 里的样式会覆盖默认，无需使用 !important。
 */
import DefaultDocLayout from 'dumi/theme-default/layouts/DocLayout'
import './index.less'

export default DefaultDocLayout
