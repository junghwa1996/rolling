import styled from 'styled-components';

import { fontStyles } from '../../styles/fontStyle';

export const StyledTextarea = styled.p`
  word-break: break-all;
  border: none;
  outline: none;
  resize: none;

  ${fontStyles[20]};

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    //너비
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    //배경
    border-radius: 0.8rem;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    //색상
    background: #ccc;
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
