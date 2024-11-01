import { useState } from 'react';

import { postRollingEmoji, deleteRollingEmoji } from '../../service/api';

export function useEmojiManager(currentId) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emojis, setEmojis] = useState([]);

  // 이모지 추가 함수
  const addEmoji = async (emojiObject) => {
    const newEmoji = { emoji: emojiObject.emoji, type: 'increase' };
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await postRollingEmoji(currentId, newEmoji);
      if (response) {
        setEmojis((prevEmojis) => {
          const existingEmoji = prevEmojis.find(
            (item) => item.emoji === newEmoji.emoji,
          );
          if (existingEmoji) {
            return prevEmojis.map((item) =>
              item.emoji === newEmoji.emoji
                ? { ...item, count: item.count + 1 }
                : item,
            );
          } else {
            return [...prevEmojis, { ...newEmoji, count: 1 }];
          }
        });
      }
    } catch (error) {
      setIsError(true);
      console.error(
        '이모지 추가 실패:',
        error.response ? error.response.data : error.message,
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 이모지 카운트 감소 함수
  const removeEmoji = async (emojiObject) => {
    const emojiToRemove = { emoji: emojiObject.emoji, type: 'decrease' };
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await deleteRollingEmoji(currentId, emojiToRemove);
      if (response) {
        setEmojis((prevEmojis) =>
          prevEmojis
            .map((item) =>
              item.emoji === emojiToRemove.emoji
                ? { ...item, count: item.count - 1 }
                : item,
            )
            .filter((item) => item.count > 0),
        );
      }
    } catch (error) {
      setIsError(true);
      console.error(
        '이모지 제거 실패:',
        error.response ? error.response.data : error.message,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, emojis, addEmoji, removeEmoji };
}
