// NOTE 이모지 배지 기능 (이모지 + 이모지 개수)
// emoji - 이모지의 종류(string)
// count - 이모지의 총 개수(number)

import PropTypes from 'prop-types';

import {
  EmojiBadgeArea,
  EmojiContainer,
  Emoji,
  Count,
} from './EmojiBadge.styles';

function EmojiBadge({ emoji, count, onClick }) {
  return (
    <EmojiBadgeArea onClick={onClick}>
      <EmojiContainer>
        <Emoji>{emoji}</Emoji>
      </EmojiContainer>
      <Count>{count}</Count>
    </EmojiBadgeArea>
  );
}

EmojiBadge.propTypes = {
  emoji: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default EmojiBadge;
