import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';

import { shadow, blur } from '../../styles/layout/effect.styles';
import useDeviceType from '../../hooks/useDeviceType';
import ArrowDown from '../../assets/icon-arrow_down.svg';
import ArrowTop from '../../assets/icon-arrow_top.svg';
import styles from './EmojiDropDown.module.css';
import EmojiBadge from '../../components/Badge/EmojiBadge';

EmojiDropDown.propTypes = {
  id: PropTypes.number.isRequired,
};

const DropDownContainer = styled.div`
  position: absolute;
  top: 110%;
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
  border-radius: 8px;
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
  ),
};

function EmojiDropDown({ emojiList = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const getDeviceType = useDeviceType();
  const isPC = getDeviceType === 'pc';

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  console.log(emojiList.length);

  return (
    <div className={styles.Container}>
      <section className={styles.emojiListContainer}>
        <div className={styles.emojiList}>
          {emojiList.length > 0 &&
            emojiList
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
          {emojiList.length >= 4 && (
            <img
              className={styles.img}
              src={isOpen ? ArrowTop : ArrowDown}
              alt="arrow"
            />
          )}
        </div>
      </section>
      {isOpen && (
        <DropDownContainer isPC={isPC}>
          {emojiList.slice(0, isPC ? 8 : 6).map((emoji) => (
            <div className={styles.emojiBadge} key={emoji.id}>
              <EmojiBadge emoji={emoji.emoji} count={emoji.count} />
            </div>
          ))}
        </DropDownContainer>
      )}
    </div>
  );
}

export default EmojiDropDown;
