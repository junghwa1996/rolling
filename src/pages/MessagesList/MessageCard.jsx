import PropTypes from 'prop-types';

import { CreatedAt } from './CreatedAt.styles';
import {
  MessageCardContainer,
  MessageCardTextArea,
} from './MessageCard.styles';
import MessagesHeader from './MessagesHeader';
import Textarea from '../../components/TextField/Textarea';
import dateConversion from '../../utils/dateConversion';

MessageCard.propTypes = {
  type: PropTypes.oneOf(['card', 'modal', 'edit']).isRequired, // 타입

  MessageData: PropTypes.shape({
    name: PropTypes.string, // '보내는 이'
    badgeValue: PropTypes.oneOf(['친구', '가족', '동료', '지인']), // 라벨
    createdAt: PropTypes.string, // 헤더 생성일
    imageUrl: PropTypes.string, // 유저 이미지
    text: PropTypes.string,
  }),
};

function MessageCard({ MessageData = {}, type = 'card' }) {
  return (
    <MessageCardContainer type={type}>
      <MessagesHeader MessageData={MessageData} type={type} />
      <MessageCardTextArea>
        <Textarea type={type} text={MessageData.text} />
        {type !== 'modal' && (
          <CreatedAt>{dateConversion(MessageData.createdAt)}</CreatedAt>
        )}
      </MessageCardTextArea>
    </MessageCardContainer>
  );
}

export default MessageCard;
