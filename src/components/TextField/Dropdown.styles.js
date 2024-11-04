import styled from 'styled-components';

import { font } from '../../styles/common/fonts.styles';
import { StyledInput, StyledErrMessage } from './CommonInput.styles';
import { shadow } from '../../styles/layout/effect.styles';

export const DropdownBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ $deviceType }) => ($deviceType === 'mobile' ? '100%' : '32rem')};
  padding: 1.2rem 1.6rem;
  ${StyledInput};
  cursor: pointer;
`;

export const IconBtn = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.6rem 1.6rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  transition: all 0.3s;
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.buttongray};
  }

  &:active,
  &:focus:active {
    background-color: ${({ theme }) => theme.buttongray};
    border-color: ${({ theme }) => theme.border};
  }

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.whiteText};
    cursor: not-allowed;
  }
  @media (max-width: 767px) {
    padding: 0.6rem 0.6rem;
  }
`;

export const IconArea = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2rem;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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
  ${shadow['low']}

  cursor: pointer;
`;

export const DropdownItem = styled.li`
  padding: 1.2rem 1.6rem;
  width: ${({ isIcon }) => (isIcon ? '13.8rem' : '31.6rem')};

  ${font[16]}
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.surface};
  }
`;

export const DropdownErrMessage = styled.p`
  margin-bottom: 0.4rem;
  ${StyledErrMessage};
`;
