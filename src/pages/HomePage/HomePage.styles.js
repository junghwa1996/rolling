import styled, { css } from 'styled-components';

import { font } from '../../styles/fontStyles';

//NOTE - 하나의 feat을 관리하고 있는 Container
export const FeatContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};

  justify-content: space-between;
  padding: 6rem 0;

  width: 100%;
  height: 32.4rem;

  border-radius: 1.6rem;
  background-color: #f6f8ff; //따로 컬러 시스템 적용이 안되어 있음

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    flex-direction: column;
    padding: 4rem 0;

    height: 44rem;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 2.4rem 0;

    height: 35.2rem;
  }

  img {
    width: 72rem;
    height: 20.4rem;

    @media screen and (max-width: 767px) {
      width: 40rem;
      height: 13rem;
    }
  }
`;

//NOTE - feat설명 안에서 설명 부분을 감싸고 있는 Container
export const FeatTextContainer = styled.div`
  ${(props) =>
    props.$index === 0
      ? css`
          margin-left: 6rem;
        `
      : css`
          margin-right: 19rem;
        `}white-space: pre-wrap; //'/n'에 따라 줄바꿈

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    margin-left: 4rem;
    white-space: nowrap; //줄바꿈 없이
  }

  @media screen and (max-width: 767px) {
    width: 27.2rem;
    margin: 0 auto; // 모바일에서는 양쪽 여백이 동일하게 설정됨
  }
`;

//NOTE - feat 설명 안에서 태그 부분
export const TagSection = styled.div`
  color: ${({ theme }) => theme.whiteText};
  ${font['14b']}
`;

//NOTE - feat 설명 안에서 text 부분
export const TextSection = styled.div`
  h2 {
    color: #181818; //DarkMode로 변환이 되어있을 때, 흰색으로 변하게 되는데 배경색 때문에 묻힘
    ${font['24b']}

    @media screen and (max-width: 767px) {
      ${font['18b']}
    }
  }

  p {
    color: ${({ theme }) => theme.secondary};
    ${font['18']}

    @media screen and (max-width: 767px) {
      ${font['15']}
    }
  }
`;
