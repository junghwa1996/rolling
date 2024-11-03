import PropTypes from 'prop-types';
import { styled } from 'styled-components';

import ICON_ADD from '../../../assets/MessagesList/icon-add.svg';
import { CardContainer } from '../CardContainer/CardContainer.styles';

const StyledImage = styled.img`
  width: 5.6rem;
  height: 5.6rem;
`;

function CardAdd({ id, type }) {
  return (
    <CardContainer href={`/post/${id}/message`} type={type}>
      <StyledImage src={ICON_ADD} alt="추가 버튼 아이콘" />
    </CardContainer>
  );
}

CardAdd.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
};

export default CardAdd;
