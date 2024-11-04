import PropTypes from 'prop-types';
import { ScrollableTextarea } from './ScrollableTextarea.styles';

function ScrollableTextareaLayout({ type, media, lines, messageData }) {
  return (
    <ScrollableTextarea
      dangerouslySetInnerHTML={{ __html: messageData?.content }}
      $font={messageData?.font}
      $lines={lines}
      $media={media}
      $type={type}
    />
  );
}

ScrollableTextareaLayout.propTypes = {
  messageData: PropTypes.shape({
    content: PropTypes.string,
    font: PropTypes.string,
  }).isRequired,
  overflow: PropTypes.string,
  lines: PropTypes.number,
  media: PropTypes.object,
  type: PropTypes.string,
};

export default ScrollableTextareaLayout;
