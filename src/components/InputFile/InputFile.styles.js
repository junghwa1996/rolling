import styled from 'styled-components';

import { fontStyles } from '../../styles/fontStyles';

const StyledInputFile = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImgSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.6rem;

  p {
    ${fontStyles[16]};
    color: ${({ theme }) => theme.secondary};
  }
`;

const StyledImgArea = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 1.2rem;

  img {
    cursor: pointer;
  }

  /* 모바일 */
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;
export { StyledInputFile, StyledImgSelectorContainer, StyledImgArea };
