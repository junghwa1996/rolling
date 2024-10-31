import styled, { css } from 'styled-components';

import { fontStyles } from '../../styles/fontStyles';

const ellipsisStyle = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const MSHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const MSHeaderPosition = styled.div`
  display: flex;
  flex: 1;
`;
export const MSHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    ${ellipsisStyle}
    margin-bottom: 0.6rem;
    width: 90%;
    ${fontStyles['20b']}
    span {
      margin-right: 0.6rem;
      ${fontStyles[20]};
    }
  }

  @media screen and (max-width: 767px) {
    h3 {
      ${fontStyles['20b']};
      span {
        margin-right: 0.6rem;
        ${fontStyles[20]};
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
