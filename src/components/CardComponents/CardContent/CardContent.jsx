import PropTypes from 'prop-types';

import {
  CardContentTextArea,
  CardScrollTextarea,
} from './CardContent.styles.js';
import dateConversion from '../../../utils/dateConversion';
import { Data } from '../../../styles/common/Common.styles';
import useDeviceType from '../../../hooks/useDeviceType';
import Button from '../../Button/Button';

function CardContent({ type = 'card', messageData = {}, onEvent = () => {} }) {
  const isModal = type === 'modal';
  const device = useDeviceType();
  const isPc = device === 'pc';
  const isTa = device === 'ta';
  const isMo = device === 'mo';

  return (
    <CardContentTextArea $type={type}>
      <CardScrollTextarea
        dangerouslySetInnerHTML={{ __html: messageData?.content }}
        $media={{ pc: 18, mo: 15 }}
        overflow={isModal ? 'auto' : 'hidden'}
        lines={(isPc && 4) || (isTa && 3) || (isMo && 2)}
        responsive={
          isModal
            ? {
                pc: { width: '50rem', height: '24rem' },
              }
            : {
                pc: { width: '33.6rem', height: '10.6rem' },
                ta: { width: '27.2rem', height: '6.6rem' },
                mo: { width: '30.4rem', height: '11rem' },
              }
        }
      />
      {!isModal && (
        <Data $media={{ pc: 12, mo: 14 }}>
          {dateConversion(messageData?.createdAt)}
        </Data>
      )}

      {isModal && (
        <Button size="m" onClick={onEvent.close}>
          확인
        </Button>
      )}
    </CardContentTextArea>
  );
}

CardContent.propTypes = {
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

export default CardContent;
