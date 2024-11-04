import styled, { css } from 'styled-components';
import { boxShadow } from './mixins.styles';

export const responsiveFont = ({ $media }) => {
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

export const applyResponsiveStyles = ({ responsive }) => {
  const pcResponsive = responsive?.pc;
  const taResponsive = responsive?.ta || pcResponsive; // tablet이 없으면 pc 폰트 사용
  const moResponsive = responsive?.mo || taResponsive; // mobile이 없으면 tablet 폰트 사용
  return css`
    @media (min-width: 1024px) {
      width: ${pcResponsive?.pc.width || '100%'};
      height: ${pcResponsive?.pc?.height || 'auto'};
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      width: ${taResponsive?.ta?.width || '100%'};
      height: ${taResponsive?.ta?.height || 'auto'};
    }
    @media (max-width: 767px) {
      width: ${moResponsive?.mo?.width || '100%'};
      height: ${moResponsive?.mo?.height || 'auto'};
    }
  `;
};

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

/* 텍스트가 넘칠 경우 생략 부호 (...)을 표시하는 공통 스타일 */
export const ellipsisStyle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  ${font['20b']}
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

export const Title = styled.h2`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.blackText};
`;

export const Desc = styled.p`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.secondary};
`;

export const Text = styled.p`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.text};
`;

export const AreaText = styled.p`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.textarea};
`;

export const Data = styled.p`
  ${({ $media }) => responsiveFont({ $media })};
  color: ${({ theme }) => theme.dateText};
`;
