import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { getRollingEmoji } from '../../service/api';
import { shadow } from '../../styles/shadowStyles';
import { blur } from '../../styles/blurStyles';
import useDeviceType from '../../hooks/useDeviceType';
import EmojiBadge from '../../components/Badge/EmojiBadge';
import ArrowDown from '../../assets/icon-arrow_down.svg';
import ArrowTop from '../../assets/icon-arrow_top.svg';
import styles from './EmojiDropDown.module.css';

EmojiDropDown.propTypes = {
  id: PropTypes.number.isRequired,
};

const DropDownContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isPC ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};
  grid-template-rows: repeat(2, 1fr);
  z-index: 10;

  row-gap: 1rem;
  column-gap: 0.8rem;

  max-width: ${(props) => (props.isPC ? '31.2rem' : '24.8rem')};
  max-height: 13.4rem;

  padding: 2.4rem;
  border: 1px solid #b6b6b6;
  border-radius: 24px;
  background-color: var(--white);
  ${shadow['mid']};
  ${blur};
`;

//TODO - 이모지가 POST가 될 때마다 EmojiDropDown의 데이타도 변경될 것이기 때문에,
//POST에서 할 때마다 GET을 해오고 그때마다 EmogiDropDown에 뿌려주는 로직이 적합 !
function EmojiDropDown({ id }) {
  // Get response hooks
  const [emojiList, setEmojiList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const getDeviceType = useDeviceType();
  const isPC = getDeviceType === 'pc';

  //이모지 리스트 GET 함수
  useEffect(() => {
    const handleEmojiListLoad = async () => {
      try {
        const res = await getRollingEmoji(id);
        const { results } = res;

        // sort 조건문
        //TODO - 확실하게 하기 위해 넣어둔 구문 (헤더에서 조합 후 이상이 없으면 지울 예정)
        const sortedData = results.sort((a, b) => b.count - a.count);
        setEmojiList(sortedData);
      } catch (error) {
        console.error(
          '이모지 리스트를 불러오는데 오류가 발생했습니다. ',
          error,
        );
      }
    };

    handleEmojiListLoad();
  }, [id]);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.Container}>
      <section className={styles.emojiListContainer}>
        <div className={styles.emojiList}>
          {emojiList.slice(0, 3).map((emoji) => (
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
