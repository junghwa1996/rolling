import styled from 'styled-components';

import { fontStyles } from '../../styles/fontStyle';

export const StyledCreatedAt = styled.span`
  ${fontStyles[14]};
  color: ${({ theme }) => theme.colorTheme.grayscale[400]};

  @media screen and (max-width: 767px) {
    font-size: ${fontStyles[12]};
  }
`;
