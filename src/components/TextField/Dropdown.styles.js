import styled, { css } from 'styled-components';

import { font } from '../../styles/common/fonts.styles';
import { StyledInput, StyledErrMessage } from './CommonInput.styles';
import { boxShadow } from '../../styles/common/mixins.styles';

export const DropdownBtn = styled.button`
  width: ${({ $deviceType }) => ($deviceType === 'mobile' ? '100%' : '32rem')};
  ${StyledInput};
`;

export const IconBtn = styled.div`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s;
  color: ${({ theme }) => theme.text};
  ${StyledInput};
`;

export const ArrowImg = styled.img`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(360deg)')};
`;

//SECTION - Dropdown을 내렸을 때 나오는 요소들의 css

export const DropdownList = styled.ul`
  width: ${({ isIcon }) => (isIcon ? '14rem' : '32rem')};
  ${({ isIcon }) =>
    isIcon &&
    css`
      right: 0px;
    `}

  background-color: ${({ theme }) => theme.background};
  ${boxShadow}
`;

export const DropdownItem = styled.li`
  width: ${({ isIcon }) => (isIcon ? '13.8rem' : '31.6rem')};

  ${font[16]}

  &:hover {
    background-color: ${({ theme }) => theme.surface};
    width: ${({ isIcon }) => isIcon && '13.6rem'};
  }
`;

export const DropdownErrMessage = styled.p`
  margin-bottom: 0.4rem;
  ${StyledErrMessage};
`;
