import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  Card,
  CardArea,
  EmojiArea,
  StyledTotalMessage,
} from './RecipientsCard.styles';
import EmojiBadge from '../../components/Badge/EmojiBadge';
import { getRollingEmoji } from '../../service/api';

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
  const [emojis, setEmojis] = useState(emojiList);
  const location = useLocation();

  // 뒤로 돌아왔을 때 이모지 목록을 다시 가져옵니다.
  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await getRollingEmoji(id);
        // count 값이 0보다 큰 이모지만 필터링하여 상태에 설정하고, count 값 기준으로 정렬 후 최대 3개만 설정
        const filteredEmojis =
          response?.results
            .filter((emoji) => emoji.count > 0)
            .sort((a, b) => b.count - a.count)
            .slice(0, 3) || [];
        setEmojis(filteredEmojis);
      } catch (error) {
        console.error('이모지 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    // 페이지 이동 후 컴포넌트가 다시 마운트되거나 location이 변경될 때 이모지 데이터를 다시 가져옵니다.
    fetchEmojis();
  }, [location, id]);

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
            {emojis.length > 0 &&
              emojis.map((item) => (
                <li key={item.id}>
                  <EmojiBadge emoji={item.emoji} count={item.count} />
                </li>
              ))}
          </ul>
        </EmojiArea>
      </Card>
    </Link>
  );
}

export default RecipientCard;
