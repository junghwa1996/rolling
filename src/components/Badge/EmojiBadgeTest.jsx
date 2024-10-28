// NOTE 이모지 배지 기능을 테스트하기 위해 만들어진 컴포넌트 문서입니다.
// EmojiPicker 라이브러리를 사용
// 추후에 사용할 때의 편의를 위해 코드를 남겨 둘 예정 -> EmojiPicker 기능 완료하면 삭제할 예정

import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

import EmojiBadge from './EmojiBadge';

function EmojiBadgeTest() {
  const [emoji, setEmoji] = useState('');

  // 클릭 : 콜백 함수로 작동
  const onEmojiClick = (emojiData) => {
    setEmoji(emojiData.emoji);
  };

  console.log(emoji);

  return (
    <div>
      <EmojiPicker onEmojiClick={onEmojiClick} />
      <EmojiBadge emoji={emoji} count={12} />
    </div>
  );
}

export default EmojiBadgeTest;
