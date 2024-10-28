import styled from 'styled-components';

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 9px;
  }
`;

export const LogoText = styled.span`
  ${({ theme }) => theme.fontTheme[`20Bold`]};
  color: #4a494f;
`;
