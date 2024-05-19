const typeTemplate = '${label} 유효하지 않은 ${type}'

export default {
  optional: '(선택사항)',
  defaultValidateMessages: {
    default: '필드 유효성 검사 오류 ${label}',
    required: '${label} 입력해 주세요',
    enum: '${label} [${enum}] 중에 하나여야 합니다',
    whitespace: '${label} 비워둘 수 없습니다',
    date: {
      format: '${label} 유효하지 않은 날짜 형식입니다',
      parse: '${label} 날짜 형식으로 변환될 수 없습니다',
      invalid: '${label} 유효하지 않은 날짜입니다',
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
      len: '${label} ${len}글자여야 합니다',
      min: '${label} 적어도 ${min}글자 이상이어야 합니다',
      max: '${label} ${max}글자 이하여야 합니다',
      range: '${label} ${min}-${max}글자 사이어야 합니다',
    },
    number: {
      len: '${label} 값은 ${len}이어야 합니다',
      min: '${label} 최솟값은 ${min}입니다',
      max: '${label} 최댓값은 ${max}입니다',
      range: '${label} 값은 ${min}-${max} 사이어야 합니다',
    },
    array: {
      len: '${len}이어야 합니다 ${label} ',
      min: '최소 ${min}이어야 합니다 ${label}',
      max: '최대 ${max}이어야 합니다 ${label}',
      range: '${label} ${min}-${max} 사이어야 합니다',
    },
    pattern: {
      mismatch: '${label} ${pattern} 패턴과 일치하지 않습니다',
    },
  },
}
