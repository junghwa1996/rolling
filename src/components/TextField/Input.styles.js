import styled, { css } from 'styled-components';

const InputStyles = css`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid
    ${({ error, theme }) => (error ? theme.colorTheme.error : '#CCCCCC')};

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

export default InputStyles;
