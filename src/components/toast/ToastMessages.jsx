import React from 'react';
import { ToastMessage, CustomCloseButton } from './ToastStyles';

const ToastMessages = ({ closeToast }) => {
  return (
    <>
      <ToastMessage>URL이 복사되었습니다!</ToastMessage>
      <CustomCloseButton
        onClick={closeToast}
        src="path/to/your/icon-close.png"
        alt="닫기"
      />
    </>
  );
};

export default ToastMessages;
