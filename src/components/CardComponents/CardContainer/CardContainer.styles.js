import { cardBaseStyle, CommonCardContainer } from '../Common/Common.styles';
import { boxShadow, borderRadius } from '../styles/Common/mixins';

export const CardContainer = styled(CommonCardContainer)`
  ${boxShadow}
  ${borderRadius}
  width: 38.4rem;
  height: 28rem;
  ${cardBaseStyle}
  ${({ type }) => type === 'card' && 'cursor: pointer;'}
  ${({ type }) => type === 'edit' && 'padding-bottom: 2.4rem;'}
  ${({ type }) => type === 'modal' && 'outline: none;'}
  
  &:hover {
    background-color: ${({ theme }) => theme.background};
    transition: all 0.5s;
  }
`;
