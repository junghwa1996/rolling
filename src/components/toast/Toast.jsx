import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ToastWrapper } from './ToastStyles';
import CopyUrl from './CopyUrl';
import ToastMessages from './ToastMessages';

const showToast = (url) => {
  CopyUrl(url)
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
      console.error('Toast error:', error); // 오류 발생 시 로깅
    });
};

function Toast({ onShowToast }) {
  return (
    <>
      <button onClick={() => onShowToast(showToast)}>토스트 표시</button>
      <ToastContainer />
    </>
  );
}

export default Toast;
