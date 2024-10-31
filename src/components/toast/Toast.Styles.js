import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { fontStyles } from '../../styles/fontStyles';

// Toast 스타일 컴포넌트
export const StyledToastContainer = styled(ToastContainer)`
  &&& {
    background: transparent;
    margin: 0;
    padding: 0;

    .Toastify__toast {
      width: 32.75rem;
      max-width: 32.75rem; // 524px로 고정
      height: 4rem;
      padding: 1.1875rem 1.875rem;
      gap: 0;
      border-radius: 0.5rem;
      background: rgba(0, 0, 0, 0.8);
      opacity: 1;
    }

    .Toastify__toast-body {
      padding: 0;
      text-align: left;
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
  ${fontStyles[16]};
  color: ${({ theme }) => theme.whiteText};
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
`;
