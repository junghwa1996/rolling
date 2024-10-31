import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { ToastWrapper } from './Toast.Styles';
import CopyUrl from './CopyUrl'; // URL 복사를 위한 함수
import ToastMessages from './ToastMessages';

// 다양한 내용을 복사하고 토스트 알림을 표시하는 함수
export const showToast = (content) => {
  CopyUrl(content) // content를 매개변수로 사용
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

export default function Toast() {
  return null; // ToastContainer는 App.jsx에서 처리
}
