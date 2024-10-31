/**
 * MessagesEditPage 컴포넌트
 *
 * 메시지 카드 목록을 불러와 리스트로 렌더링하고, 수정, 삭제가 가능합니다.
 * 서버에서 메시지 리스트를 가져와 `MessageCardList`에 전달 합니다.
 * 재사용 불가한 페이지 컴포넌트 입니다.
 */

import { useLocation } from 'react-router-dom';

import { getMessagesList, getRollingItem } from '../../service/api';
import {
  StyledMain,
  StyledInner,
} from '../MessagesList/MessagesListPage.styles';
import MessageCardList from '../MessagesList/MessageCardList';
import useFetchData from '../../hooks/useFetchData';

function MessagesListPage() {
  const currentURL = useLocation();
  const presentPath = currentURL.pathname.split('/');
  const currentId = presentPath[presentPath.length - 2];

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

  // TODO - 추후 로딩과 에러 페이지 별도 작업
  if (messageLoading || backgroundLoading) return <p>로딩 중 입니다</p>;
  if (messageError || backgroundError) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <StyledMain
        $bgColor={backgroundData?.backgroundColor}
        $bgImage={backgroundData?.backgroundImageURL}>
        <StyledInner>
          <MessageCardList
            type="edit"
            messageData={messageData?.results || []}
          />
        </StyledInner>
      </StyledMain>
    </>
  );
}

export default MessagesListPage;
