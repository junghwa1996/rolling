import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import { InputStyles, ErrMessageStyles } from './Input.styles';
import ArrowDown from '../../styles/assets/icons/arrow_down.svg';
import ArrowTop from '../../styles/assets/icons/arrow_top.svg';

const DropdownBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 320px;
  margin-bottom: 4px;
  ${InputStyles};
`;

const ArrowImg = styled.img`
  max-width: 16px;
  max-height: 16px;
`;

const DropdownList = styled.ul`
  padding: 10px 1px;

  max-width: 320px;

  border: 1px solid #ccc;
  border-radius: 8px;

  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
`;

const DropdownItem = styled.li`
  padding: 12px 16px;
  max-width: 320px;

  ${({ theme }) => theme.fontTheme['16Regular']}

  &:hover {
    background-color: ${({ theme }) => theme.colorTheme.grayscale['100']};
  }
`;

const DropdownErrMessage = styled.p`
  margin-bottom: 4px;
  ${ErrMessageStyles};
`;

function Dropdown({ options, selectedOption, onSelect, error, errMessage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <DropdownBtn onClick={() => setIsOpen(!isOpen)} error={error}>
        {/* Item 중 가장 처음 값 세팅 */}
        {selectedOption ? selectedOption.value : options[0].value}
        <ArrowImg src={!isOpen ? ArrowDown : ArrowTop} alt="arrow" />
      </DropdownBtn>

      <DropdownErrMessage error={error}>{errMessage}</DropdownErrMessage>

      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option.value}
            </DropdownItem>
          ))}
        </DropdownList>
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
  error: PropTypes.bool,
  errMessage: PropTypes.string,
};

// 기본값 설정
Dropdown.defaultProps = {
  error: false,
  errMessage: '옵션을 선택해주세요.',
};

export default Dropdown;
