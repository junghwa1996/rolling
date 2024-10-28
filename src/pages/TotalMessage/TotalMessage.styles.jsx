import styled from 'styled-components';

const directionStyles = {
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: '0 0 0 11px',
    border: '1px solid #E3E3E3',
  },
  column: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: '12px 0 0 0',
    border: 'none',
  },
};

const AvatarGroupStyle = {
  '--Avatar-size': '28px',
  '--Avatar-ringSize': '1px',
};

const avatarStyle = (direction) => ({
  border: directionStyles[direction].border,
  boxShadow: 'none',
  background: '#fff',
  fontSize: '12px',
  fontWeight: '500',
  color: '#484848',
});

const StyledTotalMessage = styled.div`
  display: inline-flex;
  align-items: ${({ direction }) => directionStyles[direction].alignItems};
  flex-direction: ${({ direction }) =>
    directionStyles[direction].flexDirection};
`;

const StyledMessageCount = styled.p`
  margin: ${({ direction }) => directionStyles[direction].margin};
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
