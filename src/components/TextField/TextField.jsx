import ReactQuill from 'react-quill';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],

  [{ align: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ color: [] }, { background: [] }],
];

function TextField() {
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      <ReactQuill
        style={{ width: '72rem', height: '26rem' }}
        modules={modules}
      />
    </>
  );
}

export default TextField;
