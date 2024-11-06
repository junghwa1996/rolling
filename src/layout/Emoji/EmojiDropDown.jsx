import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { blur } from '../../styles/layout/effect.styles';
import { boxShadow } from '../../styles/common/mixins.styles';
import useDeviceType from '../../hooks/useDeviceType';
import useClickOutside from 'hooks/useClickOutside';
import ARROW_ICON from '../../assets/icon-arrow_down.svg';
import styles from './EmojiDropDown.module.css';
import EmojiBadge from '../../components/Badge/EmojiBadge';

const DropDownContainer = styled.div`
  grid-template-columns: ${(props) =>
    props.$isMobile ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};
  padding: ${(props) => (props.$isMobile ? '1.5rem' : '2.4rem')};
  background-color: ${({ theme }) => theme.background};
  ${boxShadow};
  ${blur};
`;

const ArrowImg = styled.img`
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'rotate(180deg)' : 'rotate(360deg)'};
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
  const location = useLocation();
  const getDeviceType = useDeviceType();
  const $isMobile = getDeviceType === 'mobile';
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false)); // 외부 클릭 시 닫기

  // 페이지 이동 시마다 드롭다운 초기화
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    setFilteredEmojis(emojiList.filter((emoji) => emoji.count > 0));
  }, [emojiList]);

  // 드롭다운 토글
  const handleToggle = () => setIsOpen((prev) => !prev); // 드롭다운 열고 닫기

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

  // 이모지가 하나도 없을 때 드롭다운을 렌더링하지 않음
  if (filteredEmojis.length === 0) {
    return null; // 이모지가 없으면 컴포넌트를 렌더링하지 않음
  }

  return (
    <div ref={dropdownRef} className={styles.Container}>
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
        <div className={styles.imgWrapper}>
          {emojiList.length >= 4 && (
            <ArrowImg
              className={styles.img}
              onClick={handleToggle}
              src={ARROW_ICON}
              alt="arrow"
              $isOpen={isOpen}
            />
          )}
        </div>
      </section>
      {isOpen && (
        <DropDownContainer
          className={styles.dropDownContainer}
          $isMobile={$isMobile}>
          {filteredEmojis
            .filter((emoji) => emoji.count > 0) // 카운트가 0보다 큰 이모지만 표시
            .slice(0, $isMobile ? 8 : 6)
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
