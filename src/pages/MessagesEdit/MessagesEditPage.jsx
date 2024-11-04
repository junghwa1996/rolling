/**
 * MessagesEditPage 컴포넌트
 *
 * 메시지 카드 목록을 불러와 리스트로 렌더링하고, 수정, 삭제가 가능합니다.
 * 서버에서 메시지 리스트를 가져와 `CardList`에 전달 합니다.
 * 재사용 불가한 페이지 컴포넌트 입니다.
 */

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled, css } from 'styled-components';

import { getMessagesList, getRollingItem } from '../../service/api';
import CardList from '../../components/CardComponents/CardList/CardList';
import useFetchData from '../../hooks/useFetchData';

export const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
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

  useEffect(() => {
    const AdminCheck = prompt(
      '관리자만 접근할 수 있습니다. 비밀번호를 입력해 주세요.',
    );

    if (AdminCheck !== KEY) {
      alert('비밀번호가 틀렸습니다.');
      nav(-1);
    }
  }, []);

  // TODO - 추후 로딩과 에러 페이지 별도 작업
  if (messageLoading || backgroundLoading) return <p>로딩 중 입니다</p>;
  if (messageError || backgroundError) return <p>에러가 발생했어요!</p>;

  return (
    <>
      <StyledMain
        $bgColor={backgroundData?.backgroundColor}
        $bgImage={backgroundData?.backgroundImageURL}>
        <StyledInner>
          <CardList type="edit" messageData={messageData?.results || []} />
        </StyledInner>
      </StyledMain>
    </>
  );
}

export default MessagesListPage;
