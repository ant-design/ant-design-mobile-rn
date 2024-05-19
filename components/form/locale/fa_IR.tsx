const typeTemplate = '${label} از نوع ${type} معتبر نیست'

export default {
  optional: '(اختیاری)',
  defaultValidateMessages: {
    default: 'خطا در ${label}',
    required: 'فیلد ${label} اجباریست',
    enum: '${label} باید یکی از [${enum}] باشد',
    whitespace: '${label} نمیتواند خالی باشد',
    date: {
      format: 'ساختار تاریخ در ${label} نامعتبر است',
      parse: '${label} قابل تبدیل به تاریخ نیست',
      invalid: '${label} تاریخی نا معتبر است',
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
      len: '${label} باید ${len} کاراکتر باشد',
      min: '${label} باید حداقل ${min} کاراکتر باشد',
      max: '${label} باید حداکثر ${max} کاراکتر باشد',
      range: '${label} باید بین ${min}-${max} کاراکتر باشد',
    },
    number: {
      len: '${label} باید برابر ${len}',
      min: '${label} حداقل میتواند ${min} باشد',
      max: '${label} حداکثر میتواند ${max} باشد',
      range: '${label} باید بین ${min}-${max} باشد',
    },
    array: {
      len: 'تعداد ${label} باید ${len} باشد.',
      min: 'تعداد ${label} حداقل باید ${min} باشد',
      max: 'تعداد ${label} حداکثر باید ${max} باشد',
      range: 'مقدار ${label} باید بین ${min}-${max} باشد',
    },
    pattern: {
      mismatch: 'الگوی ${label} با ${pattern} برابری نمی‌کند',
    },
  },
}
