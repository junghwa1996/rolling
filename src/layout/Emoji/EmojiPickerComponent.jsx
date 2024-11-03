/**
 * EmojiPickerComponent
 *
 * 이 컴포넌트는 이모지 선택기에서 이모지를 추가/삭제합니다.
 * `useEmojiManager`로 서버와 연동해 이모지 상태를 관리하며,
 * `useFetchData`로 이모지 목록을 불러옵니다.
 *
 * - `showPicker`: 선택기 표시 관리
 * - `onEmojiAdd`, `onEmojiDelete`: 이모지 추가/삭제
 *
 */

import React, { useState, useEffect } from 'react';
import Picker from 'emoji-picker-react';
import PropTypes from 'prop-types';

import { useEmojiManager } from './useEmojiManager';
import { ReactComponent as IconStoke } from '../../assets/icon-stoke.svg';
import Outlined from '../../components/Outlined/Outlined';
import styles from './EmojiPickerComponent.module.css';
import useDeviceType from '../../hooks/useDeviceType';
import EmojiBadge from '../../components/Badge/EmojiBadge';
import useFetchData from '../../hooks/useFetchData';
import { getRollingEmoji } from '../../service/api';
import EmojiDropDown from './EmojiDropDown';

EmojiPickerComponent.propTypes = {
  id: PropTypes.string.isRequired,
};

function EmojiPickerComponent({ id }) {
  const [showPicker, setShowPicker] = useState(false);
  const [emojisList, setEmojisList] = useState(null);
  const isDevice = useDeviceType();
  const isMo = isDevice === 'mobile';

  const { isLoading, isError, emojis, addEmoji, removeEmoji } =
    useEmojiManager(id);

  // const {
  //   data,
  //   loading: fetching,
  //   error: fetchingError,
  // } = useFetchData(() => getRollingEmoji(id), [emojis]);
  // const emojisList = data?.results || [];

  useEffect(() => {
    const getEmojiData = async () => {
      try {
        const response = await getRollingEmoji(id);
        console.log(response);
        setEmojisList(response);
      } catch (err) {
        console.error(err);
      }
    };
    getEmojiData();
  }, [id]);

  // STUB: 이모지 클릭 시 추가 이벤트
  const onEmojiAdd = async (emojiObject) => {
    await addEmoji(emojiObject);
    setShowPicker(false);
  };

  // STUB: 이모지 클릭 시 삭제 이벤트
  const onEmojiDelete = async (emojiObject) => {
    await removeEmoji(emojiObject);
  };

  // if (isError || fetchingError) return <p>에러가 발생했습니다! 🫠</p>;

  console.log(emojisList);
  return (
    // <div className={styles.outLinedArea}>

    <div className={styles.outLinedArea}>
      {/* <div className={styles.emojiDropdown}>
        {emojisList
          .sort((a, b) => b.count - a.count)
          .slice(0, 3)
          .map((emoji) => (
            <div key={emoji.emoji}>
              {!emoji.count || (
                <EmojiBadge
                  emoji={emoji.emoji}
                  count={emoji.count}
                  onClick={() => onEmojiDelete(emoji)}
                  disabled={isLoading}
                />
              )}
            </div>
          ))}
      </div> */}
      <EmojiDropDown emojiList={emojisList}></EmojiDropDown>
      <Outlined
        size="s"
        color="secondary"
        onClick={() => setShowPicker((prev) => !prev)}
        icon={<IconStoke />}
        disabled={isLoading}>
        {!isMo && '추가'}
      </Outlined>

      {showPicker && (
        <div className={styles.pickerContainer}>
          <Picker onEmojiClick={onEmojiAdd} width="30.6rem" height="39.2rem" />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
