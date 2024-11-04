import styled from 'styled-components';

import { Text } from '../../../styles/common/Common.styles';

export const ModalContentLayout = styled.div`
  text-align: center;
  max-height: 50rem;
  padding: 1.6rem 4rem 0;
`;

export const ModalContentText = styled(Text)`
  width: 100%;
  max-height: 40rem;
  overflow: hidden;
`;
