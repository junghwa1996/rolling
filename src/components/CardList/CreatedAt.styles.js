import styled from 'styled-components';

import { font } from '../../styles/fontStyles';

export const CreatedAt = styled.span`
  ${font[14]};
  color: ${({ theme }) => theme.dateText};

  @media screen and (max-width: 767px) {
    font-size: ${font[12]};
  }
`;
