import PropTypes from 'prop-types';

import { CardContainer } from './Card.styles';
import CardHeader from '../CardHeader/CardHeader';

import CardContent from '../CardContent/CardContent';

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
    <CardContainer
      type={type}
      onClick={handleCardClick}
      $font={messageData?.font}>
      <CardHeader
        messageData={{ ...messageData }}
        type={type}
        onEvent={onEvent}
      />
      <CardContent
        type={type}
        onEvent={onEvent}
        $font={messageData?.font}
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
