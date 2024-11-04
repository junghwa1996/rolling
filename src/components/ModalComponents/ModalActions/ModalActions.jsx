import PropTypes from 'prop-types';
import { ModalActionsLayout } from './ModalActions.styles';
import Button from '../../Button/Button';

function ModalActions({ onClick, children, btnType }) {
  return (
    <ModalActionsLayout>
      <Button size="m" onClick={onClick} type={btnType}>
        {children}
      </Button>
    </ModalActionsLayout>
  );
}
ModalActions.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  btnType: PropTypes.oneOf(['submit', 'button']),
};
export default ModalActions;
