import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import ArrowDown from '../../styles/assets/icons/arrow_down.svg';
import ArrowTop from '../../styles/assets/icons/arrow_top.svg';

const DropDownBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 320px; //임의의 width
  padding: 12px 16px;

  border: 1px solid ${({ theme }) => theme.colorTheme.grayscale['300']};
  border-radius: 8px;

  color: ${({ theme }) => theme.colorTheme.grayscale['500']}; //#555555

  ${({ theme }) => theme.fontTheme['16Regular']}

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colorTheme.grayscale['500']};
    color: ${({ theme }) => theme.colorTheme.grayscale['900']};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.colorTheme.grayscale['700']};
    color: ${({ theme }) => theme.colorTheme.grayscale['900']};
  }

  //focus, disabled 상태일 때는 hover하지 않기
  &:not(:focus, :disabled):hover {
    border: 1px solid ${({ theme }) => theme.colorTheme.grayscale['500']};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.colorTheme.grayscale['300']};
    background-color: ${({ theme }) => theme.colorTheme.grayscale['100']};
  }
`;

const ArrowImg = styled.img`
  max-width: 16px;
  max-height: 16px;
`;

function Dropdown({ options, selectedOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownBtn onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.value : options[0].value}
        <ArrowImg src={!isOpen ? ArrowDown : ArrowTop} alt="arrow" />
      </DropDownBtn>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  selectedOption: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onSelect: PropTypes.func,
};

export default Dropdown;
