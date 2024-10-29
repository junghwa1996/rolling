import styled from 'styled-components';

import { StyledInput, StyledErrMessage } from './CommonInput.styles';

export const DropdownBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 32rem;
  margin-bottom: 4px;
  padding: 12px 16px;
  ${StyledInput};
`;

export const IconBtn = styled.img`
  display: block;
  max-width: 5.6rem;
  max-height: 3.6rem;

  padding: 6px 16px;
  ${StyledInput};
`;

export const ArrowImg = styled.img`
  max-width: 1.6rem;
  max-height: 1.6rem;
`;

//SECTION - Dropdown을 내렸을 때 나오는 요소들의 css

export const DropdownList = styled.ul`
  padding: 10px 1px;

  width: ${({ isIcon }) => (isIcon ? '14rem' : '32rem')};

  border: 1px solid #ccc;
  border-radius: 8px;

  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const DropdownItem = styled.li`
  padding: 12px 16px;
  width: ${({ isIcon }) => (isIcon ? '14rem' : '32rem')};

  ${({ theme }) => theme.fontTheme['16Regular']}

  &:hover {
    background-color: ${({ theme }) => theme.colorTheme.grayscale['100']};
  }
`;

export const DropdownErrMessage = styled.p`
  margin-bottom: 4px;
  ${StyledErrMessage};
`;
