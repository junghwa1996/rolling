import { Profiler } from 'react';
import Badge from '../../components/Badge/Badge';
import PropTypes from 'prop-types';

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
  profiler = { imageUrl, size },
  createdAt,
}) {
  return (
    <HeaderContainer>
      <Profiler imageUrl={profiler.imageUrl} size={profiler.size} />
      <HeaderArea>
        <h3>
          <span>From.</span>
          {name}
        </h3>
        <Badge value={badgeValue} />
      </HeaderArea>
      {createdAt && <span>{createdAt}</span>}
    </HeaderContainer>
  );
}

export default MessagesHeader;
