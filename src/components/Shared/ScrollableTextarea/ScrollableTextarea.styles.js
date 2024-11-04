import styled, { css } from 'styled-components';
import {
  fontFamily,
  applyResponsiveStyles,
} from '../../../styles/common/Common.styles';

export const ScrollableTextarea = styled.p`
  border: none;
  outline: none;
  resize: none;
  padding: 1rem;

  font-family: ${({ $font }) => ($font ? fontFamily[$font] : 'inherit')};
  ${({ $media }) => $media && applyResponsiveStyles({ media: $media })};
  word-break: break-all;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.background || '#f0f0f0'};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border || '#ccc'};
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.secondary || '#999'};
  }

  ${({ $lines }) =>
    $lines &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${$lines};
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    `}
`;
