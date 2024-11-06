import React, { useState, useEffect, useRef } from 'react';
import Picker from 'emoji-picker-react';
import PropTypes from 'prop-types';

import { ReactComponent as IconStoke } from '../../assets/icon-stoke.svg';
import Outlined from '../../components/Outlined/Outlined';
import styles from './EmojiPickerComponent.module.css';
import useDeviceType from '../../hooks/useDeviceType';

EmojiPickerComponent.propTypes = {
  onEmojiAdd: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

function EmojiPickerComponent({ onEmojiAdd, isLoading }) {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null); // Picker 외부 클릭을 감지할 ref
  const isDevice = useDeviceType();
  const isMo = isDevice === 'mobile';

  // 외부 클릭 시 Picker를 닫는 함수
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // 마우스 클릭 시 외부 클릭 감지
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // 컴포넌트 언마운트 시 이벤트 리스너 정리
    };
  }, []);

  return (
    <div className={styles.outLinedArea}>
      <Outlined
        size="m"
        color="secondary"
        onClick={() => setShowPicker((prev) => !prev)}
        icon={<IconStoke />}
        disabled={isLoading}>
        {!isMo && '추가'}
      </Outlined>

      {showPicker && (
        <div className={styles.pickerContainer} ref={pickerRef}>
          <Picker onEmojiClick={onEmojiAdd} width="30.6rem" height="39.2rem" />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
