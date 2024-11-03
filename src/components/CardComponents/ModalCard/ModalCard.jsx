import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardContainer } from '../../styles/Card.styles';
import CardHeader from '../CardHeader/CardHeader';
import Button from '../Button/Button';

const ModalCardContainer = styled(CardContainer)`
  width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.modalBackground};
`;

function ModalCard({ messageData, onClose }) {
  return (
    <ModalCardContainer>
      <CardHeader type="modal" messageData={messageData} />
      <Button size="m" onClick={onClose}>
        닫기
      </Button>
    </ModalCardContainer>
  );
}

ModalCard.propTypes = {
  messageData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalCard;
