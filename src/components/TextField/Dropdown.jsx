// 드롭다운
/**
 * 메시지 카드 단일 컴포넌트
 * MessageCard 컴포넌트
 *
 * 이 컴포넌트는 메시지 카드를 렌더링하는 컴포넌트로,
 * 'card', 'modal', 'edit' 타입에 따라 각각 다른 UI와 이벤트 동작을 제공합니다.
 *
 * @component
 * @param {string} type - 메시지 카드의 타입 (예: 'card', 'modal', 'edit') *필수값
 * @param {Object} messageData - 메시지 데이터 객체 *필수값
 * @param {string} messageData.content - 메시지 내용 (HTML 형식으로 삽입 가능)
 * @param {string} messageData.createdAt - 메시지 생성일
 * @param {Object} onEvent - 이벤트 핸들러 객체
 * @param {Function} onEvent.modal - 모달을 여는 이벤트 핸들러 (카드 타입일 때 동작)
 * @param {Function} onEvent.close - 모달을 닫는 이벤트 핸들러 (모달 타입일 때 동작)
 *
 * @example
 * <MessageCard
 *    type="modal"
 *    messageData={{ content: "<p>Hello World</p>", createdAt: "2024-10-30T01:51:19.832098Z" }}
 *    onEvent={{ modal: handleModalOpen, close: handleClose }}
 * />
 * */

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
  }),
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
