import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';

import { shadow, blur } from '../../styles/layout/effect.styles';
import useDeviceType from '../../hooks/useDeviceType';
import ARROW_ICON from '../../assets/icon-arrow_down.svg';
import styles from './EmojiDropDown.module.css';
import EmojiBadge from '../../components/Badge/EmojiBadge';

EmojiDropDown.propTypes = {
  id: PropTypes.number.isRequired,
};

const DropDownContainer = styled.div`
  grid-template-columns: ${(props) =>
    props.isPC ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};

  padding: ${(props) => (props.isPC ? '2.4rem' : '1.5rem')};
  ${shadow['mid']};
  ${blur};
`;

const ArrowImg = styled.img`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(360deg)')};
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
            <ArrowImg
              className={styles.img}
              src={ARROW_ICON}
              alt="arrow"
              isOpen={isOpen}
            />
          )}
        </div>
      </section>
      {isOpen && (
        <DropDownContainer className={styles.dropDownContainer} isPC={isPC}>
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
