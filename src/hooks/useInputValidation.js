import { useState } from 'react';

// 정규표현식 : 한글, 영어
const rNamePattern = /^[a-zA-Z가-힣]*$/;

function useInputValidation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
    // NOTE 에러 메시지가 활성화 후, 텍스트 입력이 감지되면 실시간으로 비활성화 처리
    // 불필요시 제거 예정
    setError(false);
  };

  // focusout시에 동작하는 함수입니다.
  const onBlur = (e) => {
    const trimmedValue = e.target.value.trim();
    const isValidName = !rNamePattern.test(e.target.value.trim());
    const inputLength = e.target.value.length; // 글자 수

    if (trimmedValue === '') {
      setError(true);
      setErrMessage('이름을 입력해 주세요.');
    } else if (isValidName || inputLength > 6 || inputLength < 2) {
      // 한글 또는 영어가 아니거나, 글자 수가 2글자 미만, 6글자 초과하면 동작
      setError(true);
      setErrMessage('정확한 이름을 입력해 주세요.');
    } else {
      setError(false);
      setErrMessage('');
    }
  };

  return { value, error, errMessage, onChange, onBlur };
}

export default useInputValidation;
