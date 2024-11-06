import styled, { css } from 'styled-components';

import {
  media,
  responsiveGridColumns,
} from '../../../styles/common/media.styles';
import { StyledLine } from '../../Shared/Line/Line.styles';

export const CardContainer = styled.div`
  width: 38.4rem;
  height: auto;
  padding: 2.8rem 2.4rem 2.4rem;
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  ${({ type }) => type === 'card' && 'cursor: pointer;'}
  ${({ type }) => type === 'edit' && 'padding-bottom: 2.4rem;'}
  ${({ type }) =>
    type === 'modal' &&
    'outline: none; width: 60rem; height: 47.6rem;  padding: 4rem 4rem 2rem;'}
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => theme.background};
    transition: all 0.5s;
  }

  ${media.ta`
    width: 35.2rem;
    height: 28.4rem;
    ${({ type }) => type === 'modal' && 'width: 60rem; height: 47.6rem;'}
  `}

  ${media.mo`
    width: 32rem;
    height: 23rem;

    ${({ type }) =>
      type === 'modal' &&
      css`
        width: auto;
        height: auto;
        overflow: hidden;
        padding: 2rem;
      `}
  `}
`;

export const CardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem 2.4rem;

  ${responsiveGridColumns.desktop}
  ${responsiveGridColumns.tablet}
  ${responsiveGridColumns.mobile}

  @media screen and (max-width: 1248px) {
    gap: 1.6rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardLine = styled(StyledLine)`
  margin: 1.6rem 0;
`;
