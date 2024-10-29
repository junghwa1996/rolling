import PropTypes from 'prop-types';

import { CreatedAt } from './CreatedAt.styles.js';
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
      {isCreatedAt && <span>{dateConversion(createdAt)}</span>}
    </HeaderContainer>
  );
}

export default MessagesHeader;
