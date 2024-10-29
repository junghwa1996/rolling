import styled from 'styled-components';

import { StyledInput, StyledErrMessage } from './CommonInput.styles';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const InputBox = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  ${StyledInput}
`;

export const InputErrMessage = styled.p`
  ${StyledErrMessage}
`;
