import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

import { PickerButton, Icon, Text } from './EmojiPicker.styles';
import EmojiBadge from '../../components/Badge/EmojiBadge';
import IconStoke from '../../assets/icon-stoke.svg'; 

function EmojiPickerComponent() {
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

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
    <div>
      <PickerButton
        size="s"
        color="secondary" 
        onClick={() => setShowPicker((prev) => !prev)}>
        <Icon src={IconStoke} alt="아이콘" /> {/* import한 IconStoke 사용 */}
        <Text>추가</Text>
      </PickerButton>

      {showPicker && <Picker onEmojiClick={onEmojiClick} />}
      {sortedEmojis.map(({ emoji, count }, index) => (
        <EmojiBadge key={index} emoji={emoji} count={count} />
      ))}
    </div>
  );
}

export default EmojiPickerComponent;
