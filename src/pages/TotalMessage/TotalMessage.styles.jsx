import AvatarGroup from '@mui/joy/AvatarGroup';
import styled from 'styled-components';

const AvatarGroupStyle = {
  '--Avatar-size': '28px',
  '--Avatar-ringSize': '1px',
};

const avatarStyle = {
  border: '1px solid #E3E3E3',
  boxShadow: 'none',
  background: '#fff',
  fontSize: '12px',
  fontWeight: '500',
  color: '#484848',
};

const StyledAvatarGroup = styled(AvatarGroup)`
  display: flex;
  align-items: center;
`;

const StyledMessageCount = styled.p`
  margin-left: 11px;
  ${({ theme }) => theme.fontTheme['18Regular']}
  color: ${({ theme }) => theme.colorTheme.grayscale[700]};

  span {
    ${({ theme }) => theme.fontTheme['18Bold']}
  }
`;

export { AvatarGroupStyle, avatarStyle, StyledAvatarGroup, StyledMessageCount };
