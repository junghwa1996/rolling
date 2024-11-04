import styled, { css } from 'styled-components';
import {
  applyResponsiveStyles,
  responsiveFont,
} from '../../../styles/common/Common.styles';

export const ScrollableTextarea = styled(
  ({ type, lines, responsive, ...props }) => <div {...props} />,
)`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  border: none;
  outline: none;
  resize: none;
  overflow: auto;
  padding: 1rem;
  font-family: inherit;
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

  ${({ responsive }) => applyResponsiveStyles(responsive)}
  ${({ $media }) => responsiveFont($media)}

  ${({ type, lines }) =>
    type === 'ellipsis' &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${lines || 3};
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    `}
`;
