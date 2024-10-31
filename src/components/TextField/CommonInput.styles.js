//NOTE - input의 경우 사용자의 동작에 따라 다양한 css 이벤트들이 발생하는데, 이를 효율적으로 관리하기 위한 파일입니다.
// hover, focus, active, error, errorMessage 등

import { css } from 'styled-components';

import { fontStyles } from '../../styles/fontStyles';
import { color } from '../../styles/colors';

export const StyledInput = css`
  //border
  border-radius: 0.8rem;
  border: 1px solid
    ${({ $error, theme }) => ($error ? color.error : theme.border)};

  //font
  ${fontStyles[16]}

  //color
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.background};

  &:focus {
    outline: none;
    border: 0.2rem solid ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
  }

  &:active {
    border: 0.2rem solid ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.text};
  }

  //focus, disabled 상태일 때는 hover하지 않기
  &:not(:focus, :disabled):hover {
    border: 0.1rem solid ${({ theme }) => theme.secondary};
  }

  &:disabled {
    border: 0.1rem solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.surface};
  }
`;

export const StyledErrMessage = css`
  color: ${color.error};

  ${fontStyles[12]};
`;
