import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Card,
  CardArea,
  EmojiArea,
  StyledTotalMessage,
} from './RecipientsCard.styles';
import EmojiBadge from '../../components/Badge/EmojiBadge';

function RecipientCard({
  id = null,
  name = '받는이',
  bgColor = 'beige',
  bgImage = null,
  totalMessage = { recentMessages: [], messageCount: 0, direction: 'column' },
  emojiList = [],
}) {
  return (
    <Link to={`/post/${id}`}>
      <Card $bgColor={bgColor} $bgImage={bgImage}>
        <CardArea>
          <h3>To. {name}</h3>
          <StyledTotalMessage
            recentMessages={totalMessage.recentMessages}
            messageCount={totalMessage.messageCount}
            direction={totalMessage.direction}
          />
        </CardArea>
        <EmojiArea>
          <ul>
            {emojiList.length > 0 &&
              emojiList.map(
                (item) =>
                  item.count > 0 && ( // count가 0보다 큰 경우에만 렌더링
                    <li key={item.id}>
                      <EmojiBadge emoji={item.emoji} count={item.count} />
                    </li>
                  ),
              )}
          </ul>
        </EmojiArea>
      </Card>
    </Link>
  );
}
RecipientCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['blue', 'beige', 'purple', 'green']).isRequired,
  bgImage: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  totalMessage: PropTypes.shape({
    recentMessages: PropTypes.array,
    messageCount: PropTypes.number,
    direction: PropTypes.oneOf(['row', 'column']),
  }),
  emojiList: PropTypes.array,
};
export default RecipientCard;
