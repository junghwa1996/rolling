import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toast.module.css'; // 스타일 모듈 가져오기
import ICON_CLOSE from '../../assets/icon-close.svg';

function ToastMessages({ closeToast }) {
function ToastMessages({ closeToast }) {
  return (
    <>
      <div className={styles.ToastMessage}>URL이 복사되었습니다!</div>
      <img
        className={styles.CustomCloseButton}
        onClick={closeToast}
        src={ICON_CLOSE}
        alt="닫기"
      />
    </>
  );
}

ToastMessages.propTypes = {
  closeToast: PropTypes.func.isRequired,
}

ToastMessages.propTypes = {
  closeToast: PropTypes.func.isRequired,
};

export default ToastMessages;
