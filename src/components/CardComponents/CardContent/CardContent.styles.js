import styled from 'styled-components';
import ScrollableTextareaLayout from '../../Shared/ScrollableTextarea/ScrollableTextarea';

export const CardContentTextArea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  overflow: hidden;
  gap: 1.6rem ${({ $type }) => $type === 'modal' && 'align-items: center;'};
`;

export const CardContentTextAreaInner = styled(ScrollableTextareaLayout)`
  margin: 1.6rem 0;
`;
