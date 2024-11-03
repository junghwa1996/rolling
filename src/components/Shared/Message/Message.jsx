import styled from 'styled-components';

import { font } from '../../../styles/common/fonts';

export const Message = styled.p`
  ${font['16']};
  color: ${({ theme, $messageType }) => {
    switch ($messageType) {
      case 'error':
        return theme.errorText;
      case 'primary':
        return theme.primaryText;
      case 'secondary':
        return theme.secondaryText;
      default:
        return theme.primaryText;
    }
  }};
  margin: 1rem 0;
`;
