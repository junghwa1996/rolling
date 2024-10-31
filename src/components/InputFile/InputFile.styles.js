import styled from 'styled-components';

const StyledInputFile = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImgSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.6rem;

  p {
    ${({ theme }) => theme.fontTheme['16Regular']}
    color: ${({ theme }) => theme.colorTheme.grayscale[500]}
  }
`;

const StyledImgArea = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 1.2rem;

  img {
    cursor: pointer;
  }
`;
export { StyledInputFile, StyledImgSelectorContainer, StyledImgArea };
