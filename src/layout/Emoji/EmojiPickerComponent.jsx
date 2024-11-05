import React, { useState } from 'react';
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
  const isDevice = useDeviceType();
  const isMo = isDevice === 'mobile';

  return (
    <div className={styles.outLinedArea}>
      <Outlined
        size="s"
        color="secondary"
        onClick={() => setShowPicker((prev) => !prev)}
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
