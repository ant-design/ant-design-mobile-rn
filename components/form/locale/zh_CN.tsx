const typeTemplate = '${label}不是一个有效的${type}'

export default {
  optional: '（可选）',
  defaultValidateMessages: {
    default: '字段验证错误${label}',
    required: '请输入${label}',
    enum: '${label}必须是其中一个[${enum}]',
    whitespace: '${label}不能为空字符',
    date: {
      format: '${label}日期格式无效',
      parse: '${label}不能转换为日期',
      invalid: '${label}是一个无效日期',
    },
    types: {
      string: typeTemplate,
      method: typeTemplate,
      array: typeTemplate,
      object: typeTemplate,
      number: typeTemplate,
      date: typeTemplate,
      boolean: typeTemplate,
      integer: typeTemplate,
      float: typeTemplate,
      regexp: typeTemplate,
      email: typeTemplate,
      url: typeTemplate,
      hex: typeTemplate,
    },
    string: {
      len: '${label}须为${len}个字符',
      min: '${label}最少${min}个字符',
      max: '${label}最多${max}个字符',
      range: '${label}须在${min}-${max}字符之间',
    },
    number: {
      len: '${label}必须等于${len}',
      min: '${label}最小值为${min}',
      max: '${label}最大值为${max}',
      range: '${label}须在${min}-${max}之间',
    },
    array: {
      len: '须为${len}个${label}',
      min: '最少${min}个${label}',
      max: '最多${max}个${label}',
      range: '${label}数量须在${min}-${max}之间',
    },
    pattern: {
      mismatch: '${label}与模式不匹配${pattern}',
    },
  },
}
