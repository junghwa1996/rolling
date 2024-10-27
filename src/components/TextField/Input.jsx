import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;

  border-radius: 8px;
  border: 1px solid ${({ error }) => (error ? '#DC3A3A' : '#CCCCCC')};

  ${({ theme }) => theme.fontTheme['16Regular']};

  color: ${({ theme }) => theme.colorTheme.grayscale['500']};
  background-color: ${({ theme }) => theme.colorTheme.white};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colorTheme.grayscale['500']};
    color: ${({ theme }) => theme.colorTheme.grayscale['900']};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.colorTheme.grayscale['700']};
    color: ${({ theme }) => theme.colorTheme.grayscale['900']};
  }

  &:not(:focus, :disabled):hover {
    border: 1px solid ${({ theme }) => theme.colorTheme.grayscale['500']};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.colorTheme.grayscale['300']};
    background-color: ${({ theme }) => theme.colorTheme.grayscale['100']};
  }
`;

const ErrMessage = styled.p`
  color: ${({ theme }) => theme.colorTheme.error};

  ${({ theme }) => theme.fontTheme['12Regular']};
`;

function Input({ error, disabled, name, value, onChange }) {
  return (
    <InputWrapper>
      <StyledInput
        error={error}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <ErrMessage>Error Massage</ErrMessage>}
    </InputWrapper>
  );
}

// PropTypes를 정의하여 각 prop의 타입을 명시
Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

// 기본값 설정 (옵션)
Input.defaultProps = {
  error: false,
};

export default Input;
