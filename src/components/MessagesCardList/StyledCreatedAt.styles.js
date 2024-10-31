import styled from 'styled-components';

import { fontStyles } from '../../styles/fontStyles';

export const StyledCreatedAt = styled.span`
  ${fontStyles[14]};
  color: ${({ theme }) => theme.dateText};

  @media screen and (max-width: 767px) {
    font-size: ${fontStyles[12]};
  }
`;
