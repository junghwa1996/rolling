import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import { InputStyles, ErrMessageStyles } from './Input.styles';
import ArrowDown from '../../assets/icon-arrow_down.svg';
import ArrowTop from '../../assets/icon-arrow_top.svg';
import Share from '../../assets/icon-share-24.svg';
import { tm_shadow } from '../../utils/themeUtils';

const DropdownBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 320px;
  margin-bottom: 4px;
  padding: 12px 16px;
  ${InputStyles};
`;

const IconBtn = styled.img`
  display: block;
  max-width: 5.6rem;
  max-height: 3.6rem;

  padding: 6px 16px;
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

  //box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
  ${tm_shadow('0,2,12,0.08')}
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

function Dropdown({
  options, //option 종류
  selectedOption, //선택된 option
  onSelect, //option을 선택하기 위한 event 함수
  disabled,
  error,
  errMessage = '옵션을 선택해주세요.',
  isIcon,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      {isIcon ? (
        <IconBtn
          src={Share}
          alt="icon"
          onClick={() => setIsOpen(!isOpen)}
          error={error}
          disabled={disabled}
        />
      ) : (
        <DropdownBtn
          onClick={() => setIsOpen(!isOpen)}
          error={error}
          disabled={disabled}>
          {/* Item 중 가장 처음 값 세팅 */}
          {selectedOption ? selectedOption.value : options[0].value}
          <ArrowImg src={!isOpen ? ArrowDown : ArrowTop} alt="arrow" />
        </DropdownBtn>
      )}

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
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errMessage: PropTypes.string,
  isIcon: PropTypes.bool,
};

export default Dropdown;
