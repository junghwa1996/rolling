/**
 * MessageCard 컴포넌트
 *
 * 이 컴포넌트는 메시지 카드를 렌더링하는 컴포넌트로,
 * 'card', 'modal', 'edit' 타입에 따라 각각 다른 UI와 이벤트 동작을 제공합니다.
 *
 * @component
 * @param {string} type - 메시지 카드의 타입 (예: 'card', 'modal', 'edit') *필수값
 * @param {Object} messageData - 메시지 데이터 객체 *필수값
 * @param {string} messageData.content - 메시지 내용 (HTML 형식으로 삽입 가능)
 * @param {string} messageData.createdAt - 메시지 생성일
 * @param {Object} onEvent - 이벤트 핸들러 객체
 * @param {Function} onEvent.modal - 모달을 여는 이벤트 핸들러 (카드 타입일 때 동작)
 * @param {Function} onEvent.close - 모달을 닫는 이벤트 핸들러 (모달 타입일 때 동작)
 *
 * @example
 * <MessageCard
 *    type="modal"
 *    messageData={{ content: "<p>Hello World</p>", createdAt: "2024-10-30T01:51:19.832098Z" }}
 *    onEvent={{ modal: handleModalOpen, close: handleClose }}
 * />
 *
 */

import PropTypes from 'prop-types';

import {
  SCmessageCardContainer,
  SCMessageCardTextArea,
} from './MessageCard.styles';
import MessagesHeader from './MessagesHeader';
import { StyledCreatedAt } from './StyledCreatedAt.styles';
import { StyledTextarea } from './StyledTextarea.styles';
import Button from '../Button/Button';
import { StyledLine } from '../Line/Line.styles';
import dateConversion from '../../utils/dateConversion';

// NOTE - 해당 컴포넌트의 messageData는 객체로 받아옵니다.
function MessageCard({
  type = 'card',
  messageData = {},
  onEvent = {
    modal: () => {},
    close: () => {},
  },
}) {
  return (
    <SCmessageCardContainer
      type={type}
      // STUB - 타입이 'card' 인 경우에만 모달 이벤트를 실행합니다.
      onClick={type === 'card' ? onEvent.modal : undefined}
      $font={messageData?.font}>
      <MessagesHeader
        messageData={{ ...messageData }}
        type={type}
        onEvent={onEvent}
      />
      <SCMessageCardTextArea>
        <StyledLine />
        <StyledTextarea
          dangerouslySetInnerHTML={{ __html: messageData?.content }}
        />
        {/* STUB - 타입이 'modal'이 아닌 경우에 본문 createdAt를 표기 합니다. */}
        {type !== 'modal' && (
          <StyledCreatedAt>
            {dateConversion(messageData?.createdAt)}
          </StyledCreatedAt>
        )}
        {/* STUB - 타입이 'modal'인 경우 닫기 버튼을 보여주고 닫기 이벤트를 실행합니다. */}
        {type === 'modal' && (
          <Button size="m" onClick={onEvent.close}>
            확인
          </Button>
        )}
      </SCMessageCardTextArea>
    </SCmessageCardContainer>
  );
}

MessageCard.propTypes = {
  type: PropTypes.oneOf(['card', 'modal', 'edit']).isRequired,
  messageData: PropTypes.object.isRequired,
  onEvent: PropTypes.shape({
    modal: PropTypes.func,
  }),
  cardId: PropTypes.number,
};

export default MessageCard;
