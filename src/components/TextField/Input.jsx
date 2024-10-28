import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInput = styled.input`
  width: 100%; // 각 페이지별 레이아웃에 따라 다르게 설정할 예정
  padding: 12px 16px;

  border-radius: 8px;
  border: 1px solid ${({ error }) => (error ? '#DC3A3A' : '#CCCCCC')};

  //font 설정
  ${({ theme }) => theme.fontTheme['16Regular']}

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

  //focus, disabled 상태일 때는 hover하지 않기
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

function Input({ error, errMessage, disabled, name, value, onChange }) {
  return (
    <InputWrapper>
      <StyledInput
        error={error}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <ErrMessage>{errMessage}</ErrMessage>}
    </InputWrapper>
  );
}

// PropTypes를 정의하여 각 prop의 타입을 명시
Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  errMessage: PropTypes.string,
};

// // 기본값 설정
// Input.defaultProps = {
//   error: false,
// };

export default Input;
