import { useState } from 'react';

function useInputValidation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    // NOTE 에러 메시지가 활성화 후, 텍스트 입력이 감지되면 실시간으로 비활성화 처리
    // 불필요시 제거 예정
    setError(false);
  };

  // focusout시에 동작하는 함수입니다.
  const onBlur = (e) => {
    if (e.target.value.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  return { value, error, onChange, onBlur };
}

export default useInputValidation;
