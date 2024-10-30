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
  MessageData: PropTypes.object,
  onEvent: PropTypes.object,
};

function MessagesHeader({ type, MessageData, onEvent }) {
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
      {type === 'edit' && (
        <ButtonContainer>
          <Outlined
            icon={<UpdateIcon />}
            onClick={() => onEvent.ButtonBtnEdit}
          />
          <Outlined
            icon={<DeleteIcon />}
            onClick={() => onEvent.ButtonDelete}
          />
        </ButtonContainer>
      )}
      {type === 'modal' && (
        <StyledCreatedAt>
          {dateConversion(MessageData.createdAt)}
        </StyledCreatedAt>
      )}
    </MSHeaderContainer>
  );
}

export default MessagesHeader;
