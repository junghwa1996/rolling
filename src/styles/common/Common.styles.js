import { styled, css } from 'styled-components';

// 공통 Font Family 정의
export const fontFamily = {
  'Noto Sans': "'Noto Sans KR', sans-serif",
  나눔명조: "'Nanum Myeongjo', serif",
  '나눔손글씨 손편지체': "'Handletter'",
};

// 폰트 사이즈 정의 함수
const font = (size) => {
  const baseSize =
    typeof size === 'string' ? parseInt(size.replace('b', '')) : size;

  const letterSpacing =
    baseSize <= 14 ? 'var(--ls-small)' : 'var(--ls-default)';
  const lineHeight = `var(--lh-${baseSize})`;
  const fontSize = `var(--fs-${baseSize})`;
  const fontWeight = typeof size === 'string' && size.includes('b') ? 700 : 400;

  return `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
};

const responsiveFont = ({ $media }) => {
  const pcFont = $media?.pc;
  const tabletFont = $media?.ta || pcFont; // tablet이 없으면 pc 폰트 사용
  const mobileFont = $media?.mo || tabletFont; // mobile이 없으면 tablet 폰트 사용

  return css`
    @media (min-width: 1024px) {
      ${font(pcFont)};
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      ${font(tabletFont)};
    }
    @media (max-width: 767px) {
      ${font(mobileFont)};
    }
  `;
};

export const title = styled.h2`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.blackText};
`;

export const desc = styled.p`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.secondary};
`;

export const text = styled.p`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.text};
`;

export const areaText = styled.p`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.textarea};
`;

export const data = styled.p`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.dateText};
`;

export const line = styled.div`
  background-color: ${({ theme }) => theme.line};
  ${(props) =>
    props.$column ? 'width: 100%; height: 2px;' : 'width: 2px; height: 100%'}
`;

/* 텍스트가 넘칠 경우 생략 부호 (...)을 표시하는 공통 스타일 */
export const ellipsisStyle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  ${font['20b']}
`;

export const flexColumnCentered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const boxShadow = css`
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
`;

export const cardBaseStyle = css`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  ${boxShadow}
  background-color: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 35.2rem;
    height: 28.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32rem;
    height: 23rem;
  }
`;
