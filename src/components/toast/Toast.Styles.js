import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

// import { color } from '../../styles/colorStyles'; // 색상 스타일 추가
import { font } from '../../styles/common/fonts.styles';

// Toast 스타일 컴포넌트
export const StyledToastContainer = styled(ToastContainer)`
  &&& {
    padding: 0;
    text-align: left;

    .Toastify__toast {
      background-color: var(--black);
      border-radius: 0.5rem;
      box-shadow: var(--shadow-low); // 그림자 스타일
      padding: 1rem; // 패딩 추가
    }

    .Toastify__toast-theme {
      background: var(--black); // 기본 테마 배경색 변경
      color: var(--white); // 텍스트 색상
    }

    .Toastify__close-button {
      display: none; // 기본 닫기 버튼 숨기기
    }
  }
`;

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0;
  background: transparent;
  overflow: hidden;
`;

export const ToastMessage = styled.div`
  font-family: 'Pretendard', sans-serif;
  ${font[16]};
  color: var(--white);
  overflow-wrap: break-word;
  white-space: normal;
  flex-grow: 1;
  margin: 0 1rem;
  border-radius: 0.5rem;
`;

export const IconToastImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.625rem;
`;

export const CustomCloseButton = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  // 추가적인 스타일 필요 시 여기에 작성
`;

