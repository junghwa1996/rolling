import styled from 'styled-components'; // styled-components 먼저 임포트

// Toast 스타일 컴포넌트
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
  font-size: ${({ theme }) => theme.fontTheme['16Regular'].fontSize};
  font-weight: ${({ theme }) => theme.fontTheme['16Regular'].fontWeight};
  line-height: ${({ theme }) => theme.fontTheme['16Regular'].lineHeight};
  letter-spacing: ${({ theme }) => theme.fontTheme['16Regular'].letterSpacing};
  color: ${({ theme }) => theme.colorTheme.white};
  overflow-wrap: break-word;
  white-space: normal;
  flex-grow: 1;
  margin: 0 1rem;
  border-radius: 0.5rem;
`;

export const CustomCloseButton = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;
