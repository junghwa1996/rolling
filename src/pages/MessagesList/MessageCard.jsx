/**
 * 메시지 카드 단일 컴포넌트
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.type - 메시지 카드의 타입 (예: 'card', 'modal', 'edit')(필수)
 * @param {Object} props.MessageData - 메시지 데이터 객체(필수)
 * @param {string} props.MessageData.name - 보낸 사람의 이름
 * @param {string} props.MessageData.badgeValue - 라벨 값 (친구, 가족, 동료, 지인 중 하나)
 * @param {string} props.MessageData.createdAt - 메시지 생성일 (날짜 문자열)
 * @param {string} props.MessageData.imageUrl - 보낸 사람의 프로필 이미지 URL
 * @param {string} props.MessageData.text - 메시지 내용
 * @param {Object} props.onEvent - 이벤트 핸들러 객체
 * @param {Function} props.onEvent.Modal - 모달을 여는 이벤트 핸들러
 * @param {Function} props.onEvent.ButtonDelete - 삭제 버튼 클릭 핸들러
 * @param {Function} props.onEvent.ButtonBtnEdit - 수정 버튼 클릭 핸들러
 * @returns {JSX.Element} 메시지 카드 컴포넌트
 */

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
  }).isRequired,

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
