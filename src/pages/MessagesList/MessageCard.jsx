import PropTypes from 'prop-types';

import {
  SCmessageCardContainer,
  SCMessageCardTextArea,
} from './MessageCard.styles';
import MessagesHeader from './MessagesHeader';
import { StyledCreatedAt } from './StyledCreatedAt.styles';
import { StyledTextarea } from './StyledTextarea.styles';
import Button from '../../components/Button/Button';
import { StyledLine } from '../../components/Line/Line.styles';
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

  onEvent: PropTypes.shape({
    Modal: PropTypes.func,
    ButtonDelete: PropTypes.func,
    ButtonBtnEdit: PropTypes.func,
  }),
};

function MessageCard({ MessageData = {}, type = 'card', onEvent = {} }) {
  return (
    <SCmessageCardContainer type={type} onClick={() => onEvent.Modal}>
      <MessagesHeader MessageData={MessageData} type={type} onEvent={onEvent} />
      <SCMessageCardTextArea>
        <StyledLine />
        <StyledTextarea>{MessageData.text}</StyledTextarea>
        {type !== 'modal' && (
          <StyledCreatedAt>
            {dateConversion(MessageData.createdAt)}
          </StyledCreatedAt>
        )}
        {type === 'modal' && <Button size="m">확인</Button>}
      </SCMessageCardTextArea>
    </SCmessageCardContainer>
  );
}

export default MessageCard;
