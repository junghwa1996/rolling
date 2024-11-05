/**
 * MessagesListPage 컴포넌트
 *
 * 메시지 카드 목록을 불러와 리스트로 렌더링하고, 각 메시지 카드를 클릭하면 해당 카드의 데이터를 모달로 표시하는 컴포넌트입니다.
 * 서버에서 메시지 리스트를 가져와 `CardList`에 전달하고, 선택된 메시지 카드의 데이터를 모달(`StyledModal`)로 표시합니다.
 * 재사용 불가한 페이지 컴포넌트 입니다.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { getMessagesList, getRollingItem } from '../../service/api';
import CardAdd from '../../components/CardComponents/CardAdd/CardAdd';
import CardList from '../../components/CardComponents/CardList/CardList';
import useFetchData from '../../hooks/useFetchData';
import ModalLayout from '../../components/ModalComponents/ModalLayout/ModalLayout';
import SkeletonCard from '../../components/CardComponents/Skeleton/SkeletonCard';

export const StyledMain = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  ${({ $bgColor, $bgImage }) => {
    if ($bgImage) {
      return css`
        background: url(${$bgImage}) no-repeat center center/cover;
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

  // 추가 요청 중인지 상태를 확인하는 플래그
  const [isFetching, setIsFetching] = useState(false);

  // 센서 div에 대한 ref
  const sensorRef = useRef(null);

  // 메시지 리스트 요청
  const { data: messageData, error: messageError } = useFetchData(
    () => getMessagesList(currentId, params),
    [currentId, offset, limit],
  );

  const params = {
    offset,
    limit,
  };

  // 새로운 데이터를 불러올 때 allMessages에 누적
  useEffect(() => {
    if (messageData?.results) {
      setAllMessages((prevMessages) => [
        ...prevMessages,
        ...messageData.results,
      ]);
      setIsFetching(false); // 데이터를 불러온 후 isFetching을 false로 설정하여 다음 요청을 허용
    }
  }, [messageData]);

  // 무한 스크롤 데이터 가져오기
  // handleLoadMore 함수를 useCallback으로 감싸서 메모이제이션
  const handleLoadMore = useCallback(() => {
    setIsFetching(true);
    setOffset((prevOffset) => prevOffset + limit);
    setLimit(9);
  }, [limit]);

  // 무한 스크롤 IntersectionObserver
  useEffect(() => {
    if (!isFetching) {
      // IntersectionObserver 생성: sensorRef에 연결된 요소가 뷰포트에 들어올 때마다 실행
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 요소가 화면에 나타나면 다음 요청을 시작하고 isFetching을 true로 설정
              if (messageData?.next && !isFetching) {
                handleLoadMore();
              }
            }
          });
        },
        { threshold: 1.0 }, // 요소가 완전히 뷰포트에 들어왔을 때 실행
      );

      // sensorRef에 observer를 연결하여 관찰 시작
      const currentSensor = sensorRef.current; // sensorRef.current를 로컬 변수에 저장
      if (currentSensor) {
        observer.observe(currentSensor);
      }

      // 컴포넌트 언마운트 시 또는 sensorRef가 변경될 때 observer 연결 해제
      return () => {
        if (currentSensor) {
          observer.unobserve(currentSensor);
        }
      };
    }
  }, [sensorRef, isFetching, messageData, handleLoadMore]);

  // 배경 정보 요청
  const { data: backgroundData, error: backgroundError } = useFetchData(
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
  if (messageError || backgroundError) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <StyledMain
        $bgColor={backgroundData?.backgroundColor}
        $bgImage={backgroundData?.backgroundImageURL}>
        <StyledInner>
          <CardList
            type="card"
            messageData={allMessages}
            onEvent={{ modal: handleMessageClick }}>
            <CardAdd id={currentId} />
          </CardList>

          {messageData?.next && (
            <div ref={sensorRef}>
              {[...Array(1)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}
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
