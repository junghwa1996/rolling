import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardContainer, CardTextArea } from '../../styles/Card.styles';
import CardHeader from '../CardHeader/CardHeader';
import { Line } from '../../styles/Common/Common.styles';
import dateConversion from '../../utils/dateConversion';

const UserContentCardContainer = styled(CardContainer)`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
    transition: all 0.3s ease;
  }
`;

function UserContentCard({ messageData }) {
  return (
    <UserContentCardContainer type="card">
      <CardHeader type="card" messageData={messageData} />
      <CardTextArea>
        <Line />
        <div dangerouslySetInnerHTML={{ __html: messageData?.content }} />
        <div>{dateConversion(messageData?.createdAt)}</div>
      </CardTextArea>
    </UserContentCardContainer>
  );
}

UserContentCard.propTypes = {
  messageData: PropTypes.object.isRequired,
};

export default UserContentCard;
