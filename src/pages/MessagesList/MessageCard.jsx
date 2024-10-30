import PropTypes from 'prop-types';

import {
  SCmessageCardContainer,
  SCMessageCardTextArea,
} from './MessageCard.styles';
import MessagesHeader from './MessagesHeader';
import { StyledCreatedAt } from './StyledCreatedAt.styles';
import { StyledTextarea } from './StyledTextarea.styles';
import Button from '../../components/Button/Button';
import { StyledLine } from '../../components/Line/Line.styles';
import dateConversion from '../../utils/dateConversion';

MessageCard.propTypes = {
  type: PropTypes.oneOf(['card', 'modal', 'edit']).isRequired,
  messageData: PropTypes.object,
  onEvent: PropTypes.shape({
    modal: PropTypes.func,
  }),
};

function MessageCard({
  type = 'card',
  messageData = {},
  onEvent = {
    modal: () => {},
    close: () => {},
  },
}) {
  return (
    <SCmessageCardContainer
      type={type}
      onClick={type === 'card' ? onEvent.modal : undefined}>
      <MessagesHeader
        messageData={{ ...messageData }}
        type={type}
        onEvent={onEvent}
      />
      <SCMessageCardTextArea>
        <StyledLine />
        <StyledTextarea
          dangerouslySetInnerHTML={{ __html: messageData.content }}
        />
        {type !== 'modal' && (
          <StyledCreatedAt>
            {dateConversion(messageData.createdAt)}
          </StyledCreatedAt>
        )}
        {type === 'modal' && (
          <Button size="m" onClick={onEvent.close}>
            확인
          </Button>
        )}
      </SCMessageCardTextArea>
    </SCmessageCardContainer>
  );
}

export default MessageCard;
