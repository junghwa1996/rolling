import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import { TextFieldContainer } from './TextField.styles';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],

  [{ align: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ color: [] }, { background: [] }],
];

function TextField({ onChange }) {
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <TextFieldContainer>
      <ReactQuill
        style={{ width: '100%', height: '22rem' }}
        modules={modules}
        onChange={onChange}
      />
    </TextFieldContainer>
  );
}

TextField.propTypes = {
  onChange: PropTypes.func,
};

export default TextField;
