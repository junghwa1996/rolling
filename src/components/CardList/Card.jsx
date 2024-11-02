import PropTypes from 'prop-types';

import { CardContainer, CardTextArea } from '../../styles/Card.styles';
import CardHeader from './CardHeader';
import { CreatedAt } from './CreatedAt.styles';
import { Textarea } from './Textarea.styles';
import dateConversion from '../../utils/dateConversion';
import { Line } from '../../styles/Common/Common.styles';
import Button from '../Button/Button';

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
        <Line />
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
