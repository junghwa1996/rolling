// Card.styles.js
import styled from 'styled-components';

import { Textarea } from '../components/CardList/Textarea.styles'; // 위치에 맞게 수정
import { CommonCardContainer, CommonTextArea } from './Common/Common.styles';
import { media } from './Common/media';

// 공통 Font Family 정의
export const fontFamily = {
  'Noto Sans': "'Noto Sans KR', sans-serif",
  나눔명조: "'Nanum Myeongjo', serif",
  '나눔손글씨 손편지체': "'Handletter'",
};

// ItemArea 스타일
export const ItemArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem 2.4rem;

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

// CardContainer 스타일
export const CardContainer = styled(CommonCardContainer)`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  * {
    font-family: ${({ $font }) => fontFamily[$font] ?? ''};
  }
  ${({ type }) => type === 'card' && 'cursor: pointer;'}
  ${({ type }) => type === 'edit' && 'padding-bottom: 2.4rem;'}
  ${({ type }) => type === 'modal' && 'outline: none;'}
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

// CardTextArea 스타일
export const CardTextArea = styled(CommonTextArea)`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  padding: 0 2.4rem;

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
