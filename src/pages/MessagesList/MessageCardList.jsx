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
import PropTypes from 'prop-types';

import MessageCard from './MessageCard';

MessageCardList.propTypes = {
  type: PropTypes.string.isRequired,
  messageData: PropTypes.array.isRequired,
  onEvent: PropTypes.object,
};

// STUB - delete 버튼을 클릭했을 때 이벤트 함수 입니다.
const handleDeleteClick = (id, event) => {
  event.stopPropagation();
  // TODO - 원활한 테스팅을 위해 추가했습니다. 기능 작업이 완료되면 삭제해주세요
  console.log(`클릭 카드 ID : ${id}, [삭제 합니다]`);
};

// STUB - Edit 버튼을 클릭했을 때 이벤트 함수 입니다.
const handleEditClick = (id, event) => {
  event.stopPropagation();
  // TODO - 원활한 테스팅을 위해 추가했습니다. 기능 작업이 완료되면 삭제해주세요
  console.log(`클릭 카드 ID : ${id}, [수정 페이지로 이동 합니다]`);
};

// NOTE - 해당 컴포넌트의 messageData는 배열로 받아옵니다.
function MessageCardList({ type, messageData = [], onEvent }) {
  const [messageDataList, setMessageDataList] = useState([]);

  useEffect(() => {
    const handleLoad = () => {
      setMessageDataList(messageData);
    };
    handleLoad();
  }, [messageData]);

  return (
    <ul>
      {messageDataList.map((item) => (
        <li key={item.id}>
          <MessageCard
            type={type}
            messageData={{ ...item }}
            onEvent={{
              modal: () => onEvent.modal(item.id),
              buttonDelete: (event) => handleDeleteClick(item.id, event),
              buttonEdit: (event) => handleEditClick(item.id, event),
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default MessageCardList;
