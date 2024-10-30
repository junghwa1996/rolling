import { useEffect, useState } from 'react';

import { getMessagesList } from '../../service/api';
import MessageCardList from './MessageCardList';
import StyledModal from '../../components/Modal/StyledModal';

function MessagesListPage() {
  const [messageData, setMessageData] = useState([]);

  const [hasModalOpen, setHasModalOpen] = useState(false);
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
      {hasModalOpen && (
        <StyledModal
          isOpen={hasModalOpen}
          onRequestClose={handleCloseModal}
          messageData={selectedCard}
          onEvent={{ close: handleCloseModal }}
        />
      )}
    </>
  );
}

export default MessagesListPage;
