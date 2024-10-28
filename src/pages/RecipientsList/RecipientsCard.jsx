/**
 * 롤링(받는이) 개별 카드 컴포넌트
 * 해당 카드를 클릭하면, /list/{id}로 넘어갑니다.
 */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, CardArea, EmojiArea } from './RecipientsCard.styles';
import TotalMessage from '../../components/TotalMessage/TotalMessage';

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
          <TotalMessage
            recentMessages={totalMessage.recentMessages}
            messageCount={totalMessage.messageCount}
            direction={totalMessage.direction}
          />
        </CardArea>
        <EmojiArea>
          <ul>
            {emojiList.map((item) => (
              <li key={item.id}>
                {/* TODO : 이모지 라벨 컴포넌트 생성 시 변경 */}
                <p>{item.emoji}</p>
                <p>{item.count}</p>
              </li>
            ))}
          </ul>
        </EmojiArea>
      </Card>
    </Link>
  );
}

export default RecipientCard;
