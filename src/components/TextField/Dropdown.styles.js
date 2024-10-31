import styled from 'styled-components';

import { fontStyles } from '../../styles/fontStyles';
import { StyledInput, StyledErrMessage } from './CommonInput.styles';
import { shadowStyles } from '../../styles/shadowStyles';

export const DropdownBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ $deviceType }) => ($deviceType === 'mobile' ? '100%' : '32rem')};
  padding: 1.2rem 1.6rem;
  ${StyledInput};
  cursor: pointer;
`;

export const IconBtn = styled.img`
  display: block;
  max-width: 5.6rem;
  max-height: 3.6rem;

  padding: 0.6rem 1.6rem;
  ${StyledInput};
  cursor: pointer;
`;

export const ArrowImg = styled.img`
  max-width: 1.6rem;
  max-height: 1.6rem;
`;

//SECTION - Dropdown을 내렸을 때 나오는 요소들의 css

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 3;
  margin-top: 0.8rem;
  padding: 1rem 0.1rem;

  width: ${({ isIcon }) => (isIcon ? '14rem' : '32rem')};
  border: 0.1rem solid #ccc;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.background};
  ${shadowStyles['low']}

  cursor: pointer;
`;

export const DropdownItem = styled.li`
  padding: 1.2rem 1.6rem;
  width: ${({ isIcon }) => (isIcon ? '13.8rem' : '31.6rem')};

  ${fontStyles[16]}
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.surface};
  }
`;

export const DropdownErrMessage = styled.p`
  margin-bottom: 0.4rem;
  ${StyledErrMessage};
`;
