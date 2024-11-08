import { styled } from 'styled-components';

import { font } from '../../styles/common/fonts.styles';

const directionStyles = {
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: '0 0 0 1.1rem',
    border: '0.1rem solid #E3E3E3',
    color: `#484848`,
  },
  column: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: '1.2rem 0 0 0',
    border: 'none',
    color: '#484848',
  },
};

const AvatarGroupStyle = {
  '--Avatar-size': '2.8rem',
  '--Avatar-ringSize': '0.1rem',
};

const avatarStyle = (direction) => ({
  border: directionStyles[direction].border,
  boxShadow: 'none',
  background: '#fff',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: directionStyles[direction].color,
});

const StyledTotalMessage = styled.div`
  display: inline-flex;
  align-items: ${({ direction }) => directionStyles[direction].alignItems};
  flex-direction: ${({ direction }) =>
    directionStyles[direction].flexDirection};
`;

const StyledMessageCount = styled.p`
  margin: ${({ direction }) => directionStyles[direction].margin};
  ${font[20]};
  color: ${({ $isLocation, theme }) => ($isLocation ? '#181818' : theme.text)};
  @media (max-width: 767px) {
    ${font['14']};
  }

  span {
    ${font['20b']};
    color: ${({ $isLocation, theme }) =>
      $isLocation ? '#181818' : theme.text};
    @media (max-width: 767px) {
      ${font['14b']};
    }
  }
`;

export {
  StyledTotalMessage,
  AvatarGroupStyle,
  avatarStyle,
  StyledMessageCount,
};
