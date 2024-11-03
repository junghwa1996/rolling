import PropTypes from 'prop-types';

import { CardContainer, CardTextArea } from './Card.styles';
import CardHeader from '../CardHeader/CardHeader';
import { CreatedAt, Textarea } from './Card.styles';
import dateConversion from '../../../utils/dateConversion';
import Button from '../../Button/Button';
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

  const isModalType = type === 'modal';

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
      <CardTextArea>
        <Line column={false} />
        <Textarea dangerouslySetInnerHTML={{ __html: messageData?.content }} />
        {!isModalType && (
          <CreatedAt>{dateConversion(messageData?.createdAt)}</CreatedAt>
        )}
        {isModalType && (
          <Button size="m" onClick={onEvent.close}>
            확인
          </Button>
        )}
      </CardTextArea>
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
