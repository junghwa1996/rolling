import { styled, css } from 'styled-components';

import { shadow as shadows } from '../shadowStyles';

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

export const Line = styled.div`
  background-color: ${({ theme }) => theme.line};
  ${(props) =>
    props.$column ? 'width: 100%; height: 2px;' : 'width: 2px; height: 100%'}
`;
