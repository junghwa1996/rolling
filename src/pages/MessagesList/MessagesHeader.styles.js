import styled from 'styled-components';

export const MSHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const MSHeaderPosition = styled.div`
  display: flex;
  gap: 1.4rem;
  flex: 1;
`;
export const MSHeaderArea = styled.div`
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
