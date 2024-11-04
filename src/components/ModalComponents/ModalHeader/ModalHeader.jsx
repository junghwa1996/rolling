import { PropTypes } from 'prop-types';
import { ModalHeaderArea } from './ModalHeader.styles';
function ModalHeader({ children }) {
  return <ModalHeaderArea>{children}</ModalHeaderArea>;
}
ModalHeader.propTypes = {
  children: PropTypes.string,
};

export default ModalHeader;
