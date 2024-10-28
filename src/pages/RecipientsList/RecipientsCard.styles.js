import styled, { css } from 'styled-components';

const colorStyles = {
  green: css`
    width: 33.6rem;
    height: 16.9rem;
    border-radius: 9.05rem;
  `,
  purple: css`
    width: 33.6rem;
    height: 16.9rem;
    border-radius: 9.05rem;
  `,
  beige: css`
    width: 33.2rem;
    height: 31.8rem;
    border-radius: 5.1rem;
  `,
  blue: css`
    width: 30.6rem;
    height: 27.9rem;
    border-radius: 20% / 15%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  `,
};

const colorShape = (color) => colorStyles[color] || colorStyles.blue;

export const Card = styled.div`
  position: relative;
  /* overflow: hidden; */
  padding: 3rem 2.4rem 2rem;
  width: 27.5rem;
  height: 26rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.6rem;
  box-shadow: 0, 0.2, 1.2rem, 0, rgba(0, 0, 0, 0.08);
  background-color: ${({ theme, color }) =>
    theme.colorTheme[color]?.[200] || theme.colorTheme.blue[200]};
  &::before {
    position: absolute;
    bottom: -10rem;
    right: -50rem;
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
    ${({ color }) => colorShape(color)}
  }
`;
export const CardArea = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  h3 {
    ${({ theme }) => theme.fontTheme['24Bold']}
  }
`;

export const EmojiArea = styled.div`
  display: flex;
  gap: 0.8rem;
`;
