import PropTypes from 'prop-types';
import { styled } from 'styled-components';

import ICON_ADD from '../../assets/MessagesList/icon-add.svg';

const StyledImage = styled.img`
  width: 5.6rem;
  height: 5.6rem;
`;

function CardAddItem({ id }) {
  return (
    <a href={`/post/${id}/message`}>
      <StyledImage src={ICON_ADD} alt="추가 버튼 아이콘" />
    </a>
  );
}

CardAddItem.propTypes = {
  id: PropTypes.string,
};

export default CardAddItem;
