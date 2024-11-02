import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardHeader from './CardHeader';
import { CreatedAt } from './CreatedAt.styles';
import { Textarea } from './Textarea.styles';
import Button from '../Button/Button';
import dateConversion from '../../utils/dateConversion';
import { Line } from '../../styles/Common/Common.styles';

const fontFamily = {
  'Noto Sans': "'Noto Sans KR', sans-serif",
  나눔명조: "'Nanum Myeongjo', serif",
  '나눔손글씨 손편지체': "'Handletter'",
};

const optionType = {
  card: 'padding-bottom: 2.4rem;',
  edit: 'padding-bottom: 2.4rem;',
  modal: 'outline: none;',
};

const CardContainer = styled.div`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  * {
    font-family: ${({ $font }) => fontFamily[$font] ?? ''};
  }
  ${({ type }) => optionType[type]}
  ${({ type }) => type === 'card' && 'cursor: pointer;'}
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => theme.background};
    transition: all 0.5s;
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 35.2rem;
    height: 28.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32rem;
    height: 23rem;
  }
`;

const CardTextArea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  padding: 0 2.4rem;

  ${Textarea} {
    width: 33.6rem;
    height: 10.6rem;
    margin: 1.6rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media screen and (min-width: 768px) and (max-width: 1248px) {
      width: 30.4rem;
      height: 11.4rem;
    }

    @media screen and (max-width: 767px) {
      width: 27.2rem;
      height: 4.5rem;
      margin: 1.6rem 0 2.7rem;
      font-size: 15px;
    }
  }
`;

function Card({
  type = 'card',
  messageData = {},
  onEvent = {
    modal: () => {},
    close: () => {},
  },
}) {
  const handleCardClick = () => {
    if (type === 'card' && onEvent.modal) {
      onEvent.modal();
    }
  };

  const isModalType = type === 'modal';

  return (
    <CardContainer
      type={type}
      onClick={handleCardClick}
      $font={messageData?.font}>
      <CardHeader
        messageData={{ ...messageData }}
        type={type}
        onEvent={onEvent}
      />
      <CardTextArea>
        <Line />
        <Textarea dangerouslySetInnerHTML={{ __html: messageData?.content }} />
        {!isModalType && (
          <CreatedAt>{dateConversion(messageData?.createdAt)}</CreatedAt>
        )}
        {isModalType && (
          <Button size="m" onClick={onEvent.close}>
            확인
          </Button>
        )}
      </CardTextArea>
    </CardContainer>
  );
}

Card.propTypes = {
  type: PropTypes.oneOf(['card', 'modal', 'edit']).isRequired,
  messageData: PropTypes.shape({
    content: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  onEvent: PropTypes.shape({
    modal: PropTypes.func,
    close: PropTypes.func,
  }),
  cardId: PropTypes.number,
};

export default Card;
