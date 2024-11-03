import { styled } from 'styled-components';

import { font } from '../../../styles/fontStyles';

export const Textarea = styled.p`
  word-break: break-all;
  border: none;
  outline: none;
  resize: none;

  ${font[20]};

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    //너비
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    //배경
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.background};
  }

  &::-webkit-scrollbar-thumb {
    //색상
    background: ${({ theme }) => theme.border};
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;
