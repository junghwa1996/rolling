import styled from 'styled-components';

import Button from '../../components/Button/Button'; 

export const PickerButton = styled(Button)`
  width: 88px;
  height: 36px;
  padding: 6px 16px;
  gap: 4px; 
  border-radius: 6px 0 0 0;
  background: ${({ theme }) =>
    theme.colorTheme.white}; 
  border: 1px solid ${({ theme }) => theme.colorTheme.grayscale[300]}; 
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding: 2.17px 1.4px 1.68px 1.1px;
  opacity: 1;
`;

export const Text = styled.span`
  flex: 1;
  opacity: 1;
  font-family: 'Pretendard';
  ${({ theme }) =>
    theme.fontTheme['16Bold']}; 
  text-align: left; 
  white-space: nowrap; 
  color: ${({ theme }) =>
    theme.colorTheme.black}; 
`;
