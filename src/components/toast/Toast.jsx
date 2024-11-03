import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Toast.module.css'; // 스타일 모듈 가져오기
import copyUrl from './CopyUrl';
import ToastMessages from './ToastMessages';

// showToast 함수는 이제 기본적으로 export
export const showToast = (content) => {
  copyUrl(content)
    .then(() => {
      toast(
        ({ closeToast }) => (
          <div className={styles.ToastWrapper}>
            <ToastMessages closeToast={closeToast} />
          </div>
        ),
        {
          position: 'bottom-center',
          autoClose: 100000,
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
