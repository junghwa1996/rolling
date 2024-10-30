/* 
  //NOTE - 이 컴포넌트는 다양한 Input 관련 컴포넌트(Dropdown, Input, Textarea, TextField)를 테스트하기 위한 예제입니다.
  각 컴포넌트의 사용 예시와 함께 각 props의 역할 및 반환값에 대한 설명이 포함되어 있으니, 참고하여 다른 부분에서도 활용하시면 됩니다.
*/

import { useState } from 'react';

import Dropdown from './Dropdown';
import Input from './Input';
import Textarea from './Textarea';
import TextField from './TextField';

const DUMMY =
  '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또 다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또 다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!';

function InputTest() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(true);

  const [selectedOption, setSelectedOption] = useState(null);

  const [textFieldValue, setTextFieldValue] = useState('');

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

  console.log(textFieldValue); //TextField 컴포넌트 반환 값 확인

  return (
    <>
      {/* 기본 Input 컴포넌트 - 사용자 입력값 관리
        - props:
          - name: Input 요소의 이름, 고유 ID 역할
          - value: 상태값으로 관리되는 입력 값
          - onChange: 입력값 변경 시 호출되는 함수
      */}
      <Input name="id" value={value} onChange={handleInputChange} />

      {/* 비활성화된 Input 컴포넌트 - disabled 속성 추가 */}
      <Input
        name="id"
        value={value}
        onChange={handleInputChange}
        disabled={true}
      />

      {/* 에러 메시지를 포함한 Input 컴포넌트
          - props:
            - error: true일 경우 에러 스타일 적용
            - errMessage: 에러 시 나타날 메시지
      */}
      <Input
        name="id"
        value={value}
        onChange={handleInputChange}
        error={error}
        errMessage={'내용을 입력해주세요'}
      />

      {/* Textarea 컴포넌트
          - props:
            - text: 기본 텍스트 (여기서는 DUMMY 사용)
          -> 나중에 스크롤바 스타일 지정하실 때 참고용
      */}
      <Textarea text={DUMMY || ''} />

      {/* Dropdown 컴포넌트 - 옵션 목록을 제공하여 선택 가능
          - props:
            - options: 드롭다운 옵션 목록, [{ value: '', label: '' }] 형태
            - selectedOption: 현재 선택된 옵션
            - onSelect: 옵션 선택 시 호출되는 함수
            - error: 에러 여부 (기본값 false)
            - isIcon: 아이콘 버튼의 여부
      */}
      <Dropdown
        options={dummyData}
        selectedOption={selectedOption}
        onSelect={(option) => setSelectedOption(option)}
      />
      <Dropdown
        options={dummyData}
        selectedOption={selectedOption}
        onSelect={(option) => setSelectedOption(option)}
        error={false}
        isIcon={true}
      />

      {/* TextField 컴포넌트 - 입력 필드
          - props:
            - onChange: 값이 변경될 때 호출되는 함수 (여기서는 setTextFieldValue 사용)
            -> 따로 event 함수 호출 하시지 마시고 setter 함수 사용 !
      */}
      <TextField onChange={setTextFieldValue} />
    </>
  );
}

export default InputTest;
