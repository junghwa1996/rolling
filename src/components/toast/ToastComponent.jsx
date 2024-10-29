import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import closeIcon from '../../assets/close.svg';
import completedIcon from '../../assets/completed.svg';

// 스타일 컴포넌트 설정
const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* 부모 요소의 너비에 맞춰서 조정 */
  max-width: 30rem; /* 최대 너비 설정 */
  height: 4rem; /* 64px */
  padding: 1.1875rem 1.875rem; /* 19px 30px */
  border-radius: 0.5rem; /* 모든 모서리에 동일한 반경 적용 */
  background: #000000cc;
  opacity: 1;
  overflow: hidden; /* 내용이 잘리지 않도록 설정 */
`;

const ToastMessage = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  letter-spacing: -0.01em;
  text-align: left;
  color: white;
  overflow-wrap: break-word;
  white-space: normal;
  flex-grow: 1; /* 메시지가 공간을 차지하도록 설정 */
  margin: 0 1rem; /* 이미지와 버튼 사이에 여백 추가 */
`;

const ToastImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.625rem;
`;

const CustomCloseButton = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0; /* 버튼이 줄어들지 않도록 설정 */
`;

// ToastContainer 스타일링
const StyledToastContainer = styled(ToastContainer)`
  &&& {
    .Toastify__toast {
      background: transparent;
      box-shadow: none;
      padding: 0;
      margin: 0;
    }
    .Toastify__toast-body {
      padding: 0;
    }
    // 기본 닫기 버튼 숨기기
    .Toastify__close-button {
      display: none; /* 기본 닫기 버튼 숨기기 */
    }
  }
`;

// 토스트 표시 함수
const showToast = () => {
  const urlToCopy = 'https://your-custom-url.com'; // 복사할 URL 설정
  navigator.clipboard
    .writeText(urlToCopy)
    .then(() => {
      toast(
        ({ closeToast }) => (
          <ToastWrapper>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ToastImage src={completedIcon} alt="완료 아이콘" />
              <ToastMessage>URL이 복사되었습니다.</ToastMessage>
            </div>
            <CustomCloseButton
              src={closeIcon}
              alt="닫기 아이콘"
              onClick={closeToast} // 사용자 지정 이미지 클릭 시 닫기 기능
            />
          </ToastWrapper>
        ),
        {
          position: 'bottom-center',
          autoClose: 5000,
          closeOnClick: false, // 기본 닫기 버튼 비활성화
          draggable: true,
          hideProgressBar: true,
        },
      );
    })
    .catch((err) => {
      console.error('URL 복사 실패:', err);
    });
};

// 토스트 컴포넌트
function ToastComponent() {
  return (
    <>
      <button onClick={showToast}>토스트 표시</button>
      <StyledToastContainer />
    </>
  );
}

export default ToastComponent;
