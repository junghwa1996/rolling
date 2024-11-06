// NOTE 이모지 배지 기능 (이모지 + 이모지 개수)
// emoji - 이모지의 종류(string)
// count - 이모지의 총 개수(number)
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './EmojiBadge.module.css';
import { font } from '../../styles/common/fonts.styles';

//TODO - 변수 자체로 지금 theme을 받고 있어서 그 자체에만 opacity를 조정하기 어려움
//추후에 더 손 볼 예정
const EmojiBadgeArea = styled.div`
  background-color: ${({ theme }) => theme.emojiRgba};
`;

export const Count = styled.p`
  color: ${({ theme }) => theme.whiteText};
  @media (max-width: 767px) {
    ${font['14']};
  }
`;

function EmojiBadge({ emoji, count, onClick }) {
  return (
    <EmojiBadgeArea onClick={onClick} className={styles.emojiBadgeArea}>
      <div className={styles.emojiContainer}>
        <p className={styles.emoji}>{emoji}</p>
      </div>
      <Count className={styles.count}>{count}</Count>
    </EmojiBadgeArea>
  );
}

EmojiBadge.propTypes = {
  emoji: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default EmojiBadge;
