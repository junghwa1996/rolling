import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

import EmojiBadge from '../../components/Badge/EmojiBadge';
import { ReactComponent as IconStoke } from '../../assets/icon-stoke.svg';
import Outlined from '../../components/Outlined/Outlined';
import styles from './EmojiPickerComponent.module.css';
import useDeviceType from '../../hooks/useDeviceType';

function EmojiPickerComponent() {
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const isDevice = useDeviceType();
  const isMo = isDevice === 'mobile';

  const onEmojiClick = (emojiObject) => {
    const existingEmoji = selectedEmojis.find(
      (item) => item.emoji === emojiObject.emoji,
    );

    if (existingEmoji) {
      // 기존 이모지가 있으면 카운트를 증가시킵니다.
      setSelectedEmojis((prevEmojis) =>
        prevEmojis.map((item) =>
          item.emoji === emojiObject.emoji
            ? { ...item, count: item.count + 1 }
            : item,
        ),
      );
    } else {
      // 새로운 이모지를 추가합니다.
      setSelectedEmojis((prevEmojis) => [
        ...prevEmojis,
        { emoji: emojiObject.emoji, count: 1 },
      ]);
    }
  };

  // 카운트에 따라 정렬하고 최대 8개까지 잘라냅니다.
  const sortedEmojis = selectedEmojis
    .slice()
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <div className={styles.outLinedArea}>
      <Outlined
        size="m"
        color="secondary"
        onClick={() => setShowPicker((prev) => !prev)}
        icon={<IconStoke />}>
        {!isMo && '추가'}
      </Outlined>

      {showPicker && (
        <Picker
          onEmojiClick={onEmojiClick}
          width="30.6rem"
          height="39.2rem"
          className={styles.pickerArea}
        />
      )}
      {sortedEmojis.map(({ emoji, count }, index) => (
        <EmojiBadge key={index} emoji={emoji} count={count} />
      ))}
    </div>
  );
}

export default EmojiPickerComponent;
