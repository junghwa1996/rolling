import React from 'react';
import styles from './LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.spinnerArea}>
      <div className={styles.spinnerInner}>
        <div className={styles.spinnerCircle}></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
