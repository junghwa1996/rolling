/**
 * MessagesListPage 컴포넌트
 *
 * 메시지 카드 목록을 불러와 리스트로 렌더링하고, 각 메시지 카드를 클릭하면 해당 카드의 데이터를 모달로 표시하는 컴포넌트입니다.
 * 서버에서 메시지 리스트를 가져와 `CardList`에 전달하고, 선택된 메시지 카드의 데이터를 모달(`StyledModal`)로 표시합니다.
 * 재사용 불가한 페이지 컴포넌트 입니다.
 */

import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { getMessagesList, getRollingItem } from '../../service/api';
import CardAdd from '../../components/CardComponents/CardAdd/CardAdd';
import CardList from '../../components/CardComponents/CardList/CardList';
import useFetchData from '../../hooks/useFetchData';
import ModalContent from '../../components/ModalComponents/ModalContent/ModalContent';

export const StyledMain = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* overflow: auto; */
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

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);
  const [allMessages, setAllMessages] = useState([]);

  // 센서 div에 대한 ref
  const sensorRef = useRef(null);

  const params = {
    offset,
    limit,
  };

  // 메시지 리스트 요청
  const {
    data: messageData,
    loading: messageLoading,
    error: messageError,
  } = useFetchData(
    () => getMessagesList(currentId, params),
    [currentId, offset, limit],
  );

  // 새로운 데이터를 불러올 때 allMessages에 누적
  useEffect(() => {
    if (messageData?.results) {
      setAllMessages((prevMessages) => [
        ...prevMessages,
        ...messageData.results,
      ]);
    }
  }, [messageData]);

  useEffect(() => {
    if (!messageLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 다음 데이터가 있는 경우에만 추가 요청
              if (messageData?.next) {
                handleLoadMore();
              }
            }
          });
        },
        { threshold: 1.0 },
      );

      if (sensorRef.current) {
        observer.observe(sensorRef.current);
      }

      return () => {
        if (sensorRef.current) {
          observer.unobserve(sensorRef.current);
        }
      };
    }
  }, [sensorRef, messageLoading, messageData]);

  // 무한 스크롤 데이터 가져오기
  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
    setLimit(9); // 이후부터는 9개씩 불러옴
  };

  // 배경 정보 요청
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

  // 모달을 여는 이벤트입니다.
  const handleMessageClick = (id) => {
    const cardData = allMessages.find((card) => card.id === id) || null;
    setSelectedCard(cardData);
    setHasModalOpen(true);
  };

  // 모달을 닫는 이벤트입니다.
  const handleCloseModal = () => {
    setHasModalOpen(false);
    setSelectedCard(null);
  };

  // TODO - 추후 로딩과 에러 페이지 별도 작업
  // if (messageLoading || backgroundLoading) return <p>로딩 중 입니다</p>;
  if (messageError || backgroundError) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <StyledMain
        $bgColor={backgroundData?.backgroundColor}
        $bgImage={backgroundData?.backgroundImageURL}>
        <StyledInner>
          <CardList
            type="card"
            messageData={allMessages} // allMessages를 전달
            onEvent={{ modal: handleMessageClick }}>
            <CardAdd id={currentId} />
          </CardList>

          {/* 센서 div */}
          <div
            ref={sensorRef}
            style={{
              height: '1px',
              marginTop: '100px',
            }}
          />
        </StyledInner>
      </StyledMain>
      {hasModalOpen && (
        <ModalContent
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
