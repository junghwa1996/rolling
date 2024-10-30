import styled from 'styled-components';

const StyledMessagesAddPage = styled.div`
  width: 720px;
  margin: 0 auto;

  button[type='submit'] {
    margin-top: 62px;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  ${({ theme }) => theme.fontTheme['24Bold']}
  margin: 5rem 0 1.2rem;
`;

export { StyledMessagesAddPage, StyledLabel };
