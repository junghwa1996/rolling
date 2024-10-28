import Avatar from '@mui/joy/Avatar';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import {
  AvatarGroupStyle,
  avatarStyle,
  StyledAvatarGroup,
  StyledMessageCount,
} from './TotalMessage.styles';
import { getMessagesList } from '../../service/api';

function TotalMessage({ rollingItemId }) {
  const [messageList, setMessageList] = useState([]);

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

  const maxAvatars = 3; // 표시할 최대 아바타 수
  const surplus = messageList.length - maxAvatars; // 초과 아바타 수

  return (
    <StyledAvatarGroup sx={AvatarGroupStyle}>
      {messageList.slice(0, maxAvatars).map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.profileImageURL}
          alt={`Avatar ${index + 1}`}
        />
      ))}

      {/* 초과 아바타 수 표시 */}
      {surplus > 0 && <Avatar sx={avatarStyle}>+{surplus}</Avatar>}

      <StyledMessageCount>
        <span>{messageList.length}</span>명이 작성했어요!
      </StyledMessageCount>
    </StyledAvatarGroup>
  );
}

// PropTypes로 rollingItemId의 타입을 string 또는 number로 지정 (예시)
TotalMessage.propTypes = {
  rollingItemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default TotalMessage;
