import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MessageCard from './MessageCard';

MessageCardList.propTypes = {
  type: PropTypes.string.isRequired,
  messageData: PropTypes.array.isRequired,
  onEvent: PropTypes.object,
};

const handleDeleteClick = (id, event) => {
  event.stopPropagation();
  console.log(`클릭 카드 ID : ${id}, [삭제 합니다]`);
};

const handleEditClick = (id, event) => {
  event.stopPropagation();
  console.log(`클릭 카드 ID : ${id}, [수정 페이지로 이동 합니다]`);
};

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
