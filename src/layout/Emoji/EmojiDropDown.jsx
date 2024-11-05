import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { shadow, blur } from '../../styles/layout/effect.styles';
import useDeviceType from '../../hooks/useDeviceType';
import ArrowDown from '../../assets/icon-arrow_down.svg';
import ArrowTop from '../../assets/icon-arrow_top.svg';
import styles from './EmojiDropDown.module.css';
import EmojiBadge from '../../components/Badge/EmojiBadge';

const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: grid;
  grid-template-columns: ${(props) =>
    props.isPC ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};
  grid-template-rows: repeat(2, 1fr);
  z-index: 10;
  row-gap: 1rem;
  column-gap: 0.8rem;
  padding: ${(props) => (props.isPC ? '2.4rem' : '1.5rem')};
  border: 1px solid #b6b6b6;
  border-radius: 24px;
  background-color: var(--white);
  ${shadow['mid']};
  ${blur};
`;

EmojiDropDown.propTypes = {
  emojiList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      emoji: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onEmojiDelete: PropTypes.func.isRequired,
};

function EmojiDropDown({ emojiList = [], onEmojiDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredEmojis, setFilteredEmojis] = useState(emojiList);
  const getDeviceType = useDeviceType();
  const isPC = getDeviceType === 'pc';

  useEffect(() => {
    setFilteredEmojis(emojiList);
  }, [emojiList]);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleEmojiDelete = (emoji) => {
    // 이모지 카운트 감소 및 필터링 (카운트가 0 이상일 때까지만 감소)
    setFilteredEmojis((prev) =>
      prev.map((item) =>
        item.id === emoji.id
          ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
          : item,
      ),
    );

    // 카운트가 0이 된 경우에만 삭제 처리
    if (emoji.count === 1) {
      onEmojiDelete(emoji); // 외부로 전달된 삭제 함수 호출
    }
  };

  return (
    <div className={styles.Container}>
      <section className={styles.emojiListContainer}>
        <div className={styles.emojiList}>
          {filteredEmojis.length > 0 &&
            filteredEmojis
              .filter((emoji) => emoji.count > 0) // 카운트가 0보다 큰 이모지만 표시
              .sort((a, b) => b.count - a.count)
              .slice(0, 3)
              .map((emoji) => (
                <EmojiBadge
                  key={emoji.id}
                  emoji={emoji.emoji}
                  count={emoji.count}
                />
              ))}
        </div>
        <div className={styles.imgWrapper} onClick={handleButton}>
          <img
            className={styles.img}
            src={isOpen ? ArrowTop : ArrowDown}
            alt="arrow"
          />
        </div>
      </section>
      {isOpen && (
        <DropDownContainer isPC={isPC}>
          {filteredEmojis
            .filter((emoji) => emoji.count > 0) // 카운트가 0보다 큰 이모지만 표시
            .slice(0, isPC ? 8 : 6)
            .map((emoji) => (
              <div
                className={styles.emojiBadge}
                key={emoji.id}
                onClick={() => handleEmojiDelete(emoji)} // 삭제 처리
              >
                <EmojiBadge emoji={emoji.emoji} count={emoji.count} />
              </div>
            ))}
        </DropDownContainer>
      )}
    </div>
  );
}

export default EmojiDropDown;
