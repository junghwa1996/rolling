import styled from 'styled-components';

import { StyledInput, StyledErrMessage } from './CommonInput.styles';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const InputBox = styled.input`
  width: 100%;
  ${StyledInput}
`;

const InputErrMessage = styled.p`
  ${StyledErrMessage}
`;
