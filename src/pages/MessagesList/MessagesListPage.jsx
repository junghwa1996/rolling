/**
 * MessagesListPage 컴포넌트
 *
 * 메시지 카드 목록을 불러와 리스트로 렌더링하고, 각 메시지 카드를 클릭하면 해당 카드의 데이터를 모달로 표시하는 컴포넌트입니다.
 * 서버에서 메시지 리스트를 가져와 `CardList`에 전달하고, 선택된 메시지 카드의 데이터를 모달(`StyledModal`)로 표시합니다.
 * 재사용 불가한 페이지 컴포넌트 입니다.
 */

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { getMessagesList, getRollingItem } from '../../service/api';
import CardAdd from '../../components/CardComponents/CardAdd/CardAdd';
import CardList from '../../components/CardComponents/CardList/CardList';
import SkeletonCard from '../../components/CardComponents/Skeleton/SkeletonCard';
import useFetchData from '../../hooks/useFetchData';
import ModalLayout from '../../components/ModalComponents/ModalLayout/ModalLayout';

export const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  ${({ $bgColor, $bgImage }) => {
    if ($bgImage) {
      return css`
        background: url(${$bgImage}) no-repeat center center/cover;
        /* &::before {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          content: '';
          opacity: 0.5;
          width: 100%;
          height: 100vh;
          background-color: ${({ theme }) => theme.blackText};
        } */
      `;
    } else {
      return css`
        background-color: var(--${$bgColor}-200);
      `;
    }
  }}
`;

export const StyledInner = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 6.3rem 0;

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    max-width: 72rem;
    padding: 9.3rem 0;
  }
  @media screen and (max-width: 767px) {
    max-width: 32rem;
    padding: 3.2rem 0;
  }
`;

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
  if (messageLoading || backgroundLoading) {
    return (
      <StyledInner>
        {[...Array(3)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </StyledInner>
    );
  }
  if (messageError || backgroundError) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <StyledMain
        $bgColor={backgroundData?.backgroundColor}
        $bgImage={backgroundData?.backgroundImageURL}>
        <StyledInner>
          <CardList
            type="card"
            messageData={messageData?.results || []}
            onEvent={{ modal: handleMessageClick }}>
            <CardAdd id={currentId} />
          </CardList>
        </StyledInner>
      </StyledMain>
      {hasModalOpen && (
        <ModalLayout
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
