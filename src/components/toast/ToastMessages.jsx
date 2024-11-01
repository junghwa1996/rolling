import React from 'react';
import PropTypes from 'prop-types'; // prop-types를 먼저 임포트

import { ToastMessage, CustomCloseButton, ToastWrapper } from './Toast.Styles'; // 빈 줄 추가

function ToastMessages({ closeToast }) {
  return (
    <ToastWrapper>
      <ToastMessage>URL이 복사되었습니다!</ToastMessage>
      <CustomCloseButton
        src="path/to/your/icon-close.png" // 닫기 아이콘 경로
        alt="닫기"
        onClick={closeToast}
      />
    </ToastWrapper>
  );
}

// PropTypes 정의
ToastMessages.propTypes = {
  closeToast: PropTypes.func.isRequired,
};

export default ToastMessages;
