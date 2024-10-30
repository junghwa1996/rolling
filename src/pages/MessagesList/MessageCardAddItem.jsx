import PropTypes from 'prop-types';
import { styled } from 'styled-components';

import ICON_ADD from '../../assets/MessagesList/icon-add.svg';
import { SCmessageCardContainer } from './MessageCard.styles';

const StyledImage = styled.img`
  width: 5.6rem;
  height: 5.6rem;
`;

const StyledCardContainer = styled(SCmessageCardContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MessageCardAddItem({ id }) {
  return (
    <StyledCardContainer as="a" href={`/post/${id}/message`}>
      <StyledImage src={ICON_ADD} alt="추가 버튼 아이콘" />
    </StyledCardContainer>
  );
}

MessageCardAddItem.propTypes = {
  id: PropTypes.string,
};

export default MessageCardAddItem;
