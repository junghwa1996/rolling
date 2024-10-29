import PropTypes from 'prop-types';
import { styled } from 'styled-components';

import Badge from '../../components/Badge/Badge';
import Profile from '../../components/Profile/Profile';
import dateConversion from '../../utils/dateConversion';

const HeaderContainer = styled.div``;
const HeaderArea = styled.div``;

MessagesHeader.propTypes = {
  name: PropTypes.string,
  badgeValue: PropTypes.string,
  profiler: PropTypes.shape({
    imageUrl: PropTypes.string,
    size: PropTypes.string,
  }),
  createdAt: PropTypes.string,
};

function MessagesHeader({
  name,
  badgeValue,
  profiler = { imageUrl: '', size: '' },
  createdAt,
}) {
  return (
    <HeaderContainer>
      <Profile imageUrl={profiler.imageUrl} size={profiler.size} />
      <HeaderArea>
        <h3>
          <span>From.</span>
          {name}
        </h3>
        <Badge value={badgeValue} />
      </HeaderArea>
      {createdAt && <span>{dateConversion(createdAt)}</span>}
    </HeaderContainer>
  );
}

export default MessagesHeader;
