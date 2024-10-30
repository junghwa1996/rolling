// 드롭다운
import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  DropdownBtn,
  IconBtn,
  ArrowImg,
  DropdownList,
  DropdownItem,
  DropdownErrMessage,
} from './Dropdown.styles';
import ArrowDown from '../../assets/icon-arrow_down.svg';
import ArrowTop from '../../assets/icon-arrow_top.svg';
import Share from '../../assets/icon-share-24.svg';
import useDeviceType from '../../hooks/useDeviceType';

function Dropdown({
  options, //option 종류
  selectedOption, //선택된 option
  onSelect, //option을 선택하기 위한 event 함수
  disabled,
  $error,
  errMessage = '옵션을 선택해주세요.',
  isIcon,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const deviceType = useDeviceType(); //devicehook 사용

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
          error={$error}
          disabled={disabled}
        />
      ) : (
        <DropdownBtn
          onClick={() => setIsOpen(!isOpen)}
          error={$error}
          disabled={disabled}
          deviceType={deviceType}
        >
          {/* Item 중 가장 처음 값 세팅 */}
          {selectedOption ? selectedOption.value : options[0].value}
          <ArrowImg src={!isOpen ? ArrowDown : ArrowTop} alt="arrow" />
        </DropdownBtn>
      )}

      <DropdownErrMessage error={$error}>{errMessage}</DropdownErrMessage>

      {isOpen && (
        <DropdownList isIcon={isIcon}>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleSelect(option)}
              isIcon={isIcon}
            >
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
  $error: PropTypes.bool,
  errMessage: PropTypes.string,
  isIcon: PropTypes.bool,
};

export default Dropdown;
