/**
 * MessagesHeader 컴포넌트
 *
 * 메시지 카드의 헤더 부분을 렌더링하는 컴포넌트로, 보낸 사람의 프로필, 이름, 관계 배지, 생성 날짜 등을 표시합니다.
 * 'edit' 타입에서는 수정 및 삭제 버튼을 제공하며, 'modal' 타입에서는 생성 날짜를 표시합니다.
 *
 * @component
 * @param {string} type - 메시지 카드의 타입 (예: 'card', 'modal', 'edit')
 * @param {Object} messageData - 메시지 데이터 객체
 * @param {string} messageData.profileImageURL - 보낸 사람의 프로필 이미지 URL
 * @param {string} messageData.sender - 보낸 사람의 이름
 * @param {string} messageData.relationship - 보낸 사람과의 관계 (예: 친구, 가족, 동료 등)
 * @param {string} messageData.createdAt - 메시지 생성일
 * @param {Object} onEvent - 이벤트 핸들러 객체
 * @param {Function} onEvent.buttonDelete - 삭제 버튼 클릭 시 실행될 이벤트 핸들러
 * @param {Function} onEvent.buttonEdit - 수정 버튼 클릭 시 실행될 이벤트 핸들러
 *
 * @example
 * const handleDelete = () => console.log('삭제 버튼 클릭');
 * const handleEdit = () => console.log('수정 버튼 클릭');
 *
 * <MessagesHeader
 *    type="edit"
 *    messageData={{
 *      profileImageURL: "https://example.com/profile.jpg",
 *      sender: "John Doe",
 *      relationship: "친구",
 *      ...
 *    }}
 *    onEvent={{ buttonDelete: handleDelete, buttonEdit: handleEdit }}
 * />
 *
 */

import PropTypes from 'prop-types';

import {
  MSHeaderContainer,
  MSHeaderPosition,
  MSHeaderArea,
  ButtonContainer,
} from './MessagesHeader.styles.js';
import { StyledCreatedAt } from './StyledCreatedAt.styles.js';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete.svg';
import { ReactComponent as UpdateIcon } from '../../assets/icon-edit.svg';
import Badge from '../../components/Badge/Badge';
import Outlined from '../../components/Outlined/Outlined';
import Profile from '../../components/Profile/Profile';
import dateConversion from '../../utils/dateConversion';

MessagesHeader.propTypes = {
  type: PropTypes.string,
  messageData: PropTypes.object,
  onEvent: PropTypes.shape({
    buttonDelete: PropTypes.func,
    buttonEdit: PropTypes.func,
  }),
};

// STUB - 해당 컴포넌트는 MessagesCard.jsx 내부 컴포넌트 입니다. Outlined 컴포넌트로 이벤트를 전달해 실행 됩니다.
function MessagesHeader({
  type,
  messageData = {},
  onEvent = {
    buttonDelete: () => {},
    buttonEdit: () => {},
  },
}) {
  return (
    <MSHeaderContainer>
      <MSHeaderPosition>
        <Profile imageURL={messageData.profileImageURL} />
        <MSHeaderArea>
          <h3>
            <span>From.</span>
            {messageData.sender}
          </h3>
          <Badge value={messageData.relationship} />
        </MSHeaderArea>
      </MSHeaderPosition>
      {/* STUB - 타입이 'edit'일 때, 노출 됩니다. */}
      {type === 'edit' && (
        <ButtonContainer>
          <Outlined icon={<UpdateIcon />} onClick={onEvent.buttonEdit} />
          <Outlined icon={<DeleteIcon />} onClick={onEvent.buttonDelete} />
        </ButtonContainer>
      )}
      {/* STUB - 타입이 'modal'일 때, createdAt을 노출 합니다. */}
      {type === 'modal' && (
        <StyledCreatedAt>
          {dateConversion(messageData.createdAt)}
        </StyledCreatedAt>
      )}
    </MSHeaderContainer>
  );
}

export default MessagesHeader;
