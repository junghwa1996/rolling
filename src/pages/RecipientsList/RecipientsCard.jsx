import PropTypes from 'prop-types';

import { Card, CardArea, EmojiArea } from './RecipientsCard.styles';

RecipientCard.propTypes = {
  sender: PropTypes.string,
  bgColor: PropTypes.string,
  // totalMessage: PropTypes.shape({
  //   recentMessages: PropTypes.object,
  //   messageCount: PropTypes.number,
  //   direction: PropTypes.string,
  // }),
  emojiList: PropTypes.object,
};

function RecipientCard({
  sender = '받는이',
  bgColor = 'beige',
  // totalMessage = { recentMessages: [], messageCount: 0, direction: 'row' },
  emojiList = [],
}) {
  return (
    <Card color={bgColor}>
      <CardArea>
        <h3>To. {sender}</h3>
        {/* <TotalMessage
          recentMessages={totalMessage.recentMessages}
          messageCount={totalMessage.messageCount}
          direction={totalMessage.direction}
        /> */}
      </CardArea>
      <EmojiArea>
        <ul>
          {emojiList.map((item) => (
            <li key={item.id}>
              {/* 개별 이모지 라벨 컴포넌트 자리 */}
              <p>{item.emoji}</p>
              <p>{item.count}</p>
            </li>
          ))}
        </ul>
      </EmojiArea>
    </Card>
  );
}

export default RecipientCard;
