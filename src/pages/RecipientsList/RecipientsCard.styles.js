import styled, { css } from 'styled-components';

import POLYGON_TRIANGLE from '../../assets/RecipientsList/RecipientsCard/bg-polygon-triangle.svg';

const colorStyles = {
  green: css`
    width: 33.6rem;
    height: 16.9rem;
    top: 45%;
    right: -70%;
    border-radius: 9.05rem;
  `,
  purple: css`
    width: 33.6rem;
    height: 16.9rem;
    top: 45%;
    right: -70%;
    border-radius: 9.05rem;
  `,
  beige: css`
    width: 33.2rem;
    height: 31.8rem;
    top: 45%;
    right: -70%;
    border-radius: 5.1rem;
  `,
  blue: css`
    width: 30.6rem;
    height: 27.9rem;
    top: 45%;
    right: -40%;
    background: url(${POLYGON_TRIANGLE}) no-repeat center/contain;
  `,
};

const colorShape = (color) => colorStyles[color];

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  padding: 3rem 2.4rem 2rem;
  width: 27.5rem;
  height: 26rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.6rem;
  box-shadow: 0, 0.2, 1.2rem, 0, rgba(0, 0, 0, 0.08);
  background-color: ${({ theme, color }) => theme.colorTheme[color]?.[200]};
  &::before {
    position: absolute;
    top: 45%;
    right: -40%;
    content: '';
    background-color: ${({ theme, color }) => theme.colorTheme[color]?.[300]};
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
