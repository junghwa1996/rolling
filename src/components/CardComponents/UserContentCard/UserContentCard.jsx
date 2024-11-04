import PropTypes from 'prop-types';
import Card from '../Card/Card';

function UserContentCard({ messageData = {}, onEvent = () => {} }) {
  return <Card type="modal" messageData={messageData} onEvent={onEvent} />;
}

UserContentCard.propTypes = {
  messageData: PropTypes.object,
  onEvent: PropTypes.shape({
    close: PropTypes.func,
    submit: PropTypes.func,
  }),
};

export default UserContentCard;
