import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

import EmojiBadge from '../../components/Badge/EmojiBadge';
import {
  DropdownContainer,
  EmojiList,
  EmojiWrapper,
  SelectedEmojisContainer,
  ToggleButton, // 추가
  ArrowIcon, // 추가
} from './EmojiDropdown.styles'; // 스타일 컴포넌트 import
import iconArrowDown from '../../assets/icon-arrow_down.svg';

function EmojiDropdown() {
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleSelect = (emojiObject) => {
    const emoji = emojiObject.emoji;

    setSelectedEmojis((prev) => {
      const existingEmoji = prev.find((item) => item.emoji === emoji);
      if (existingEmoji) {
        // 이미 선택된 이모지의 개수를 증가시킵니다.
        return prev.map((item) =>
          item.emoji === emoji ? { ...item, count: item.count + 1 } : item,
        );
      }
      // 새 이모지를 추가합니다.
      return [{ emoji, count: 1 }, ...prev].slice(0, 3);
    });
  };

  const togglePicker = () => {
    setIsPickerOpen((prev) => !prev);
  };

  return (
    <DropdownContainer>
      <ToggleButton onClick={togglePicker}>
        {' '}
        {/* 스타일 컴포넌트로 변경 */}
        <ArrowIcon src={iconArrowDown} alt="이모지 선택" />{' '}
        {/* 스타일 컴포넌트로 변경 */}
      </ToggleButton>

      <SelectedEmojisContainer>
        {selectedEmojis.map((item, index) => (
          <EmojiBadge key={index} emoji={item.emoji} count={item.count} />
        ))}
      </SelectedEmojisContainer>

      {isPickerOpen && (
        <EmojiList>
          <EmojiWrapper>
            <Picker
              onEmojiClick={(_, emojiObject) => handleSelect(emojiObject)}
            />
          </EmojiWrapper>
        </EmojiList>
      )}
    </DropdownContainer>
  );
}

export default EmojiDropdown;
