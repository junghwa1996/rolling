//NOTE - input의 경우 사용자의 동작에 따라 다양한 css 이벤트들이 발생하는데, 이를 효율적으로 관리하기 위한 파일입니다.
// hover, focus, active, error, errorMessage 등

import { css } from 'styled-components';

import { font } from '../../styles/common/fonts.styles';
import { color } from '../../styles/common/variables';

export const StyledInput = css`
  //border
  border-radius: 0.8rem;
  border: 1px solid
    ${({ $error, theme }) => ($error ? color.error : theme.border)};

  //font
  ${font[16]}

  //color
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => theme.buttongray};
  }

  &:active,
  &:focus:active {
    background-color: ${({ theme }) => theme.buttongray};
    border-color: ${({ theme }) => theme.border};
  }

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
    outline: none;
  }

  //focus, disabled 상태일 때는 hover하지 않기
  &:not(:focus, :disabled):hover {
    border: 0.1rem solid ${({ theme }) => theme.secondary};
  }

  &:disabled {
    border: 0.1rem solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.surface};
    cursor: not-allowed;
  }
`;

export const StyledErrMessage = css`
  color: ${color.error};

  ${font[12]};
`;
