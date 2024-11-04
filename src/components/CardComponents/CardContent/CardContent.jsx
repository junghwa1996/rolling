import PropTypes from 'prop-types';

import {
  CardContentTextArea,
  CardContentTextAreaInner,
} from './CardContent.styles';
import { Data } from '../../../styles/common/Common.styles';

import Button from '../../Button/Button';
import dateConversion from '../../../utils/dateConversion';
import useDeviceType from '../../../hooks/useDeviceType';
import ScrollableTextareaLayout from '../../Shared/ScrollableTextarea/ScrollableTextareaLayout';

function CardContent({ type = 'card', messageData = {}, onEvent = {} }) {
  const isModal = type === 'modal';
  const device = useDeviceType();
  const isPc = device === 'pc';
  const isTa = device === 'ta';
  const isMo = device === 'mo';

  const typeContent = (type) => {
    if (type === 'modal') {
      return {
        font: {
          pc: 18,
          mo: 15,
        },
        view: {
          pc: {
            height: '24rem',
          },
          mo: {
            height: '20rem',
          },
        },
      };
    } else {
      return {
        font: {
          pc: 18,
          ta: 16,
          mo: 15,
        },
        view: {
          pc: {
            height: '12.6rem',
          },
          ta: {
            height: '11rem',
          },
          mo: {
            height: '8rem',
          },
        },
      };
    }
  };

  return (
    <CardContentTextArea $type={type}>
      <ScrollableTextareaLayout
        messageData={messageData}
        lines={4}
        media={typeContent(type)}
      />
      {!isModal && (
        <Data $media={{ font: { pc: 12, mo: 14 } }}>
          {dateConversion(messageData?.createdAt)}
        </Data>
      )}

      {isModal && (
        <Button size="m" onClick={onEvent?.close}>
          확인
        </Button>
      )}
    </CardContentTextArea>
  );
}

CardContent.propTypes = {
  type: PropTypes.oneOf(['card', 'modal', 'edit']),
  messageData: PropTypes.shape({
    content: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  onEvent: PropTypes.shape({
    close: PropTypes.func,
  }),
};

export default CardContent;
