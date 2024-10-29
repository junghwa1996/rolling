import styled, { css } from 'styled-components';

const sizes = {
  s: css`
    padding: 13px 20px;
    border-radius: 6px;
    ${({ theme }) => theme.fontTheme[`16Regular`]};
  `,
  m: css`
    width: 12rem;
    height: 4rem;
    border-radius: 6px;
    ${({ theme }) => theme.fontTheme[`16Regular`]};
  `,
  l: css`
    width: 28rem;
    height: 5.6rem;
    border-radius: 12px;
    ${({ theme }) => theme.fontTheme[`18Bold`]};
  `,
  xl: css`
    width: 100%;
    height: 5.6rem;
    border-radius: 12px;
    ${({ theme }) => theme.fontTheme[`18Bold`]};
  `,
};

const colors = {
  primary: css`
    border: none;
    background-color: ${({ theme }) => theme.colorTheme.purple[600]};
    color: ${({ theme }) => theme.colorTheme.white};

    &:hover {
      background-color: ${({ theme }) => theme.colorTheme.purple[700]};
    }
    &:active,
    &:focus:active {
      background-color: ${({ theme }) => theme.colorTheme.purple[800]};
    }
    &:focus {
      background-color: ${({ theme }) => theme.colorTheme.purple[800]};
      outline: none;
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colorTheme.grayscale[300]};
      cursor: not-allowed;
    }
  `,
  secondary: css`
    border: 1px solid ${({ theme }) => theme.colorTheme.purple[600]};
    background-color: ${({ theme }) => theme.colorTheme.white};
    color: ${({ theme }) => theme.colorTheme.purple[700]};

    &:hover {
      border-color: ${({ theme }) => theme.colorTheme.purple[700]};
      background-color: #f7f0ff;
      color: ${({ theme }) => theme.colorTheme.purple[600]};
    }
    &:active,
    &:focus:active {
      border-color: ${({ theme }) => theme.colorTheme.purple[800]};
      background-color: #f7f0ff;
      color: ${({ theme }) => theme.colorTheme.purple[600]};
    }
    &:focus {
      border-color: ${({ theme }) => theme.colorTheme.purple[800]};
      background-color: ${({ theme }) => theme.colorTheme.white};
      color: #9747ff;
      outline: none;
    }
    &:disabled {
      border: none;
      background-color: ${({ theme }) => theme.colorTheme.grayscale[300]};
      color: ${({ theme }) => theme.colorTheme.white};
      cursor: not-allowed;
    }
  `,
};

export const StButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;

  ${({ size }) => sizes[size]}
  ${({ color }) => colors[color]}
`;
