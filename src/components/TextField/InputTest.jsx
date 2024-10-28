import { useState } from 'react';

import Dropdown from './Dropdown';
import Input from './Input';
import Textarea from './Textarea';

const DUMMY =
  '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또 다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또 다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!';

function InputTest() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(true);

  const [selectedOption, setSelectedOption] = useState(null);

  const dummyData = [
    {
      value: 'friend',
      label: '친구',
    },
    {
      value: 'acquaintance',
      label: '지인',
    },
    {
      value: 'colleague',
      label: '동료',
    },
    {
      value: 'family',
      label: '가족',
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
      <Textarea text={DUMMY || ''} />
      <Dropdown
        options={dummyData}
        selectedOption={selectedOption}
        onSelect={(option) => setSelectedOption(option)}
      />
    </>
  );
}

export default InputTest;
