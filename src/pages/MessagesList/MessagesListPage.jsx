import { useEffect, useState } from 'react';

import { getMessagesList } from '../../service/api';
import MessageCardList from './MessageCardList';

function MessagesListPage() {
  const [messageData, setMessageData] = useState([]);

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
      <MessageCardList type="card" messageData={messageData} />
      <MessageCardList type="modal" messageData={messageData} />
    </>
  );
}

export default MessagesListPage;
