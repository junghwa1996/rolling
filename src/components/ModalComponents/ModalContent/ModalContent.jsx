import PropTypes from 'prop-types';
import { ModalContentLayout, ModalContentText } from './ModalContent.styles';

function ModalContent({ children }) {
  return (
    <ModalContentLayout>
      <ModalContentText $media={{ pc: 20 }}>{children}</ModalContentText>
    </ModalContentLayout>
  );
}

ModalContent.propTypes = {
  children: PropTypes.string,
};

export default ModalContent;
