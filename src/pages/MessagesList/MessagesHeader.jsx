import PropTypes from 'prop-types';

import { CreatedAt } from './CreatedAt.styles.js';
import {
  MSHeaderContainer,
  MSHeaderPosition,
  MSHeaderArea,
} from './MessagesHeader.styles.js';
import Badge from '../../components/Badge/Badge';
import Profile from '../../components/Profile/Profile';
import dateConversion from '../../utils/dateConversion';

MessagesHeader.propTypes = {
  name: PropTypes.string.isRequired,
  badgeValue: PropTypes.oneOf(['친구', '가족', '동료', '지인']),
  profiler: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
  }),
  createdAt: PropTypes.string,
  isCreatedAt: PropTypes.bool,
};

function MessagesHeader({
  name = '보낸이',
  badgeValue = '친구',
  profiler = { imageUrl: '', size: '' },
  createdAt = '',
  isCreatedAt = false,
}) {
  return (
    <MSHeaderContainer>
      <MSHeaderPosition>
        <Profile imageURL={profiler.imageUrl} size={profiler.size} />
        <MSHeaderArea>
          <h3>
            <span>From.</span>
            {name}
          </h3>
          <Badge value={badgeValue} />
        </MSHeaderArea>
      </MSHeaderPosition>
      {isCreatedAt && <CreatedAt>{dateConversion(createdAt)}</CreatedAt>}
    </MSHeaderContainer>
  );
}

export default MessagesHeader;
