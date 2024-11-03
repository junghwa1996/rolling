import styled from 'styled-components';

export const StyledLine = styled.hr`
  background-color: ${({ theme }) => theme.line};
  margin: auto;
  ${(props) =>
    props.$column ? 'width: 100%; height: 1px;' : 'width: 1px; height: 100%'}
`;
