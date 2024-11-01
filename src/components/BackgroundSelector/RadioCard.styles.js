import styled, { css } from 'styled-components';

import ICON_CHECKED from '../../assets/icon-checked.svg';

const StyleButton = styled.button`
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  border: none;
  padding: 0;
  overflow: hidden;
  position: relative;
  /* Tab 상태 값에 따라 background 컬러, 이미지 동적 적용 */
  ${({ $activeTab, color, $item }) =>
    $activeTab === '컬러'
      ? css`
          background: ${color};
        `
      : css`
          background: url(${$item}) no-repeat center;
          background-size: cover;
        `}

  /* 이미지 Tab에서만 이미지 선택 시 투명도 조절 추가 */
  ${({ $activeTab }) =>
    $activeTab === '컬러'
      ? css``
      : css`
          &.selected::after {
            content: '';
            background: #fff;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            opacity: 0.3;
          }
        `}

  &::before {
    content: '';
    display: inline-block;
    width: 4.4rem;
    height: 4.4rem;
    background: url(${ICON_CHECKED});
    background-size: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5); /* 초기 크기를 작게 설정 */
    opacity: 0; /* 초기에는 투명 */
    z-index: 2;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  &.selected::before {
    opacity: 1; /* 선택될 때 서서히 보이게 */
    transform: translate(-50%, -50%) scale(1); /* 원래 크기로 확대 */
  }
`;

export { StyleButton };
