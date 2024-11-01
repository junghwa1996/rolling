/**
 * useEmojiManager
 *
 * 이 커스텀 훅은 특정 이모지의 카운트를 증가하거나 감소시키는 기능을 제공합니다.
 * 각 이모지에 대해 서버에 업데이트 요청을 보내고, 요청 성공 시 로컬 상태를 업데이트합니다.
 *
 * @param {string} currentId - 현재 선택된 아이템의 고유 ID.
 *
 * @returns {Object} - 이모지 관리 함수와 상태 값을 포함한 객체
 *  - {boolean} isLoading - API 요청의 로딩 상태를 나타냅니다.
 *  - {boolean} isError - API 요청 중 오류가 발생했는지를 나타냅니다.
 *  - {Array} emojis - 현재 이모지 배열로, 각 이모지의 emoji와 count 속성을 포함합니다.
 *  - {Function} addEmoji - 특정 이모지의 카운트를 증가시키는 함수입니다.
 *  - {Function} removeEmoji - 특정 이모지의 카운트를 감소시키는 함수입니다.
 */

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
            return prevEmojis.map((item) => {
              if (item.emoji === emojiData.emoji) {
                return {
                  ...item,
                  count: type === 'increase' ? item.count + 1 : item.count - 1,
                };
              } else {
                return item;
              }
            });
          } else {
            if (type === 'increase') {
              return [...prevEmojis, { ...emojiData, count: 1 }];
            }
            return prevEmojis;
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
