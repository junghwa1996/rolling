import styled, { css } from 'styled-components';

const OutlinedStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colorTheme.white};
  border: 1px solid ${({ theme }) => theme.colorTheme.grayscale[300]};
  font-size: ${({ theme }) => theme.fontTheme[`16Regular`]};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colorTheme.grayscale[900]};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colorTheme.grayscale[100]};
  }
  &:active,
  &:focus:active {
    background-color: ${({ theme }) => theme.colorTheme.grayscale[100]};
    border-color: ${({ theme }) => theme.colorTheme.grayscale[300]};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colorTheme.grayscale[500]};
    background-color: ${({ theme }) => theme.colorTheme.white};
    outline: none;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colorTheme.grayscale[300]};
    color: ${({ theme }) => theme.colorTheme.white};
    cursor: not-allowed;

    svg {
      fill: ${({ theme }) => theme.colorTheme.white};
    }
  }
`;

const sizeStyles = {
  s: css`
    padding: 6px 6px;
  `,
  m: css`
    padding: 7px 16px;
  `,
};

export const StOutlined = styled.button`
  ${({ size }) => sizeStyles[size]}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'right' ? 'row-reverse' : 'row'};

  ${OutlinedStyles}
`;

export const IconArea = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.4rem;
  min-height: 2.4rem;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontTheme[`16Regular`]};
`;
