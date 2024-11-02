import styled, { css } from 'styled-components';

import { blur } from '../../styles/blurStyles';

export const ArrowArea = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.line};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.97);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: white;
    filter: ${blur};
    opacity: 0.9;
    z-index: -1;
  }
`;

export const Arrow = styled.div`
  width: 1rem;
  height: 1rem;
  border-right: 2px solid var(--gray-700);
  border-bottom: 2px solid var(--gray-700);

  ${(props) =>
    props.direction === 'left'
      ? css`
          transform: rotate(135deg);
        `
      : css`
          transform: rotate(-45deg);
        `}
`;
