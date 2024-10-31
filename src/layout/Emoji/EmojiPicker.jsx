// EmojiPicker.jsx
import React, { useState } from 'react';
import Dropdown from './Dropdown'; // Dropdown 컴포넌트 임포트
import Picker from 'emoji-picker-react'; // emoji-picker-react에서 Picker 임포트
import EmojiBadge from '../../components/Badge/EmojiBadge';
import { emojis } from 'emoji-picker-react'; // emoji 목록 가져오기

// emoji-picker-react에서 제공하는 이모지를 Dropdown 옵션 형식으로 변환
const emojiOptions = emojis.map((emoji) => ({
  value: emoji.emoji,
  label: emoji.names[0] || emoji.emoji, // 첫 번째 이름을 label로 사용
}));

function EmojiDropdown() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emojiCount, setEmojiCount] = useState(0);

  const handleSelect = (option) => {
    setSelectedEmoji(option);
    setEmojiCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <Dropdown
        options={emojiOptions}
        selectedOption={selectedEmoji}
        onSelect={handleSelect}
        disabled={false}
        $error={false} // 필요에 따라 에러 상태를 추가하세요
        errMessage="이모지를 선택해주세요."
        isIcon={false}
      />
      {selectedEmoji && selectedEmoji.value && (
        <EmojiBadge emoji={selectedEmoji.value} count={emojiCount} />
      )}
      <Picker
        onEmojiClick={(_, emojiObject) =>
          handleSelect({ value: emojiObject.emoji, label: emojiObject.emoji })
        }
      />
    </div>
  );
}

export default EmojiDropdown;
