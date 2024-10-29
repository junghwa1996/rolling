import styled, { css } from 'styled-components';

// 말 줄임표
const ellipsisStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

// 타입에 따른 스타일
const optionType = {
  card: css`
    width: 33.6rem;
    height: 10.6rem;
  `,
  modal: css`
    width: 52rem;
    height: 24rem;
  `,
  edit: css`
    width: 33.6rem;
    height: 10.6rem;
  `,
};

export const StyledTextarea = styled.p`
  ${({ type }) => optionType[type]}

  word-break: break-all;
  padding-right: 1.2rem;
  border: none;
  outline: none;
  resize: none;

  ${({ type }) => (type === 'modal' ? 'overflow-y: scroll;' : ellipsisStyle)}

  ${({ theme }) => theme.fontTheme['18Regular']}

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
