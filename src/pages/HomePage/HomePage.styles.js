import styled, { css } from 'styled-components';

import { font } from '../../styles/common/fonts.styles';

//NOTE - 하나의 feat을 관리하고 있는 Container
export const FeatContainer = styled.div`
  flex-direction: ${(props) => props.direction};
  background-color: ${({ theme }) => theme.surface};

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
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
        `}
  white-space: pre-wrap; //'/n'에 따라 줄바꿈

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    margin-left: 4rem;
    white-space: nowrap; //줄바꿈 없이
  }

  @media screen and (max-width: 767px) {
    margin: 0 auto; // 모바일에서는 양쪽 여백이 동일하게 설정됨
    width: 27.2rem;
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
    color: ${({ theme }) => theme.text};
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
