import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledToastContainer, ToastWrapper } from './Toast.Styles';
import CopyUrl from './CopyUrl';
import ToastMessages from './ToastMessages';

// showToast 함수는 이제 기본적으로 export
export const showToast = (content) => {
  CopyUrl(content)
    .then(() => {
      toast(
        ({ closeToast }) => (
          <ToastWrapper>
            <ToastMessages closeToast={closeToast} />
          </ToastWrapper>
        ),
        
        {
          position: 'bottom-center',
          autoClose: 5000,
          closeOnClick: false,
          draggable: true,
          hideProgressBar: true,
        },
      );
    })
    .catch((error) => {
      console.error('Toast error:', error);
    });
};

// Toast 컴포넌트에서 handleShowToast 제거
function Toast() {
  return <StyledToastContainer />; // StyledToastContainer를 반환
}

export default Toast;
