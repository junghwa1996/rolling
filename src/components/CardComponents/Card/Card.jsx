import PropTypes from 'prop-types';

import { CardContainer } from './Card.styles';
import styles from './Card.module.css';

import CardHeader from '../CardHeader/CardHeader';
import CardContent from '../CardContent/CardContent';
import Line from '../../Shared/Line/Line';

function Card({
  type = 'card',
  messageData = {},
  onEvent = {
    modal: () => {},
    close: () => {},
  },
}) {
  const handleCardClick = () => {
    if (type === 'card' && onEvent.modal) {
      onEvent.modal();
    }
  };

  return (
    <CardContainer type={type} onClick={handleCardClick}>
      <CardHeader
        messageData={{ ...messageData }}
        type={type}
        onEvent={onEvent}
      />
      <Line className={styles.cardLine} />
      <CardContent
        type={type}
        onEvent={onEvent}
        messageData={{ ...messageData }}
      />
    </CardContainer>
  );
}

Card.propTypes = {
  type: PropTypes.oneOf(['card', 'modal', 'edit']).isRequired,
  messageData: PropTypes.shape({
    content: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  onEvent: PropTypes.shape({
    modal: PropTypes.func,
    close: PropTypes.func,
  }),
  cardId: PropTypes.number,
};

export default Card;
