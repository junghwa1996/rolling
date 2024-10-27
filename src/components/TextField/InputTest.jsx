import { useState } from 'react';

import Input from './Input';

function InputTest() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(true);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input name="id" value={value} onChange={handleInputChange} />
      <Input
        name="id"
        value={value}
        onChange={handleInputChange}
        disabled={true}
      />
      <Input
        name="id"
        value={value}
        onChange={handleInputChange}
        error={error}
        errMessage={'내용을 입력해주세요'}
      />
    </>
  );
}

export default InputTest;
