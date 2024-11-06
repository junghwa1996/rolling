import Modal from 'react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalContent from '../ModalContent/ModalContent';
import ModalActions from '../ModalActions/ModalActions';
import UserContentCard from '../../CardComponents/UserContentCard/UserContentCard';
import { modalStyle, ModalLine } from './ModalLayout.styles.js';

export const StyledModalContent = styled.div`
  ${({ $messageData }) =>
    $messageData && 'width: 100%; height: 100%; min-width: auto;'}
`;

function CustomModal({
  isOpen,
  onRequestClose,
  messageData,
  onEvent,
  modal = { title: '모달 제목', desc: '모달 내용' },
}) {
  const buttonType = () => (onEvent?.close ? 'button' : 'submit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyle} // 인라인 스타일 객체로 전달
      ariaHideApp={false}
      className="ReactModal__Content"
      contentLabel="Pop up Message"
      bodyOpenClassName="no-scroll"
      htmlOpenClassName="no-scroll"
      shouldCloseOnOverlayClick={true}>
      {/* 메시지 데이터가 있는 경우에는 사용자 카드, 그렇지 않으면 일반 모달 표시 */}
      {messageData ? (
        <UserContentCard messageData={messageData} onEvent={onEvent} />
      ) : (
        <>
          <ModalHeader>{modal.title}</ModalHeader>
          <ModalLine />
          <ModalContent>{modal.desc}</ModalContent>
          <ModalActions onClick={onEvent} btnType={buttonType}>
            요청
          </ModalActions>
        </>
      )}
    </Modal>
  );
}

CustomModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  messageData: PropTypes.object,
  onEvent: PropTypes.shape({
    close: PropTypes.func,
    submit: PropTypes.func,
  }),
  modal: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default CustomModal;
