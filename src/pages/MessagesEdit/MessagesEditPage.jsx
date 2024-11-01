import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMessagesList, getRollingItem } from '../../service/api';
import {
  StyledMain,
  StyledInner,
} from '../MessagesList/MessagesListPage.styles';
import MessageCardList from '../../components/MessagesCardList/MessageCardList';
import useFetchData from '../../hooks/useFetchData';
import InfiniteScroll from './InfiniteScroll'; //무한 스크롤 기능 컴포넌트//

function MessagesListPage() {
  const currentURL = useLocation();
  const presentPath = currentURL.pathname.split('/');
  const currentId = presentPath[presentPath.length - 2];

  const [page, setPage] = useState(1); // 페이지 번호 관리 //
  const [messages, setMessages] = useState([]); // 빈 배열 초기화 //
  const [hasMore, setHasMore] = useState(true); // 추가 로드 할 메시지 여부 관리 //
  const [loading, setLoading] = useState(false); // 데이터 로딩 상태 관리 //

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

  const fetchMessages = async () => {
    if (loading || !hasMore) return; // 로딩 중이거나 더 이상 데이터가 없으면 중단
    setLoading(true);

    try {
      const res = await getMessagesList(currentId, page);
      setMessages((prev) => [...prev, ...res.results]);
      if (res.results.length === 0) {
        setHasMore(false); // 더 이상 데이터가 없으면 false로 설정 //
      }
      setPage((prev) => prev + 1); // 페이지 증가 //
    } catch (error) {
      console.error('메시지 로드 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchMessages();
  }, [currentId]);

  // TODO - 추후 로딩과 에러 페이지 별도 작업
  if (backgroundLoading) return <p>로딩 중 입니다</p>;
  if (backgroundError) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <StyledMain
        $bgColor={backgroundData?.backgroundColor}
        $bgImage={backgroundData?.backgroundImageURL}>
        <StyledInner>
          <InfiniteScroll
            fetchData={fetchMessages}
            hasMore={hasMore}
            data={messages}>
            {(item) => (
              <MessageCardList
                key={item.id}
                type="edit"
                messageData={messages}
              />
            )}
          </InfiniteScroll>
        </StyledInner>
      </StyledMain>
    </>
  );
}

export default MessagesListPage;
