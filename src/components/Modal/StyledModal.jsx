//NOTE - Modal 컴포넌트입니다. (react-modal에서 Modal 자체로 이미 사용하기에 StyledModal로 명명)
//isOpen : 모달 창이 표시되어야 하는지 여부를 설명하는 boolean 값
//onRequestClose : 모달이 닫힐 때 실행될 함수를 의미 -> 사용자가 모달을 닫을 때 실행하고 싶은 함수

import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { styledModal } from './Modal.styles';
import MessageCard from '../../pages/MessagesList/MessageCard';

//모달이 열렸을 때 페이지의 나머지 요소들을 스크린 리더가 무시하도록 지정 -> 보통 최상위 요소에 지정
Modal.setAppElement('#root');

function StyledModal({ isOpen, onRequestClose, messageData, onEvent }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={styledModal}
      ariaHideApp={false}
      className="ReactModal__Content"
      contentLabel="Pop up Message"
      bodyOpenClassName="no-scroll"
      htmlOpenClassName="no-scroll"
      shouldCloseOnOverlayClick={true} //바깥 부분을 눌렀을 때 팝업창 off
    >
      <MessageCard type="modal" messageData={messageData} onEvent={onEvent} />
    </Modal>
  );
}

StyledModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,

  messageData: PropTypes.object,
  onEvent: PropTypes.shape({
    close: PropTypes.func,
  }),
};

export default StyledModal;
