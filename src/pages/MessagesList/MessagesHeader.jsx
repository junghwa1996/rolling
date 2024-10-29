import PropTypes from 'prop-types';

import { CreatedAt as MSHeaderCA } from './CreatedAt.styles.js';
import {
  MSHeaderContainer,
  MSHeaderPosition,
  MSHeaderArea,
} from './MessagesHeader.styles.js';
import Badge from '../../components/Badge/Badge';
import Profile from '../../components/Profile/Profile';
import dateConversion from '../../utils/dateConversion';

MessagesHeader.propTypes = {
  type: PropTypes.string,
  MessageData: PropTypes.object,
};

function MessagesHeader({ type, MessageData }) {
  return (
    <MSHeaderContainer>
      <MSHeaderPosition>
        <Profile imageURL={MessageData.imageUrl} />
        <MSHeaderArea>
          <h3>
            <span>From.</span>
            {MessageData.name}
          </h3>
          <Badge value={MessageData.badgeValue} />
        </MSHeaderArea>
      </MSHeaderPosition>
      {type === 'modal' && (
        <MSHeaderCA>{dateConversion(MessageData.createdAt)}</MSHeaderCA>
      )}
    </MSHeaderContainer>
  );
}

export default MessagesHeader;
