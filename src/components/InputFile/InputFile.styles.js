import styled from 'styled-components';

const StyledInputFile = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImgSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 26px;

  > p {
    ${({ theme }) => theme.fontTheme['16Regular']}
    color: ${({ theme }) => theme.colorTheme.grayscale[500]}
  }
`;

const StyledImgArea = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 12px;

  img {
    cursor: pointer;
  }
`;
export { StyledInputFile, StyledImgSelectorContainer, StyledImgArea };
