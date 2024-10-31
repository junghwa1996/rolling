/**
 * 드롭다운 단일 컴포넌트
 * Dropdown 컴포넌트
 *
 * 이 컴포넌트는 드롭다운 UI를 렌더링하며, 옵션 선택 및 선택한 옵션 표시, 에러 메시지 표시 등의 기능을 제공합니다.
 * 기본 아이콘 표시 여부, 선택 옵션 및 에러 상태에 따라 UI와 이벤트 동작이 다르게 나타납니다.
 *
 * @component
 * @param {Object} hasOptions - 드롭다운 옵션 데이터 *필수값
 * @param {Array} hasOptions.options - 드롭다운 옵션 배열. 각 옵션은 value와 label 속성을 가집니다.
 * @param {Object} hasOptions.selectedOption - 현재 선택된 옵션 객체 (예: { value: '1', label: 'Option 1' })
 * @param {Function} hasOptions.onSelect - 옵션 선택 시 호출되는 이벤트 핸들러
 * @param {Object} hasError - 에러 상태 및 메시지
 * @param {boolean} hasError.$error - 에러 여부를 나타내는 불리언 값
 * @param {string} hasError.errMessage - 에러 메시지 (에러 상태일 때 표시됨)
 * @param {boolean} disabled - 드롭다운 비활성화 여부
 * @param {boolean} isIcon - 아이콘 모드 여부 (기본 버튼 대신 아이콘 버튼이 표시됨)
 *
 * @example
 * <Dropdown
 *    hasOptions={{
 *       options: [
 *         { value: '1', label: 'Option 1' },
 *         { value: '2', label: 'Option 2' }
 *       ],
 *       selectedOption: { value: '1', label: 'Option 1' },
 *       onSelect: handleSelect
 *    }}
 *    hasError={{ $error: true, errMessage: "옵션을 선택해주세요." }}
 *    disabled={false}
 *    isIcon={true}
 * />
 */

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

Dropdown.propTypes = {
  hasOptions: PropTypes.shape({
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
  }).isRequired,
  hasError: PropTypes.shape({
    $error: PropTypes.bool,
    errMessage: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  isIcon: PropTypes.bool,
};

function Dropdown({
  hasOptions,
  hasError = {
    $error: false,
    errMessage: '옵션을 선택해주세요.',
  },
  disabled,
  isIcon,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const $deviceType = useDeviceType(); //devicehook 사용
  console.log(hasOptions.selectedOption);

  const handleSelect = (option) => {
    hasOptions.onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      {isIcon ? (
        <IconBtn
          src={Share}
          alt="icon"
          onClick={() => setIsOpen(!isOpen)}
          $error={hasError.$error}
          disabled={disabled}
        />
      ) : (
        <DropdownBtn
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          $error={hasError.$error}
          disabled={disabled}
          deviceType={$deviceType}>
          {/* Item 중 가장 처음 값 세팅 */}
          {hasOptions.selectedOption.label
            ? hasOptions.selectedOption.label
            : hasOptions.selectedOption.value || hasOptions.options[0].label}
          <ArrowImg src={!isOpen ? ArrowDown : ArrowTop} alt="arrow" />
        </DropdownBtn>
      )}

      {hasError.$error && (
        <DropdownErrMessage error={hasError.$error}>
          {hasError.errMessage}
        </DropdownErrMessage>
      )}

      {isOpen && (
        <DropdownList isIcon={isIcon}>
          {hasOptions.options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleSelect(option)}
              isIcon={isIcon}>
              {option.value}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </>
  );
}

export default Dropdown;
