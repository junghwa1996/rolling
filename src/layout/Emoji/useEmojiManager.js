import { useState } from 'react';

import { postRollingEmoji } from '../../service/api';

export function useEmojiManager(currentId) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emojis, setEmojis] = useState([]);

  // 이모지 카운트를 업데이트하는 함수
  const updateEmoji = async (emojiObject, type) => {
    const emojiData = { emoji: emojiObject.emoji, type };
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await postRollingEmoji(currentId, emojiData);
      if (response) {
        setEmojis((prevEmojis) => {
          const existingEmoji = prevEmojis.find(
            (item) => item.emoji === emojiData.emoji,
          );
          if (existingEmoji) {
            return prevEmojis.map((item) =>
              item.emoji === emojiData.emoji
                ? {
                    ...item,
                    count:
                      type === 'increase' ? item.count + 1 : item.count - 1,
                  }
                : item,
            );
          } else {
            return [
              ...prevEmojis,
              { ...emojiData, count: type === 'increase' ? 1 : 0 },
            ];
          }
        });
      }
    } catch (error) {
      setIsError(true);
      console.error(
        '이모지 업데이트 실패:',
        error.response ? error.response.data : error.message,
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 이모지 증가 함수
  const addEmoji = (emojiObject) => updateEmoji(emojiObject, 'increase');

  // 이모지 감소 함수
  const removeEmoji = (emojiObject) => updateEmoji(emojiObject, 'decrease');

  return { isLoading, isError, emojis, addEmoji, removeEmoji };
}
