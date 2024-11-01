import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

const KEY = process.env.REACT_APP_TEXT_EDITOR_KEY;

function TextEditor({ onChange, value }) {
  const editorRef = useRef(null);

  // 실시간 변경 감지
  const onTextEditorChange = (e, editor) => {
    const content = editor.getContent();
    onChange(content); // 부모 컴포넌트에 변경 내용 전달
  };

  return (
    <>
      <Editor
        value={value}
        apiKey={KEY}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        init={{
          height: 260,
          menubar: false,
          plugins: [
            'advlist', // 고급 목록 기능
            'autolink', // URL 자동 링크 변환
            'lists', // 목록 생성 및 편집 기능
            'link', // 링크 삽입 및 편집
            'image', // 이미지 삽입 및 편집
            'charmap', // 특수 문자 삽입
            'preview', // 문서 미리보기 기능
            'anchor', // 앵커 삽입 및 편집
            'searchreplace', // 텍스트 검색 및 바꾸기 기능
            'visualblocks', // 블록 요소 시각화
            'code', // HTML 코드 보기 및 편집
            'fullscreen', // 전체 화면 모드
            'insertdatetime', // 현재 날짜 및 시간 삽입
            'media', // 비디오 및 오디오 삽입
            'table', // 테이블 생성 및 편집
            'help', // 도움말 제공
            'wordcount', // 단어 수 세기 기능
          ],
          toolbar:
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ',
          statusbar: false, // 상태 표시줄 제거
          content_style: 'body { font-family: Pretendard, sans-serif; }',
        }}
        onChange={onTextEditorChange} // 실시간 변경 감지
        onKeyUp={onTextEditorChange} // 키 입력 시에도 반영
      />
    </>
  );
}

TextEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default TextEditor;
