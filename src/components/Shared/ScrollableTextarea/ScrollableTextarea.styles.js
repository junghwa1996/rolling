import styled from 'styled-components';
import {
  applyResponsiveStyles,
  fontFamily,
} from '../../../styles/common/Common.styles';

export const ScrollableTextarea = styled.div`
  border: none;
  outline: none;
  resize: none;

  ${({ $media }) => $media && applyResponsiveStyles({ media: $media })};
  word-break: break-all;
  * {
    font-family: ${({ $font }) => fontFamily[$font]};
  }
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
  overflow: auto;
`;
