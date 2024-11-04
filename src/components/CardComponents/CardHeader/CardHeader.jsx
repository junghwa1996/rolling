import PropTypes from 'prop-types';

import {
  CardHeaderContainer,
  CardHeaderPosition,
  CardHeaderArea,
  ButtonContainer,
  CardHeaderLine,
} from './CardHeader.styles';
import { Title, Data } from '../../../styles/common/Common.styles';
import { ReactComponent as DeleteIcon } from '../../../assets/icon-delete.svg';
import { ReactComponent as UpdateIcon } from '../../../assets/icon-edit.svg';
import Badge from '../../Badge/Badge';
import Outlined from '../../Outlined/Outlined';
import Profile from '../../Profile/Profile';
import dateConversion from '../../../utils/dateConversion';

function CardHeader({ type, messageData, onEvent }) {
  const { profileImageURL, sender, relationship, createdAt } = messageData;

  return (
    <>
      <CardHeaderContainer>
        <CardHeaderPosition>
          <Profile imageURL={profileImageURL} size="m" />
          <CardHeaderArea>
            <Title $media={{ pc: 20, mo: 16 }}>
              <span>From. </span>
              <strong>{sender}</strong>
            </Title>
            <Badge value={relationship} />
          </CardHeaderArea>
        </CardHeaderPosition>
        {type === 'edit' && (
          <ButtonContainer>
            <Outlined icon={<UpdateIcon />} onClick={onEvent.buttonEdit} />
            <Outlined icon={<DeleteIcon />} onClick={onEvent.buttonDelete} />
          </ButtonContainer>
        )}
        {type === 'modal' && <Data>{dateConversion(createdAt)}</Data>}
      </CardHeaderContainer>
      <CardHeaderLine />
    </>
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
