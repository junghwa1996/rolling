import { styled } from 'styled-components';

import { fontStyles } from '../../styles/fontStyles';

const directionStyles = (theme) => ({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: '0 0 0 1.1rem',
    border: '0.1rem solid #E3E3E3',
    color: theme.secondary,
  },
  column: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: '1.2rem 0 0 0',
    border: 'none',
    color: '#484848',
  },
});

const AvatarGroupStyle = {
  '--Avatar-size': '2.8rem',
  '--Avatar-ringSize': '0.1rem',
};

const avatarStyle = (direction, theme) => ({
  border: directionStyles(theme)[direction].border,
  boxShadow: 'none',
  background: '#fff',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: directionStyles(theme)[direction].color,
});

const StyledTotalMessage = styled.div`
  display: inline-flex;
  align-items: ${({ direction, theme }) =>
    directionStyles(theme)[direction].alignItems};
  flex-direction: ${({ direction, theme }) =>
    directionStyles(theme)[direction].flexDirection};
`;

const StyledMessageCount = styled.p`
  margin: ${({ direction, theme }) => directionStyles(theme)[direction].margin};
  ${fontStyles[20]};
  color: ${({ theme }) => theme.line};

  span {
    ${fontStyles['20b']};
  }
`;

export {
  StyledTotalMessage,
  AvatarGroupStyle,
  avatarStyle,
  StyledMessageCount,
};
