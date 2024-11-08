import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import Picker from 'emoji-picker-react';
import PropTypes from 'prop-types';

import { ReactComponent as IconStoke } from '../../assets/icon-stoke.svg';
import Outlined from '../../components/Outlined/Outlined';
import styles from './EmojiPickerComponent.module.css';
import useDeviceType from '../../hooks/useDeviceType';
import useClickOutside from '../../hooks/useClickOutside';

const EmojiPickerComponent = forwardRef(function EmojiPickerComponent(
  { onEmojiAdd, isLoading },
  ref,
) {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);
  const buttonRef = useRef(null);
  const isDevice = useDeviceType();
  const isMo = isDevice === 'mobile';

  useClickOutside(pickerRef, () => setShowPicker(false));
  const togglePicker = () => setShowPicker((prev) => !prev);

  useImperativeHandle(ref, () => ({
    togglePicker,
    getPickerElement: () => pickerRef.current,
  }));

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
});

EmojiPickerComponent.propTypes = {
  onEmojiAdd: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default EmojiPickerComponent;
