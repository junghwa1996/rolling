import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import {
  AvatarGroupStyle,
  avatarStyle,
  StyledMessageCount,
  StyledTotalMessage,
} from './TotalMessage.styles';
import { getMessagesList } from '../../service/api';

// <TotalMessage rollingItemId={rollingItem.id} direction={'row'} />
// TotalMessage 컴포넌트에 해당하는 롤링페이퍼의 id와 방향 설정만 prop으로 전달해주시면 됩니다.
function TotalMessage({ rollingItemId, direction }) {
  const [messageList, setMessageList] = useState([]);

  const maxAvatars = 3; // 표시할 최대 아바타 수
  const surplus = messageList.length - maxAvatars; // 초과 아바타 수

  useEffect(() => {
    const handleMessageListLoad = async () => {
      try {
        const res = await getMessagesList(rollingItemId);
        const { results } = res;
        setMessageList(results);
      } catch (error) {
        console.error(
          '메시지 리스트를 불러오는데 오류가 발생 했습니다.:',
          error,
        );
      }
    };

    handleMessageListLoad();
  }, []);

  return (
    <StyledTotalMessage direction={direction}>
      <AvatarGroup sx={AvatarGroupStyle}>
        {messageList.slice(0, maxAvatars).map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.profileImageURL}
            alt={`Avatar ${index + 1}`}
          />
        ))}

        {/* 초과 아바타 수 표시 */}
        {surplus > 0 && <Avatar sx={avatarStyle(direction)}>+{surplus}</Avatar>}
      </AvatarGroup>

      <StyledMessageCount direction={direction}>
        <span>{messageList.length}</span>명이 작성했어요!
      </StyledMessageCount>
    </StyledTotalMessage>
  );
}

// PropTypes로 rollingItemId의 타입을 string 또는 number로 지정 (예시)
TotalMessage.propTypes = {
  rollingItemId: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column']),
};

export default TotalMessage;
