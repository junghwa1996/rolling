// NOTE 이모지 배지 기능 (이모지 + 이모지 개수)
// emoji - 이모지의 종류(string)
// count - 이모지의 총 개수(number)

import PropTypes from 'prop-types';

import { div, Emoji, Count } from './EmojiBadge.styles';
import styles from './EmojiBadge.module.css';

function EmojiBadge({ emoji, count, onClick }) {
  return (
    <div onClick={onClick} className={styles.emojiBadgeArea}>
      <div className={styles.emojiContainer}>
        <p className={styles.emoji}>{emoji}</p>
      </div>
      <Count className={styles.count}>{count}</Count>
    </div>
  );
}

EmojiBadge.propTypes = {
  emoji: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default EmojiBadge;
