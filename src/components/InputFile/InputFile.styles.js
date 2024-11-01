import styled from 'styled-components';

import { font } from '../../styles/fontStyles';

const StyledProfileInfo = styled.p`
  ${font[16]};
  color: ${({ theme }) => theme.secondary};
`;

export { StyledProfileInfo };
