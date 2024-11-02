import React from 'react';
import PropTypes from 'prop-types';

import { ToastMessage, CustomCloseButton } from './Toast.Styles';
import ICON_CLOSE from '../../assets/icon-close.svg';

function ToastMessages({ closeToast }) {
  return (
    <>
      <ToastMessage>URL이 복사되었습니다!</ToastMessage>
      <CustomCloseButton onClick={closeToast} src={ICON_CLOSE} alt="닫기" />
    </>
  );
}

ToastMessages.propTypes = {
  closeToast: PropTypes.func.isRequired,
};

export default ToastMessages;
