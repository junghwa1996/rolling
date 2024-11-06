import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as DeleteIcon } from '../../../assets/icon-delete.svg';
import { ReactComponent as UpdateIcon } from '../../../assets/icon-edit.svg';

import Card from './CardBase';
import Profile from '../../Profile/Profile';
import Outlined from '../../Outlined/Outlined';
import dateConversion from '../../../utils/dateConversion';
import { Data, Title } from '../../../styles/common/Common.styles';
import { ScrollableTextarea } from '../../Shared/ScrollableTextarea/ScrollableTextarea.styles';
import {
  commonFlex,
  commonFlexColumn,
  commonFlexCenter,
} from './CardBase.styles';
import Badge from '../../Badge/Badge';

const UserCard = styled(Card)``;
const UserHeader = styled.div`
  ${commonFlex}
  gap: 1.4rem;
`;
const UserHeaderInfo = styled.div`
  ${commonFlexColumn}
  gap: 0.6rem;
  flex: 1;
`;
const UserButtonArea = styled.div`
  ${commonFlex}
  gap: 1rem;
`;

const UserHeaderInfoArea = styled.div`
  ${commonFlexCenter}
  gap: 0.6rem;
`;

function UserMessageCard() {
  //ANCHOR - Card Base 확장 테스트 중 입니다
  const messageData = {
    content:
      '<p>스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트 스크롤 테스트&nbsp;</p>',
    createdAt: '2024-11-04T08:53:04.686355Z',
    font: 'Noto Sans',
    id: 16440,
    profileImageURL: 'https://picsum.photos/id/547/100/100',
    recipientId: 9198,
    relationship: '친구',
    sender: '모달t',
  };
  const { createdAt, sender, profileImageURL, content, relationship } =
    messageData;

  const HandleEditClick = () => console.log('Edit 클릭');
  const HandleDeleteClick = () => console.log('Delete 클릭');

  return (
    <UserCard
      header={
        <>
          <UserHeader>
            <Profile imageURL={profileImageURL} size="m" />
            <UserHeaderInfo>
              <UserHeaderInfoArea>
                <span>From.</span>
                <Title>
                  <strong>{sender}</strong>
                </Title>
              </UserHeaderInfoArea>
              <Badge value={relationship} />
            </UserHeaderInfo>
          </UserHeader>
          <UserButtonArea>
            <Outlined icon={<UpdateIcon />} onClick={HandleEditClick} />
            <Outlined icon={<DeleteIcon />} onClick={HandleDeleteClick} />
          </UserButtonArea>
        </>
      }
      content={
        <ScrollableTextarea dangerouslySetInnerHTML={{ __html: content }} />
      }
      footer={<Data>{dateConversion(createdAt)}</Data>}
    />
  );
}

UserMessageCard.propTypes = {
  createdAt: PropTypes.string,
  sender: PropTypes.string,
  profileImageURL: PropTypes.string,
  content: PropTypes.string,
  relationship: PropTypes.string,
};

export default UserMessageCard;
