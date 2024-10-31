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
        $error={hasError.$error}
        onEvent={onEvent}
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
