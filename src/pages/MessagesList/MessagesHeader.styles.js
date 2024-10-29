import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderPosition = styled.div`
  display: flex;
  gap: 1.4rem;
  flex: 1;
`;
export const HeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin-bottom: 0.6rem;
    ${({ theme }) => theme.fontTheme['20Regular']}
    span {
      margin-right: 0.6rem;
      ${({ theme }) => theme.fontTheme['20Bold']}
    }
  }
`;
