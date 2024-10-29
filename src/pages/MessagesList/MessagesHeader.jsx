import PropTypes from 'prop-types';

import {
  HeaderContainer,
  HeaderArea,
  HeaderPosition,
} from './MessagesHeader.styles.js';
import Badge from '../../components/Badge/Badge';
import Profile from '../../components/Profile/Profile';
import dateConversion from '../../utils/dateConversion';

MessagesHeader.propTypes = {
  name: PropTypes.string.isRequired,
  badgeValue: PropTypes.string,
  profiler: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
  }),
  createdAt: PropTypes.string,
};

function MessagesHeader({
  name = '보낸이',
  badgeValue = '친구',
  profiler = { imageUrl: '', size: '' },
  createdAt = '',
}) {
  return (
    <HeaderContainer>
      <HeaderPosition>
        <Profile imageURL={profiler.imageUrl} size={profiler.size} />
        <HeaderArea>
          <h3>
            <span>From.</span>
            {name}
          </h3>
          <Badge value={badgeValue} />
        </HeaderArea>
      </HeaderPosition>
      {createdAt && <span>{dateConversion(createdAt)}</span>}
    </HeaderContainer>
  );
}

export default MessagesHeader;
