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
  const buttonRef = useRef(null);
  const isDevice = useDeviceType();
  const isMo = isDevice === 'mobile';

  const togglePicker = () => setShowPicker((prev) => !prev);

  // 외부 클릭 시 Picker를 닫는 함수
  // 외부 클릭 시 Picker를 닫는 함수
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // 이벤트 리스너 항상 추가
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []); // 빈 의존성 배열로 설정하여 한 번만 등록

  return (
    <div className={styles.outLinedArea}>
      <Outlined
        ref={buttonRef}
        size="m"
        color="secondary"
        onClick={togglePicker}
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
