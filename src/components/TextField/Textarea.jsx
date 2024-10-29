import PropTypes from 'prop-types';

import { StyledTextarea } from './Textarea.styles';

function Textarea({ type = 'card', text = '유저 텍스트' }) {
  return <StyledTextarea type={type}>{text}</StyledTextarea>;
}

Textarea.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Textarea;
