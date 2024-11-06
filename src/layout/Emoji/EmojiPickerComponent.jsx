import React, { useState, useRef } from 'react';
import Picker from 'emoji-picker-react';
import PropTypes from 'prop-types';

import { ReactComponent as IconStoke } from '../../assets/icon-stoke.svg';
import Outlined from '../../components/Outlined/Outlined';
import styles from './EmojiPickerComponent.module.css';
import useDeviceType from '../../hooks/useDeviceType';
import useClickOutside from '../../hooks/useClickOutside'; // 외부 클릭 감지 훅 추가

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

  useClickOutside(pickerRef, () => setShowPicker(false));
  const togglePicker = () => setShowPicker((prev) => !prev);

  return (
    <div className={styles.outLinedArea} ref={pickerRef}>
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
        <div className={styles.pickerContainer}>
          <Picker onEmojiClick={onEmojiAdd} width="30.6rem" height="39.2rem" />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
