import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import copyUrl from './CopyUrl';
import ToastMessages from './ToastMessages';

// showToast 함수는 이제 기본적으로 export
export const showToast = (content) => {
  copyUrl(content)
    .then(() => {
      toast(({ closeToast }) => <ToastMessages closeToast={closeToast} />, {
        closeButton: false,
        position: 'bottom-center',
        autoClose: 100000,
        closeOnClick: false,
        draggable: true,
        hideProgressBar: true,
      });
    })
    .catch((error) => {
      console.error('Toast error:', error);
    });
};
