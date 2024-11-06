// NOTE 아바타 기능 (메시지 남긴 사람 수)
// recentMessages - 해당 롤링페이퍼의 메시지(최대 3개) 데이터를 배열로
// messageCount - 해당 롤링페이퍼의 메시지의 총 갯수
// direction - 가로, 세로형에 따라 row, column
// 위 3가지 prop으로 전달해 주시면 됩니다.
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import PropTypes from 'prop-types';

import {
  AvatarGroupStyle,
  avatarStyle,
  StyledMessageCount,
  StyledTotalMessage,
} from './TotalMessage.styles';
import { useLocation } from 'react-router-dom';

function TotalMessage({
  recentMessages = [],
  messageCount = 0,
  direction = 'row',
}) {
  const location = useLocation();
  const isLocation = location.pathname === '/list';

  return (
    <>
      {/* message가 있을 경우에만 노출됩니다. */}
      {messageCount !== 0 && (
        <StyledTotalMessage direction={direction}>
          <AvatarGroup sx={AvatarGroupStyle}>
            {recentMessages.map((avatar, index) => (
              <Avatar
                key={index}
                src={avatar.profileImageURL}
                alt={`Avatar ${index + 1}`}
              />
            ))}

            {/* 초과 아바타 수 표시 */}
            {messageCount > 3 && (
              <Avatar sx={avatarStyle(direction)}>+{messageCount - 3}</Avatar>
            )}
          </AvatarGroup>

          <StyledMessageCount direction={direction} $isLocation={isLocation}>
            <strong>{messageCount}</strong>명이 작성했어요!
          </StyledMessageCount>
        </StyledTotalMessage>
      )}
    </>
  );
}

TotalMessage.propTypes = {
  recentMessages: PropTypes.array,
  messageCount: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column']),
};

export default TotalMessage;
