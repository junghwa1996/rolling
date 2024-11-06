import styled, { css } from 'styled-components';
import { boxShadow } from './mixins.styles';

export const applyResponsiveStyles = ({ media }) => {
  if (!media) return null; // null이나 undefined를 처리해줌

  // 폰트 크기 정의
  const pcFont = media?.font?.pc;
  const taFont = media?.font?.ta || pcFont; // tablet이 없으면 pc 폰트 사용
  const moFont = media?.font?.mo || taFont; // mobile이 없으면 tablet 폰트 사용

  // 뷰 스타일 정의
  const pcView = media?.view?.pc;
  const taView = media?.view?.ta || pcView; // tablet이 없으면 pc 스타일 사용
  const moView = media?.view?.mo || taView; // mobile이 없으면 tablet 스타일 사용

  return css`
    /* 데스크탑 */
    @media (min-width: 1024px) {
      ${pcFont
        ? css`
            ${font(pcFont)}
          `
        : ''};
      width: ${pcView?.width || 'auto'};
      height: ${pcView?.height || 'auto'};
    }

    /* 태블릿 */
    @media (min-width: 768px) and (max-width: 1023px) {
      ${taFont
        ? css`
            ${font(taFont)}
          `
        : ''};
      width: ${taView?.width || 'auto'};
      height: ${taView?.height || 'auto'};
    }

    /* 모바일 */
    @media (max-width: 767px) {
      ${moFont
        ? css`
            ${font(moFont)}
          `
        : ''};
      width: ${moView?.width || 'auto'};
      height: ${moView?.height || 'auto'};
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

export const Title = styled.h2`
  ${({ $media }) => $media && applyResponsiveStyles({ media: $media })};

  color: ${({ theme }) => theme.blackText};
`;

export const Desc = styled.p`
  ${({ $media }) => $media && applyResponsiveStyles({ media: $media })};

  color: ${({ theme }) => theme.secondary};
`;

export const Text = styled.p`
  ${({ $media }) => $media && applyResponsiveStyles({ media: $media })};

  color: ${({ theme }) => theme.text};
`;

export const AreaText = styled.p`
  ${({ $media }) => $media && applyResponsiveStyles({ media: $media })};

  color: ${({ theme }) => theme.textarea};
`;

export const Data = styled.p`
  ${({ $media }) => $media && applyResponsiveStyles({ media: $media })};

  color: ${({ theme }) => theme.dateText};
`;

/* 텍스트가 넘칠 경우 생략 부호 (...)을 표시하는 공통 스타일 */
export const ellipsisStyle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
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
