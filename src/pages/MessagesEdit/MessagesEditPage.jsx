/**
 * MessagesEditPage 컴포넌트
 *
 * 메시지 카드 목록을 불러와 리스트로 렌더링하고, 수정, 삭제가 가능합니다.
 * 서버에서 메시지 리스트를 가져와 `CardList`에 전달 합니다.
 * 재사용 불가한 페이지 컴포넌트 입니다.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled, css } from 'styled-components';

import { getMessagesList, getRollingItem } from '../../service/api';
import CardList from '../../components/CardComponents/CardList/CardList';
import useFetchData from '../../hooks/useFetchData';

export const StyledMain = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  ${({ $bgColor, $bgImage }) => {
    if ($bgImage) {
      return css`
        background: url(${$bgImage}) no-repeat center center/cover;
        &::before {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          content: '';
          opacity: 0.5;
          width: 100%;
          height: 100vh;
          z-index: 1;
          background-color: ${({ theme }) => theme.blackText};
        }
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

const KEY = process.env.REACT_APP_ADMIN_KEY;

function MessagesListPage() {
  const currentURL = useLocation();
  const presentPath = currentURL.pathname.split('/');
  const currentId = presentPath[presentPath.length - 2];

  const nav = useNavigate();

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(9);
  const [allMessages, setAllMessages] = useState([]);

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
      setIsFetching(false);
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
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (messageData?.next && !isFetching) {
                handleLoadMore();
              }
            }
          });
        },
        { threshold: 1.0 },
      );

      const currentSensor = sensorRef.current;
      if (currentSensor) {
        observer.observe(sensorRef.current);
      }

      return () => {
        if (currentSensor) {
          observer.unobserve(currentSensor);
        }
      };
    }
  }, [sensorRef, isFetching, messageData, handleLoadMore]);

  // STUB - 배경 정보 요청
  const { data: backgroundData, error: backgroundError } = useFetchData(
    () => getRollingItem(currentId),
    [currentId],
    (res) => ({
      backgroundColor: res.backgroundColor,
      backgroundImageURL: res.backgroundImageURL,
    }),
  );

  useEffect(() => {
    const AdminCheck = prompt(
      '관리자만 접근할 수 있습니다. 비밀번호를 입력해 주세요.',
    );

    if (AdminCheck !== KEY) {
      alert('비밀번호가 틀렸습니다.');
      nav(-1);
    }
  }, [nav]);

  // TODO - 추후 로딩과 에러 페이지 별도 작업
  if (messageError || backgroundError) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <StyledMain
        $bgColor={backgroundData?.backgroundColor}
        $bgImage={backgroundData?.backgroundImageURL}>
        <StyledInner>
          <CardList type="edit" messageData={allMessages} />

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
    </>
  );
}

export default MessagesListPage;
