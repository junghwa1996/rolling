import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

import { CardContentTextArea } from './CardContent.styles';
import { Data } from '../../../styles/common/Common.styles';

import Button from '../../Button/Button';
import dateConversion from '../../../utils/dateConversion';
import ScrollableTextareaLayout from '../../Shared/ScrollableTextarea/ScrollableTextareaLayout';

function CardContent({ type = 'card', messageData = {}, onEvent = {} }) {
  const isModal = type === 'modal';
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
            height: '7.2rem',
          },
        },
      };
    }
  };

  const [responsiveState, setResponsiveState] = useState({
    lines: undefined,
    media: typeContent(type),
  });

  const updateResponsiveState = useCallback(() => {
    const width = window.innerWidth;

    // 기기별 분기 처리 (예: pc, ta, mo)
    if (type === 'modal') {
      setResponsiveState((prevState) => ({
        ...prevState,
        lines: undefined,
      }));
    } else {
      const lines = width >= 1248 ? 4 : width >= 768 ? 4 : 3; // pc, ta, mo 기준으로 lines 설정
      setResponsiveState((prevState) => ({
        ...prevState,
        lines: lines,
        media: typeContent(type),
      }));
    }
  }, [type]);

  useEffect(() => {
    // 처음 로딩 시 반응형 상태를 설정
    updateResponsiveState();

    // 윈도우 크기 변경 이벤트 리스너 추가
    window.addEventListener('resize', updateResponsiveState);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', updateResponsiveState);
  }, [updateResponsiveState]);

  return (
    <CardContentTextArea $type={type}>
      <ScrollableTextareaLayout
        messageData={messageData}
        lines={responsiveState.lines}
        media={responsiveState.media}
        type={type}
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
