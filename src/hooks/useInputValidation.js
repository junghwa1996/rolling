import { useState } from 'react';

// 정규표현식 : 한글, 영어
const rNamePattern = /^[a-zA-Z가-힣]*$/;

function useInputValidation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);

    const isValidName = !rNamePattern.test(e.target.value.trim()); // 입력된 값이 정규표현식에 맞지 않으면
    const inputLength = e.target.value.length; // 글자 수

    if (isValidName || inputLength > 5 || inputLength < 2) {
      // 한글 또는 영어가 아니거나, 글자 수가 2글자 미만, 5글자 초과하면 동작
      setError(true);
      setErrMessage('정확한 이름을 입력해 주세요.');
    } else {
      setError(false);
      setErrMessage('');
    }
  };

  // focusout시에 동작하는 함수입니다.
  const onBlur = (e) => {
    if (e.target.value.trim() === '') {
      setError(true);
      setErrMessage('이름을 입력해 주세요.');
    }
  };

  return { value, error, errMessage, onChange, onBlur };
}

export default useInputValidation;
