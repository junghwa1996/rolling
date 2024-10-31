import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import EmojiBadge from '../../components/Badge/EmojiBadge';

function EmojiPickerComponent() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emojiCount, setEmojiCount] = useState(0);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const onEmojiClick = (emojiObject) => {
    console.log('Selected Emoji:', emojiObject.emoji); // 선택된 이모지 확인
    setSelectedEmoji(emojiObject.emoji);
    setEmojiCount((prevCount) => prevCount + 1);
    setIsPickerOpen(false);
  };

  const togglePicker = () => {
    setIsPickerOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        onClick={togglePicker}
        style={{ cursor: 'pointer', marginBottom: '10px' }}
      >
        {selectedEmoji ? selectedEmoji : '이모지 선택하기'}
      </div>

      {isPickerOpen && (
        <div style={{ position: 'absolute', zIndex: 1000 }}>
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}

      {/* 선택된 이모지와 개수가 있을 때만 EmojiBadge 렌더링 */}
      {selectedEmoji && emojiCount > 0 && (
        <EmojiBadge emoji={selectedEmoji} count={emojiCount} />
      )}
    </div>
  );
}

export default EmojiPickerComponent;
