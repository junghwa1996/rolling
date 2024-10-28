import styled, { css } from 'styled-components';

export const ArrowArea = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colorTheme.grayscale[200]};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.97);
  }
`;

export const Arrow = styled.div`
  width: 1rem;
  height: 1rem;
  border-right: 2px solid ${({ theme }) => theme.colorTheme.black};
  border-bottom: 2px solid ${({ theme }) => theme.colorTheme.black};

  ${(props) =>
    props.direction === 'left'
      ? css`
          transform: rotate(135deg);
        `
      : css`
          transform: rotate(-45deg);
        `}
`;
