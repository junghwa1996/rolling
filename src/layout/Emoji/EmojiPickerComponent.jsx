/**
 * EmojiPickerComponent
 *
 * 이 컴포넌트는 이모지 선택기에서 이모지를 추가/삭제합니다.
 * `useEmojiManager`로 서버와 연동해 이모지 상태를 관리하며,
 * `useFetchData`로 이모지 목록을 불러옵니다.
 *
 * - `showPicker`: 선택기 표시 관리
 * - `onEmojiAdd`, `onEmojiDelete`: 이모지 추가/삭제
 *
 */

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

  const { isLoading, isError, emojis, addEmoji, removeEmoji } =
    useEmojiManager(currentId);

  const {
    data,
    loading: fetching,
    error: fetchingError,
  } = useFetchData(() => getRollingEmoji(currentId), [emojis]);
  const emojisList = data?.results || [];

  // STUB: 이모지 클릭 시 추가 이벤트
  const onEmojiAdd = async (emojiObject) => {
    await addEmoji(emojiObject);
    setShowPicker(false);
  };

  // STUB: 이모지 클릭 시 삭제 이벤트
  const onEmojiDelete = async (emojiObject) => {
    await removeEmoji(emojiObject);
  };

  if (isError || fetchingError) return <p>에러가 발생했습니다! 🫠</p>;

  return (
    <div className={styles.outLinedArea}>
      <div className={styles.emojiDropdown}>
        {emojisList.map((emoji) => (
          <div key={emoji.emoji} className={styles.emojiItem}>
            {!emoji.count || (
              <EmojiBadge
                emoji={emoji.emoji}
                count={emoji.count}
                onClick={() => onEmojiDelete(emoji)}
                disabled={isLoading}
              />
            )}
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
          <Picker onEmojiClick={onEmojiAdd} width="30.6rem" height="39.2rem" />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
