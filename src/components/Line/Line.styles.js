import styled from 'styled-components';

export const StyledLine = styled.div`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colorTheme.grayscale[200]};
`;
