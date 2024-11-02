import PropTypes from 'prop-types';
import styled from 'styled-components';

import { font } from '../../styles/fontStyles';
import { CreatedAt } from './CreatedAt.styles.js';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete.svg';
import { ReactComponent as UpdateIcon } from '../../assets/icon-edit.svg';
import Badge from '../Badge/Badge';
import Outlined from '../Outlined/Outlined';
import Profile from '../Profile/Profile';
import dateConversion from '../../utils/dateConversion';

/* 텍스트가 넘칠 경우 생략 부호 (...)을 표시하는 스타일 */
const EllipsisStyle = styled.h3`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-bottom: 0.6rem;
  width: 90%;
  ${font['20b']}

  span {
    margin-right: 0.6rem;
    ${font['20']};
    color: ${({ theme }) => theme.blackText};
  }
`;

/* 텍스트와 배지를 포함하는 영역 스타일 */
const CardHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 767px) {
    ${EllipsisStyle} {
      ${font['20b']}; //모바일 화면에서 20포인트 볼드 스타일 적용//
    }
  }
`;

/* 버튼을 포함하는 컨테이너 스타일 */
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardHeaderPosition = styled.div`
  display: flex;
  flex: 1;
`;

function CardHeader({
  type,
  messageData = {},
  onEvent = {
    buttonDelete: () => {},
    buttonEdit: () => {},
  },
}) {
  const { profileImageURL, sender, relationship, createdAt } = messageData;

  return (
    <CardHeaderContainer>
      <CardHeaderPosition>
        <Profile imageURL={profileImageURL} />
        <CardHeaderArea>
          <EllipsisStyle>
            <span>From.</span>
            {sender}
          </EllipsisStyle>
          <Badge value={relationship} />
        </CardHeaderArea>
      </CardHeaderPosition>
      {type === 'edit' && (
        <ButtonContainer>
          <Outlined icon={<UpdateIcon />} onClick={onEvent.buttonEdit} />
          <Outlined icon={<DeleteIcon />} onClick={onEvent.buttonDelete} />
        </ButtonContainer>
      )}
      {type === 'modal' && <CreatedAt>{dateConversion(createdAt)}</CreatedAt>}
    </CardHeaderContainer>
  );
}

CardHeader.propTypes = {
  type: PropTypes.oneOf(['card', 'modal', 'edit']).isRequired,
  messageData: PropTypes.shape({
    profileImageURL: PropTypes.string,
    sender: PropTypes.string,
    relationship: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  onEvent: PropTypes.shape({
    buttonDelete: PropTypes.func,
    buttonEdit: PropTypes.func,
  }),
};

export default CardHeader;
