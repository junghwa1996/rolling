import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputStyles from './Input.styles';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInput = styled.input`
  width: 100%; // 각 페이지별 레이아웃에 따라 다르게 설정할 예정
  ${InputStyles}
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
