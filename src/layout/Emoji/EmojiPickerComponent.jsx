import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

import { useEmojiManager } from './useEmojiManager';
import { ReactComponent as IconStoke } from '../../assets/icon-stoke.svg';
import Outlined from '../../components/Outlined/Outlined';
import styles from './EmojiPickerComponent.module.css';
import useDeviceType from '../../hooks/useDeviceType';
import EmojiBadge from '../../components/Badge/EmojiBadge';
import useFetchData from '../../hooks/useFetchData';
import { getRollingEmoji } from '../../service/api';

function EmojiPickerComponent() {
  const [showPicker, setShowPicker] = useState(false);

  const currentURL = useLocation();
  const presentPath = currentURL.pathname.split('/');
  const currentId = presentPath[presentPath.length - 1];

  const isDevice = useDeviceType();
  const isMo = isDevice === 'mobile';

  const emojiId = '9507';
  const { isLoading, isError, emojis, addEmoji, removeEmoji } = useEmojiManager(
    currentId,
    emojiId,
  );

  const {
    data,
    loading: fetching,
    error: fetchingError,
  } = useFetchData(() => getRollingEmoji(currentId), [emojis]);
  const emojisList = data?.results || [];

  // STUB: 버튼 클릭 이벤트
  const onEmojiClick = async (emojiObject) => {
    await addEmoji(emojiObject);
    setShowPicker(false);
  };

  if (isError || fetchingError) return <p>에러가 발생했습니다! 🫠</p>;

  return (
    <div className={styles.outLinedArea}>
      <div className={styles.emojiDropdown}>
        {emojisList.map((emoji) => (
          <div key={emoji.emoji} className={styles.emojiItem}>
            <EmojiBadge
              emoji={emoji.emoji}
              count={emoji.count}
              onClick={() => removeEmoji(currentId)}
              disabled={isLoading}
            />
          </div>
        ))}
      </div>

      <Outlined
        size="m"
        color="secondary"
        onClick={() => setShowPicker((prev) => !prev)}
        icon={<IconStoke />}
        disabled={isLoading || fetching}>
        {!isMo && '추가'}
      </Outlined>

      {showPicker && (
        <div className={styles.pickerContainer}>
          <Picker
            onEmojiClick={onEmojiClick}
            width="30.6rem"
            height="39.2rem"
          />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
