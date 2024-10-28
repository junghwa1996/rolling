import styled from 'styled-components';

const AvatarGroupStyle = {
  '--Avatar-size': '28px',
  '--Avatar-ringSize': '1px',
};

const avatarStyle = (direction) => ({
  border: direction === 'row' ? '1px solid #E3E3E3' : 'none',
  boxShadow: 'none',
  background: '#fff',
  fontSize: '12px',
  fontWeight: '500',
  color: '#484848',
});

const StyledTotalMessage = styled.div`
  display: inline-flex;
  align-items: ${({ direction }) =>
    direction === 'row' ? 'center' : 'flex-start'};
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};
`;

const StyledMessageCount = styled.p`
  margin: ${({ direction }) =>
    direction === 'row' ? '0 0 0 11px' : '12px 0 0 0'};
  ${({ theme }) => theme.fontTheme['18Regular']};
  color: ${({ theme }) => theme.colorTheme.grayscale[700]};

  span {
    ${({ theme }) => theme.fontTheme['18Bold']};
  }
`;

export {
  StyledTotalMessage,
  AvatarGroupStyle,
  avatarStyle,
  StyledMessageCount,
};
