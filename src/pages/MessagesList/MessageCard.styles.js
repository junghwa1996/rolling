import styled, { css } from 'styled-components';

import { MSHeaderContainer, MSHeaderPosition } from './MessagesHeader.styles';
import { StyledTextarea } from './StyledTextarea.styles';

// 말줄임 스타일 정의
const ellipsisStyle = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media screen and (max-width: 767px) {
    -webkit-line-clamp: 2;
  }
`;

export const SCMessageCardTextArea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

const cardLayout = css`
  width: 38.4rem;
  height: 28rem;
  padding-bottom: 2.4rem;

  ${MSHeaderContainer} {
    padding: 2.8rem 2.4rem 1.6rem;
    ${MSHeaderPosition} {
      gap: 1.4rem;
    }
  }
  ${SCMessageCardTextArea} {
    padding: 0 2.4rem;
    ${StyledTextarea} {
      width: 33.6rem;
      height: 10.6rem;
      margin: 1.6rem 0;
      ${ellipsisStyle}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 35.2rem;
    height: 28.4rem;
    ${SCMessageCardTextArea} {
      ${StyledTextarea} {
        width: 30.4rem;
        height: 11.4rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 32rem;
    height: 23rem;
    ${SCMessageCardTextArea} {
      ${StyledTextarea} {
        width: 27.2rem;
        height: 4.5rem;
        margin: 1.6rem 0 2.7rem;
        ${({ theme }) => theme.fontTheme['15Regular']};
      }
    }
  }
`;

// 옵션 타입에 따라 스타일 변경
const optionType = {
  card: cardLayout,
  edit: cardLayout,
  modal: css`
    width: 60rem;
    height: 47.6rem;
    padding-bottom: 4rem;
    outline: none;

    ${MSHeaderContainer} {
      padding: 4rem 4rem 2rem;

      ${MSHeaderPosition} {
        gap: 1.6rem;
      }
    }

    ${SCMessageCardTextArea} {
      padding: 0 4rem;
      align-items: center;
    }

    ${StyledTextarea} {
      width: 52rem;
      height: 24rem;
      padding-right: 1.2rem;
      margin: 1.6rem 0 2.4rem;
      overflow-y: scroll;
    }

    @media screen and (min-width: 768px) and (max-width: 1248px) {
      ${StyledTextarea} {
        width: 50rem;
        height: 24rem;
      }
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 100vh;
      border-radius: 0;
      ${SCMessageCardTextArea} {
        padding: 0 2.4rem;
      }
      ${StyledTextarea} {
        width: 100%;
        height: calc(100vh - 23.7rem);
        padding-right: 1.2rem;
        margin: 1.6rem 0 2.4rem;
        overflow-y: scroll;
      }
    }
  `,
};

export const SCmessageCardContainer = styled.div`
  ${({ type }) => optionType[type]}
  background-color: ${({ theme }) => theme.colorTheme.white};
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
`;
