import PropTypes from 'prop-types';

import { CreatedAt } from './CreatedAt.styles';
import { MessageContainer } from './MessageCard.styles';
import MessagesHeader from './MessagesHeader';
import Textarea from '../../components/TextField/Textarea';
import dateConversion from '../../utils/dateConversion';

MessageCard.propTypes = {
  name: PropTypes.string.isRequired,
  badgeValue: PropTypes.oneOf(['친구', '가족', '동료', '지인']),
  profiler: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
  }),
  createdAt: PropTypes.string,
  text: PropTypes.string,
};

function MessageCard(props) {
  const propsMessagesHeader = {
    name: props.name,
    badgeValue: props.badgeValue,
    profiler: props.profiler,
    createdAt: props.createdAt,
  };

  return (
    <MessageContainer>
      <MessagesHeader {...propsMessagesHeader} />
      <Textarea text={props.text} />
      <CreatedAt>{dateConversion(props.createdAt)}</CreatedAt>
    </MessageContainer>
  );
}

export default MessageCard;
