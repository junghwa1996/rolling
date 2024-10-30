import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // ANCHOR: 모달 테스트 용

import { getMessagesList } from '../../service/api';
import MessageCardList from './MessageCardList';
import MessageCard from './MessageCard';

function MessagesListPage() {
  const [messageData, setMessageData] = useState([]);
  const [hasModalOpen, setHasModalOpen] = useState(false);

  /* ANCHOR: 모달 테스트 용 */
  const [selectedCard, setSelectedCard] = useState(null);

  const handleMessageClick = (id) => {
    const cardData = messageData.find((card) => card.id === id);
    setSelectedCard(cardData);
    setHasModalOpen(true);
    return console.log(`클릭 카드 ID : ${id}, [모달을 엽니다]`);
  };

  const handleCloseModal = () => {
    setHasModalOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const handleLode = async () => {
      try {
        const res = await getMessagesList('9117');
        const { results } = res;

        setMessageData(results);
      } catch (error) {
        console.error('롤링 리스트를 불러오는데 오류가 발생 했습니다.:', error);
      }
    };

    handleLode();
  }, []);

  return (
    <>
      <MessageCardList
        type="card"
        messageData={messageData}
        onEvent={{ modal: handleMessageClick }}
      />
      {/* ANCHOR: 모달 테스트 용 */}
      {hasModalOpen && (
        <ModalDemo
          messageData={selectedCard}
          onEvent={{ close: handleCloseModal }}
        />
      )}
    </>
  );
}

// ANCHOR: 모달 테스트 용

ModalDemo.propTypes = {
  messageData: PropTypes.object,
  onEvent: PropTypes.shape({
    close: PropTypes.func,
  }),
};

function ModalDemo({ messageData, onEvent }) {
  return (
    <MessageCard type="modal" messageData={messageData} onEvent={onEvent} />
  );
}

export default MessagesListPage;
