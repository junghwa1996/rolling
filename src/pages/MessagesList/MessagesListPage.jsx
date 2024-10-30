/**
 * MessagesListPage 컴포넌트
 *
 * 메시지 카드 목록을 불러와 리스트로 렌더링하고, 각 메시지 카드를 클릭하면 해당 카드의 데이터를 모달로 표시하는 컴포넌트입니다.
 * 서버에서 메시지 리스트를 가져와 `MessageCardList`에 전달하고, 선택된 메시지 카드의 데이터를 모달(`StyledModal`)로 표시합니다.
 * 재사용 불가한 페이지 컴포넌트 입니다.
 */

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMessagesList, getRollingItem } from '../../service/api';
import { StyledMain, StyledInner } from './MessagesListPage.styles';
import StyledModal from '../../components/Modal/StyledModal';
import MessageCardAddItem from './MessageCardAddItem';
import MessageCardList from './MessageCardList';

function MessagesListPage() {
  const [messageData, setMessageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [bgColor, setBgColor] = useState(null);
  const [bgImage, setBgImage] = useState(null);

  const [hasModalOpen, setHasModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const currentURL = useLocation();
  const presentPath = currentURL.pathname.split('/');
  const currentId = presentPath[presentPath.length - 1];

  useEffect(() => {
    // STUB - 데이터를 요청하는 함수 입니다,
    const getMessagesListLode = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getMessagesList(currentId);
        const { results } = res;

        setMessageData(results);
      } catch (error) {
        console.error(
          '롤링 메세지 리스트를 불러오는데 오류가 발생 했습니다.:',
          error,
        );
      } finally {
        setLoading(false);
      }
    };

    const getRecipientsList = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getRollingItem(currentId);
        const { backgroundColor, backgroundImageURL } = res;

        setBgColor(backgroundColor);
        setBgImage(backgroundImageURL);
      } catch (error) {
        console.error('롤링 리스트를 불러오는데 오류가 발생 했습니다.:', error);
      } finally {
        setLoading(false);
      }
    };

    getRecipientsList();
    getMessagesListLode();
  }, [currentId]);

  console.log(bgColor, bgImage);

  // STUB - 메세지 클릭 시 클릭한 데이터를 모달을 띄어 보여줍니다.
  const handleMessageClick = (id) => {
    const cardData = messageData.find((card) => card.id === id);
    setSelectedCard(cardData);
    setHasModalOpen(true);
    console.log(`클릭 카드 ID : ${id}, [모달을 엽니다]`); // TODO - URL 변경 함수 실행 시 제대로 값을 가져오는지 테스트 하기위해 남겨둡니다. 개발 완료 후 지워주세요
  };

  // STUB -모달을 닫는 이벤트 입니다. 해당 함수는 MessageCard.jsx 에서 이벤트 발생 시 실행 됩니다.
  const handleCloseModal = () => {
    setHasModalOpen(false);
    setSelectedCard(null);
  };

  if (loading) return <p>로딩 중 입니다</p>;
  if (error) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <StyledMain $bgColor={bgColor} $bgImage={bgImage}>
        <StyledInner>
          <MessageCardList
            type="card"
            messageData={messageData}
            onEvent={{ modal: handleMessageClick }}>
            <MessageCardAddItem id={currentId} />
          </MessageCardList>
        </StyledInner>
      </StyledMain>
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
