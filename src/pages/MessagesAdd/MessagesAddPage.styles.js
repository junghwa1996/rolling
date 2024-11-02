import styled from 'styled-components';

import { font } from '../../styles/fontStyles';

const StyledLabel = styled.label`
  display: inline-block;
  ${font['24b']};
  margin: 5rem 0 1.2rem;
  color: ${({ theme }) => theme.text};
  span {
    display: block;
    margin: 0.4rem 0 1.2rem;
    ${font[16]}
    color: ${({ theme }) => theme.secondary};
  }
`;

export { StyledLabel };
