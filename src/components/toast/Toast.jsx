import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ToastWrapper } from './Toast.Styles';
import CopyUrl from './CopyUrl'; // 여전히 URL 복사를 위한 함수
import ToastMessages from './ToastMessages';

// 다양한 내용을 복사하고 토스트 알림을 표시하는 함수
const showToast = (content) => {
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

/**
 * Toast 컴포넌트
 *
 * onShowToast prop을 통해 복사할 내용을 받아오는 함수를 전달합니다.
 * handleShowToast는 onShowToast를 prop으로 호출하고 showToast 함수를 호출합니다.
 *
 * 예시:
 * <Toast onShowToast={(content) => console.log(`복사할 내용: ${content}`)} />
 */
function Toast({ onShowToast }) {
  // 토스트를 보여주기 위한 핸들러
  const handleShowToast = (content) => {
    onShowToast(content); // onShowToast 호출하여 내용을 받음
    showToast(content); // showToast 함수 호출하여 내용 복사 및 토스트 표시
  };

  return <ToastContainer />; // ToastContainer를 반환
}

export default Toast;
