import PropTypes from 'prop-types';

import { InputWrapper, InputBox, InputErrMessage } from './Input.styles';

function Input({
  $error,
  errMessage = '값을 입력해 주세요.',
  disabled,
  name,
  value,
  onChange,
  placeholder,
  onBlur,
}) {
  return (
    <InputWrapper>
      <InputBox
        error={$error}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      <InputErrMessage error={$error}>{errMessage}</InputErrMessage>
    </InputWrapper>
  );
}

// PropTypes를 정의하여 각 prop의 타입을 명시
Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  $error: PropTypes.bool,
  disabled: PropTypes.bool,
  errMessage: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
};

export default Input;
