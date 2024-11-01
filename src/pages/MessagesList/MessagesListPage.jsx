/**
 * MessagesListPage 컴포넌트
 *
 * 메시지 카드 목록을 불러와 리스트로 렌더링하고, 각 메시지 카드를 클릭하면 해당 카드의 데이터를 모달로 표시하는 컴포넌트입니다.
 * 서버에서 메시지 리스트를 가져와 `MessageCardList`에 전달하고, 선택된 메시지 카드의 데이터를 모달(`StyledModal`)로 표시합니다.
 * 재사용 불가한 페이지 컴포넌트 입니다.
 */

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMessagesList, getRollingItem } from '../../service/api';
import { StyledMain, StyledInner } from './MessagesListPage.styles';
import styles from './MessagesListPage.module.css';
import StyledModal from '../../components/Modal/StyledModal';
import MessageCardAddItem from '../../components/MessagesCardList/MessageCardAddItem';
import MessageCardList from '../../components/MessagesCardList/MessageCardList';
import useFetchData from '../../hooks/useFetchData';

function MessagesListPage() {
  const [hasModalOpen, setHasModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const currentURL = useLocation();
  const presentPath = currentURL.pathname.split('/');
  const currentId = presentPath[presentPath.length - 1];

  // STUB - 메시지 리스트 요청
  const {
    data: messageData,
    loading: messageLoading,
    error: messageError,
  } = useFetchData(() => getMessagesList(currentId), [currentId]);

  // STUB - 배경 정보 요청
  const {
    data: backgroundData,
    loading: backgroundLoading,
    error: backgroundError,
  } = useFetchData(
    () => getRollingItem(currentId),
    [currentId],
    (res) => ({
      backgroundColor: res.backgroundColor,
      backgroundImageURL: res.backgroundImageURL,
    }),
  );

  // STUB - 모달을 여는 이벤트 입니다.
  const handleMessageClick = (id) => {
    const cardData =
      messageData?.results?.find((card) => card.id === id) || null;
    setSelectedCard(cardData);
    setHasModalOpen(true);
  };

  // STUB - 모달을 닫는 이벤트 입니다.
  const handleCloseModal = () => {
    setHasModalOpen(false);
    setSelectedCard(null);
  };

  // TODO - 추후 로딩과 에러 페이지 별도 작업
  if (messageLoading || backgroundLoading) return <p>로딩 중 입니다</p>;
  if (messageError || backgroundError) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <div className={styles.pageWrap}>
        <StyledMain
          $bgColor={backgroundData?.backgroundColor}
          $bgImage={backgroundData?.backgroundImageURL}>
          <StyledInner>
            <MessageCardList
              type="card"
              messageData={messageData?.results || []}
              onEvent={{ modal: handleMessageClick }}>
              <MessageCardAddItem id={currentId} />
            </MessageCardList>
          </StyledInner>
        </StyledMain>
      </div>
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
