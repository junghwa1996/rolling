import styled from 'styled-components';

import { Message } from './Message';
import { font } from '../../../styles/common/fonts.styles';

export const Message = styled.p`
  color: var(--gray-400);
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
