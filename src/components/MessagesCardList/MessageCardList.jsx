/**
 * MessageCardList 컴포넌트
 *
 * 메시지 카드의 목록을 렌더링하는 컴포넌트로, 각 카드의 타입과 데이터를 받아 리스트로 보여줍니다.
 * 각 카드에는 '삭제', '수정' 및 '모달 열기' 기능이 있으며, onEvent prop을 통해 상위 컴포넌트와 상호작용합니다.
 *  *
 * @component
 * @param {string} type - 메시지 카드의 타입 (예: 'card', 'modal', 'edit') *필수값
 * @param {Array} messageData - 메시지 데이터 배열 *필수값
 * @param {Object} onEvent - 이벤트 핸들러 객체
 * @param {Function} onEvent.modal - 모달을 여는 이벤트 핸들러
 *
 * @example
 * const handleModalOpen = (id) => console.log(`모달 오픈 카드 ID: ${id}`);
 *
 * <MessageCardList
 *    type="card"
 *    messageData={[
 *      { id: 1, content: "<p>Hello</p>", createdAt: "2024-10-30" },
 *      { id: 2, content: "<p>World</p>", createdAt: "2024-10-31" }
 *    ]}
 *    onEvent={{ modal: handleModalOpen }}
 * />
 *
 */

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  StyledCardListContainer,
  StyledMessageItemArea,
  StyledMessageCard,
  StyledButtonArea,
  StyledButton,
} from './MessageCardList.styles';
import useDeviceType from '../../hooks/useDeviceType';
import InfiniteScroll from '../../pages/MessagesEdit/InfiniteScroll';
import { deleteMessages } from '../../service/api';

MessageCardList.propTypes = {
  type: PropTypes.string.isRequired,
  messageData: PropTypes.array.isRequired,
  onEvent: PropTypes.object,
  children: PropTypes.any,
};

function MessageCardList({ type, messageData = [], onEvent, children }) {
  const [messageDataList, setMessageDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoad = () => {
      setMessageDataList(messageData);
    };
    handleLoad();
  }, [messageData]);

  const currentURL = useLocation();
  const presentPath = currentURL.pathname.split('/');
  const isEdit = presentPath[presentPath.length - 1] === 'message';
  const presentId = presentPath[presentPath.length - 2];

  const deviceType = useDeviceType();

  // STUB - delete 버튼을 클릭했을 때 이벤트 함수입니다.
  const handleDeleteClick = async (id, event) => {
    event.stopPropagation();
    setLoading(true);
    setError(null);
    try {
      await deleteMessages(id);
      setMessageDataList((prevData) =>
        prevData.filter((item) => item.id !== id),
      );
      navigate(`/post/${presentId}`);
    } catch (error) {
      setError(error);
      console.error(`삭제 실패: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>로딩 중 입니다...</p>;
  if (error) return <p>데이터 삭제에 실패했습니다 🫠</p>;

  // STUB - Edit 버튼을 클릭했을 때 이벤트 함수입니다.
  const handleEditClick = (presentId, messageId) => {
    navigate(`/post/${presentId}/message?id=${messageId}`);
  };

  return (
    <StyledCardListContainer>
      {isEdit === 'edit' && (
        <StyledButtonArea>
          <StyledButton size={deviceType === 'pc' ? 's' : 'xl'} color="primary">
            삭제하기
          </StyledButton>
        </StyledButtonArea>
      )}
      <StyledMessageItemArea>
        {children}
        <InfiniteScroll
          data={messageDataList}
          fetchMoreData={fetchMoreMessages}
          hasMore={true}>
          {(item) => (
            <StyledMessageCard
              key={item.id}
              type={type}
              messageData={{ ...item }}
              onEvent={{
                modal: () => onEvent.modal(item.id),
                buttonDelete: (event) => handleDeleteClick(item.id, event),
                buttonEdit: (event) => handleEditClick(presentId, item.id),
              }}
            />
          )}
        </InfiniteScroll>
      </StyledMessageItemArea>
    </StyledCardListContainer>
  );
}

export default MessageCardList;
