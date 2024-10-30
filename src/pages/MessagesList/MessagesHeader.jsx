import PropTypes from 'prop-types';

import {
  MSHeaderContainer,
  MSHeaderPosition,
  MSHeaderArea,
  ButtonContainer,
} from './MessagesHeader.styles.js';
import { StyledCreatedAt } from './StyledCreatedAt.styles.js';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete.svg';
import { ReactComponent as UpdateIcon } from '../../assets/icon-edit.svg';
import Badge from '../../components/Badge/Badge';
import Outlined from '../../components/Outlined/Outlined';
import Profile from '../../components/Profile/Profile';
import dateConversion from '../../utils/dateConversion';

MessagesHeader.propTypes = {
  type: PropTypes.string,
  messageData: PropTypes.object,
  onEvent: PropTypes.shape({
    buttonDelete: PropTypes.func,
    buttonEdit: PropTypes.func,
  }),
};

function MessagesHeader({
  type,
  messageData = {},
  onEvent = {
    buttonDelete: () => {},
    buttonEdit: () => {},
  },
}) {
  return (
    <MSHeaderContainer>
      <MSHeaderPosition>
        <Profile imageURL={messageData.profileImageURL} />
        <MSHeaderArea>
          <h3>
            <span>From.</span>
            {messageData.sender}
          </h3>
          <Badge value={messageData.relationship} />
        </MSHeaderArea>
      </MSHeaderPosition>
      {type === 'edit' && (
        <ButtonContainer>
          <Outlined icon={<UpdateIcon />} onClick={onEvent.buttonEdit} />
          <Outlined icon={<DeleteIcon />} onClick={onEvent.buttonDelete} />
        </ButtonContainer>
      )}
      {type === 'modal' && (
        <StyledCreatedAt>
          {dateConversion(messageData.createdAt)}
        </StyledCreatedAt>
      )}
    </MSHeaderContainer>
  );
}

export default MessagesHeader;
