import PropTypes from 'prop-types';

import {
  CardHeaderContainer,
  CardHeaderPosition,
  CardHeaderArea,
  SpanText,
} from '../../styles/CardHeader.styles';
import ButtonContainerComponent from './ButtonContainerComponent';
import { EllipsisStyle } from '../../styles/Common/Common.styles';
import { CreatedAt } from './CreatedAt.styles.js';
import Badge from '../Badge/Badge';
import Profile from '../Profile/Profile';
import dateConversion from '../../utils/dateConversion';

function CardHeader({
  type,
  messageData = {},
  onEvent = {
    buttonDelete: () => {},
    buttonEdit: () => {},
  },
}) {
  const { profileImageURL, sender, relationship, createdAt } = messageData;

  return (
    <CardHeaderContainer>
      <CardHeaderPosition>
        <Profile imageURL={profileImageURL} />
        <CardHeaderArea>
          <EllipsisStyle as="h3">
            <SpanText>From.</SpanText>
            {sender}
          </EllipsisStyle>
          <Badge value={relationship} />
        </CardHeaderArea>
      </CardHeaderPosition>
      {type === 'edit' && (
        <ButtonContainerComponent
          onEdit={onEvent.buttonEdit}
          onDelete={onEvent.buttonDelete}
        />
      )}
      {type === 'modal' && <CreatedAt>{dateConversion(createdAt)}</CreatedAt>}
    </CardHeaderContainer>
  );
}

CardHeader.propTypes = {
  type: PropTypes.oneOf(['card', 'modal', 'edit']).isRequired,
  messageData: PropTypes.shape({
    profileImageURL: PropTypes.string,
    sender: PropTypes.string,
    relationship: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  onEvent: PropTypes.shape({
    buttonDelete: PropTypes.func,
    buttonEdit: PropTypes.func,
  }),
};

export default CardHeader;
