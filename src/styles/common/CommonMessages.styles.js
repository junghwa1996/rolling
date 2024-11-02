// src/styles/Common/CommonMessages.styles.js
import styled from 'styled-components';

import { font } from '../fontStyles';

export const CommonMessage = styled.p`
  ${font['16']}
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
`;
