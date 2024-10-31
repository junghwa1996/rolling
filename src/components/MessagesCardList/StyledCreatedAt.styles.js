import styled from 'styled-components';

export const StyledCreatedAt = styled.span`
  ${({ theme }) => theme.fontTheme['14Regular']};
  color: ${({ theme }) => theme.colorTheme.grayscale[400]};

  @media screen and (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontTheme['12Regular']};
  }
`;
