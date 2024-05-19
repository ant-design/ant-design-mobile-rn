const typeTemplate = '${label} não é um ${type} válido'

export default {
  optional: '(opcional)',
  defaultValidateMessages: {
    default: 'Erro ${label} na validação de campo',
    required: 'Por favor, insira ${label}',
    enum: '${label} deve ser um dos seguinte: [${enum}]',
    whitespace: '${label} não pode ser um carácter vazio',
    date: {
      format: ' O formato de data ${label} é inválido',
      parse: '${label} não pode ser convertido para uma data',
      invalid: '${label} é uma data inválida',
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
      len: '${label} deve possuir ${len} caracteres',
      min: '${label} deve possuir ao menos ${min} caracteres',
      max: '${label} deve possuir no máximo ${max} caracteres',
      range: '${label} deve possuir entre ${min} e ${max} caracteres',
    },
    number: {
      len: '${label} deve ser igual à ${len}',
      min: 'O valor mínimo de ${label} é ${min}',
      max: 'O valor máximo de ${label} é ${max}',
      range: '${label} deve estar entre ${min} e ${max}',
    },
    array: {
      len: 'Deve ser ${len} ${label}',
      min: 'No mínimo ${min} ${label}',
      max: 'No máximo ${max} ${label}',
      range: 'A quantidade de ${label} deve estar entre ${min} e ${max}',
    },
    pattern: {
      mismatch: '${label} não se encaixa no padrão ${pattern}',
    },
  },
}
