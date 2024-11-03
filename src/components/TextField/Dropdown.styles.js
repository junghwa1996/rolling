import styled from 'styled-components';

import { font } from '../../styles/common/fonts.styles';
import { StyledInput, StyledErrMessage } from './CommonInput.styles';
import { shadow } from '../../styles/layout/effect.styles';

export const DropdownBtn = styled.button`
  width: ${({ $deviceType }) => ($deviceType === 'mobile' ? '100%' : '32rem')};
  ${StyledInput};
`;

export const IconBtn = styled.img`
  ${StyledInput};
`;

//SECTION - Dropdown을 내렸을 때 나오는 요소들의 css

export const DropdownList = styled.ul`
  width: ${({ isIcon }) => (isIcon ? '14rem' : '32rem')};

  background-color: ${({ theme }) => theme.background};
  ${shadow['low']}
`;

export const DropdownItem = styled.li`
  width: ${({ isIcon }) => (isIcon ? '13.8rem' : '31.6rem')};

  ${font[16]}

  &:hover {
    background-color: ${({ theme }) => theme.surface};
  }
`;

export const ArrowImg = styled.img`
  transition: transform 0.3s ease; 
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(360deg)')};
`;

export const DropdownErrMessage = styled.p`
  margin-bottom: 0.4rem;
  ${StyledErrMessage};
`;
