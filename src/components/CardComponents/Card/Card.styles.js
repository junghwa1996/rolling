// src/components/Cards/Card/Card.styles.js
import styled from 'styled-components';

import { font } from '../../../styles/common/fonts.styles';
import { fontFamily } from '../../../styles/common/Common.styles';
import {
  media,
  responsiveGridColumns,
} from '../../../styles/common/media.styles';

export const CardContainer = styled.div`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  * {
    font-family: ${({ $font }) => fontFamily[$font] ?? ''};
  }
  ${({ type }) => type === 'card' && 'cursor: pointer;'}
  ${({ type }) => type === 'edit' && 'padding-bottom: 2.4rem;'}
  ${({ type }) =>
    type === 'modal' && 'outline: none; width: 100%; height: 100%;'}
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => theme.background};
    transition: all 0.5s;
  }

  ${media.tablet`
    width: 35.2rem;
    height: 28.4rem;
  `}

  ${media.mobile`
    width: 32rem;
    height: 23rem;
  `}
`;
export const Textarea = styled.p`
  word-break: break-all;
  border: none;
  outline: none;
  resize: none;

  ${font[20]};

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;
export const CardTextArea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  padding: 0 2.4rem;
  ${({ type }) => type === 'modal' && 'align-items: center;'}

  ${Textarea} {
    width: 33.6rem;
    height: 10.6rem;
    margin: 1.6rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media screen and (min-width: 768px) and (max-width: 1248px) {
      width: 30.4rem;
      height: 11.4rem;
    }

    @media screen and (max-width: 767px) {
      width: 27.2rem;
      height: 4.5rem;
      margin: 1.6rem 0 2.7rem;
      font-size: 15px;
    }
  }
`;

// ButtonArea 스타일
export const ButtonArea = styled.div`
  @media screen and (max-width: 1248px) {
    position: fixed;
    bottom: 2.4rem;
    left: 2.4rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 72rem;
  }

  @media screen and (max-width: 767px) {
    width: 32rem;
    left: 2rem;
  }
`;

// 기타 필요한 카드 관련 스타일을 추가적으로 정의...
export const CreatedAt = styled.span`
  ${font[14]};
  color: ${({ theme }) => theme.dateText};

  @media screen and (max-width: 767px) {
    font-size: ${font[12]};
  }
`;

// ItemArea 스타일
export const CardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem 2.4rem;

  ${responsiveGridColumns.desktop}
  ${responsiveGridColumns.tablet}
  ${responsiveGridColumns.mobile}

  @media screen and (max-width: 1248px) {
    gap: 1.6rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
