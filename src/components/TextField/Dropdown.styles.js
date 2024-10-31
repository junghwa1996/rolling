import styled from 'styled-components';

import { StyledInput, StyledErrMessage } from './CommonInput.styles';

export const DropdownBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ $deviceType }) => ($deviceType === 'mobile' ? '100%' : '32rem')};
  padding: 1.2rem 1.6rem;
  ${StyledInput};
`;

export const IconBtn = styled.img`
  display: block;
  max-width: 5.6rem;
  max-height: 3.6rem;

  padding: 0.6rem 1.6rem;
  ${StyledInput};
`;

export const ArrowImg = styled.img`
  max-width: 1.6rem;
  max-height: 1.6rem;
`;

//SECTION - Dropdown을 내렸을 때 나오는 요소들의 css

export const DropdownList = styled.ul`
  padding: 1rem 0.1rem;

  width: ${({ isIcon }) => (isIcon ? '14rem' : '32rem')};

  border: 0.1rem solid #ccc;
  border-radius: 0.8rem;

  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const DropdownItem = styled.li`
  padding: 1.2rem 1.6rem;

  width: ${({ isIcon }) => (isIcon ? '14rem' : '32rem')};

  ${({ theme }) => theme.fontTheme['16Regular']}

  &:hover {
    background-color: ${({ theme }) => theme.colorTheme.grayscale['100']};
  }
`;

export const DropdownErrMessage = styled.p`
  margin-bottom: 0.4rem;
  ${StyledErrMessage};
`;
