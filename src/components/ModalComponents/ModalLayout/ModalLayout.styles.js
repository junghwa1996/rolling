// 모달 스타일 정의
import styled, { css } from 'styled-components';
import Line from '../../Shared/Line/Line';
import UserContentCard from '../../CardComponents/UserContentCard/UserContentCard';

export const modalStyle = {
  content: {
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'theme.white',
    padding: '0',
    border: 'none',
    justifyContent: 'center',
    overflow: 'auto',
    width: 'auto',
    height: 'auto',
  },
  overlay: {
    width: '100%',
    height: '100vh',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
};

// 추가적인 스타일 정의
export const StyledModalContent = styled(UserContentCard)`
  ${({ $messageData }) => $messageData && 'min-width: auto;'}
`;

export const ModalLine = styled(Line)`
  width: calc(100% - 4rem);
`;
