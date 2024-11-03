import styled, { css } from 'styled-components';

import { font } from '../../styles/common/fonts.styles';

const OutlinedStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  ${font[16]};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttongray};
    color: ${({ theme }) => theme.text};
  }
  &:active,
  &:focus:active {
    background-color: ${({ theme }) => theme.buttongray};
    border-color: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
  }
  &:focus {
    border-color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    outline: none;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.whiteText};
    cursor: not-allowed;

    svg {
      fill: ${({ theme }) => theme.background};
    }
  }
`;

const sizeStyles = {
  s: css`
    padding: 0.6rem 0.6rem;
  `,
  m: css`
    padding: 0.7rem 1.6rem;
  `,
};

export const StOutlined = styled.button.attrs(({ as }) => ({
  as: as || 'button',
}))`
  ${({ $size }) => sizeStyles[$size]}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === 'right' ? 'row-reverse' : 'row'};

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
  ${font[16]};
  white-space: nowrap;
`;
