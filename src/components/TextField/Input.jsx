/**
 * 단일 Input 컴포넌트
 * 
 * 이 컴포넌트는 텍스트 입력을 위한 기본 `Input` UI를 렌더링하며, 사용자가 입력한 값을 실시간으로 업데이트하거나
 * 에러 메시지를 표시할 수 있습니다. 컴포넌트가 비활성화 상태일 때와 에러 상태일 때 UI와 이벤트 동작이 다르게 나타납니다.
 *
 * @component
 * @param {Object} onEvent - Input에 전달되는 이벤트 핸들러 및 상태값 객체 *필수값
 * @param {string} onEvent.name - Input의 이름 (각 input의 고유 식별자)
 * @param {string} onEvent.value - Input의 값 (상태로 관리)
 * @param {Function} onEvent.onChange - Input 값이 변경될 때 호출되는 함수
 * @param {Object} hasError - 에러 상태 및 메시지 객체
 * @param {boolean} hasError.$error - 에러 여부를 나타내는 불리언 값
 * @param {string} hasError.errMessage - 에러 메시지 (에러 상태일 때 표시됨)
 * @param {boolean} disabled - Input 비활성화 여부
 * @param {string} placeholder - Input의 기본 placeholder 텍스트
 * @param {Function} onBlur - Input이 blur될 때 호출되는 이벤트 핸들러
 * 
 * @example
 * <Input
 *    onEvent={{
 *       name: 'username',
 *       value: '사용자 이름',
 *       onChange: handleChange
 *    }}
 *    hasError={{ $error: true, errMessage: "값을 입력해주세요." }}
 *    disabled={false}
 *    placeholder="이름을 입력하세요"
 *    onBlur={handleBlur}
 * />
 */


import PropTypes from 'prop-types';

import { InputWrapper, InputBox, InputErrMessage } from './Input.styles';

// PropTypes를 정의하여 각 prop의 타입을 명시
Input.propTypes = {
  onEvent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  hasError: PropTypes.shape({
    $error: PropTypes.bool,
    errMessage: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
};

function Input({
  onEvent = {
    name: '',
    value: '',
    onChange: () => {},
  },
  hasError = {
    $error: false,
    errMessage: '값을 입력해주세요.',
  },
  disabled,
  placeholder,
  onBlur,
}) {
  return (
    <InputWrapper>
      <InputBox
        name={onEvent.name} // onEvent의 name 전달
        value={onEvent.value} // onEvent의 value 전달
        onChange={onEvent.onChange} // onEvent의 onChange 전달
        $error={hasError.$error}
        disabled={disabled}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {hasError.$error && (
        <InputErrMessage error={hasError.$error}>
          {hasError.errMessage}
        </InputErrMessage>
      )}
    </InputWrapper>
  );
}

export default Input;
