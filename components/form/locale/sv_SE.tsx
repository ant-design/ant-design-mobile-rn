const typeTemplate = '${label} är inte en giltig ${type}'

export default {
  optional: '(valfritt)',
  defaultValidateMessages: {
    default: 'Fältvalideringsfel för ${label}',
    required: 'Vänligen fyll i ${label}',
    enum: '${label} måste vara en av [${enum}]',
    whitespace: '${label} kan inte vara ett tomt tecken',
    date: {
      format: '${label} datumformatet är ogiltigt',
      parse: '${label} kan inte konverteras till ett datum',
      invalid: '${label} är ett ogiltigt datum',
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
      len: '${label} måste vara ${len} tecken',
      min: '${label} måste vara minst ${min} tecken',
      max: '${label} måste vara högst ${max} tecken',
      range: '${label} måste vara mellan ${min}-${max} tecken',
    },
    number: {
      len: '${label} måste vara lika med ${len}',
      min: '${label} måste vara minst ${min}',
      max: '${label} måste vara högst ${max}',
      range: '${label} måste vara mellan ${min}-${max}',
    },
    array: {
      len: 'Måste vara ${len} ${label}',
      min: 'Minst ${min} ${label}',
      max: 'Högst ${max} ${label}',
      range: 'Antal ${label} måste vara mellan ${min}-${max}',
    },
    pattern: {
      mismatch: '${label} stämmer inte överens med mönstret ${pattern}',
    },
  },
}
