import { useState } from 'react';

import Input from './Input';
import Textarea from './Textarea';
import Dropdown from './Dropdown';

const DUMMY =
  '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또 다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또 다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!';

function InputTest() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(true);

  const [selectedOption, setSelectedOption] = useState(null);

  const dummyData = [
    {
      key: 1,
      value: '친구',
    },
    {
      key: 2,
      value: '지인',
    },
    {
      key: 3,
      value: '동료',
    },
    {
      key: 4,
      value: '가족',
    },
  ];

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
      <Textarea text={DUMMY} />
      <Dropdown
        options={dummyData}
        selectedOption={selectedOption}
        onChange={(option) => setSelectedOption(option)}
      />
    </>
  );
}

export default InputTest;
