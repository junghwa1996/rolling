import styled from 'styled-components';

export const CreatedAt = styled.span`
  ${({ theme }) => theme.fontTheme['14Regular']};
  color: ${({ theme }) => theme.colorTheme.grayscale[400]};
`;
