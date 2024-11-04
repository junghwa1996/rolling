import styled from 'styled-components';
import { ScrollableTextarea } from '../../Shared/ScrollableTextarea/ScrollableTextarea.styles';

export const CardContentTextArea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  padding: 0 2.4rem;
  ${({ $type }) => $type === 'modal' && 'align-items: center;'}
`;

export const CardScrollTextarea = styled(ScrollableTextarea)`
  margin: 1.6rem 0;
`;
