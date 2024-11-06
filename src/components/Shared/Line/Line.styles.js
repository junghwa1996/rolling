import styled from 'styled-components';

export const StyledLine = styled.hr`
  margin: auto;
  ${({ $column }) =>
    $column ? 'width: 1px; height: 100px' : 'width: 100%; height: 1px;'}
`;
