import React from 'react';
import PropTypes from 'prop-types';
import { ToastWrapper, ToastMessage } from './Toast.Styles'; // 스타일 컴포넌트 import
import { ReactComponent as ICON_CLOSE } from '../../assets/icon-close.svg';
import { ReactComponent as ICON_COMPLETED } from '../../assets/icon-completed.svg';

function ToastMessages({ closeToast }) {
  return (
    <ToastWrapper>
      <ICON_COMPLETED alt="완료" />
      <ToastMessage>URL이 복사되었습니다!</ToastMessage>
      <ICON_CLOSE alt="닫기" onClick={closeToast} />
    </ToastWrapper>
  );
}

ToastMessages.propTypes = {
  closeToast: PropTypes.func.isRequired,
};

export default ToastMessages;
