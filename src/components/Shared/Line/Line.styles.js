import styled from 'styled-components';

export const StyledLine = styled.div`
  background-color: ${({ theme }) => theme.line};
  ${(props) =>
    props.$column ? 'width: 100%; height: 2px;' : 'width: 2px; height: 100%'}
`;
