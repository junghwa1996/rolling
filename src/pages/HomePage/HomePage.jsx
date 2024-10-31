import React, { useState } from 'react';

import EmojiDropdown from '../../layout/Emoji/EmojiDropdown';

function HomePage() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emojiList, setEmojiList] = useState([]);

  const handleSelect = (emojiObject) => {
    setSelectedEmoji(emojiObject);
    setEmojiList((prevList) => [...prevList, emojiObject]); // 선택된 이모지를 목록에 추가합니다.
  };

  return (
    <div>
      <h1>홈페이지</h1>
      <EmojiDropdown
        selectedOption={selectedEmoji}
        onSelect={handleSelect}
        disabled={false}
        error={false} // $error 대신 error를 사용합니다.
        errMessage=""
      />
      <div>
        <h2>선택된 이모지 목록</h2>
        <ul>
          {emojiList.map((emoji, index) => (
            <li key={index}>
              <img src={emoji.emoji} alt={`Selected Emoji ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
