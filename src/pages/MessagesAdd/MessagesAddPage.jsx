import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { StyledLabel, StyledMessagesAddPage } from './MessagesAddPage.styles';
import Button from '../../components/Button/Button';
import InputFile from '../../components/InputFile/InputFile';
import Dropdown from '../../components/TextField/Dropdown';
import Input from '../../components/TextField/Input';
import TextField from '../../components/TextField/TextField';
import useInputValidation from '../../hooks/useInputValidation';
import { postMessages } from '../../service/api';

const INITIAL_VALUES = {
  team: '11-2',
  recipientId: 0,
  sender: '',
  profileImageURL:
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
  relationship: '친구',
  content: '',
  font: 'Noto Sans',
};

const relationshipData = [
  {
    value: '친구',
    label: '친구',
  },
  {
    value: '지인',
    label: '지인',
  },
  {
    value: '동료',
    label: '동료',
  },
  {
    value: '가족',
    label: '가족',
  },
];

// Noto Sans, Pretendard, 나눔명조, 나눔손글씨 손편지체
const fontData = [
  {
    value: 'Noto Sans',
    label: 'Noto Sans',
  },
  {
    value: 'Pretendard',
    label: 'Pretendard',
  },
  {
    value: '나눔명조',
    label: '나눔명조',
  },
  {
    value: '나눔손글씨 손편지체',
    label: '나눔손글씨 손편지체',
  },
];

function MessagesAddPage() {
  // post 요청 시 보낼 id(롤링페이퍼)
  const params = useParams();

  // 생성 후, 해당 id(롤링페이퍼)로 이동
  const nav = useNavigate();

  // post 요청 데이터
  const [values, setValues] = useState(INITIAL_VALUES);

  // 보내는 사람 이름
  const { value, error, errMessage, onChange, onBlur } = useInputValidation();

  // 보내는 사람 이름, 내용이 입력되지 않았을 경우, 생성하기 버튼 disabled
  const isValidation =
    !value ||
    error ||
    values.content === '' ||
    values.content === '<p><br></p>';
  // 조건에 values.content === '<p><br></p>' 추가 이유
  // 텍스트 에디터에 내용을 입력 후, 내용을 지우면 텍스트 에디터 value가 빈 값이 아닌 <p><br></p>가 남게 되어 이 부분도 조건에 추가

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      recipientId: params.id,
      sender: value,
    }));
  }, [params.id, value]);

  // 프로필 이미지 상태 업데이트
  const handleImgClick = (value) => {
    setValues((prevValues) => ({ ...prevValues, profileImageURL: value }));
  };

  // Text Editor 상태 업데이트
  const handleEditorChange = (value) => {
    setValues((prevValues) => ({ ...prevValues, content: value }));
  };

  // Form Submit
  const handlePostSubmit = async (e) => {
    e.preventDefault();

    // NOTE FormData와의 차이점 - 해당 내용은 배포 전에 삭제하도록 하겠습니다. 이것 때문에 몇시간을 POST 요청을 못한건지...ㅠ
    // FormData: 파일 업로드와 같은 이진 데이터를 포함할 수 있는 요청 형식입니다. 주로 multipart/form-data로 전송됩니다.
    // application/json: 단순한 텍스트 데이터로 구성된 요청 형식입니다. 파일이나 이진 데이터를 전송할 수 없습니다.

    // 서버에서 어떤 형식의 데이터를 기대하는지에 따라 이 두 가지 형식 중 하나를 선택해야 합니다.
    // FormData로 데이터를 보내고 싶다면, 서버가 이를 처리할 수 있도록 설정되어 있어야 합니다.
    // JSON 형식으로 보내려면, 데이터가 JSON으로 직렬화되어야 하고, 서버가 application/json 형식을 이해해야 합니다.
    const messageData = {
      // spread 전개 연산자를 활용
      ...values,
      // team: values.team,
      // recipientId: values.recipientId,
      // sender: values.sender,
      // profileImageURL: values.profileImageURL,
      // relationship: values.relationship,
      // content: values.content,
      // font: values.font,
    };

    try {
      await postMessages(params.id, messageData);
      nav(`/post/${params.id}`, { replace: true }); // 메시지를 보낸 롤링페이퍼 페이지로 이동
    } catch (error) {
      console.error('메시지를 생성하는데 오류가 발생 했습니다.:', error);
    }
  };

  return (
    <StyledMessagesAddPage>
      <form onSubmit={handlePostSubmit}>
        <StyledLabel>Form.</StyledLabel>
        <Input
          hasError={{
            $error: error || false,
            errMessage: errMessage || '값을 입력해주세요.',
          }}
          onEvent={{
            name: 'sender',
            value: value,
            onChange: onChange,
          }}
          placeholder="이름을 입력해 주세요."
          onBlur={onBlur}
        />
        <StyledLabel>프로필 이미지</StyledLabel>
        <InputFile
          name="profileImageURL"
          img={values.profileImageURL}
          onClick={handleImgClick}
        />

        <StyledLabel>상대와의 관계</StyledLabel>
        <Dropdown
          hasOptions={{
            options: relationshipData,
            selectedOption: {
              value: values.relationship,
            },
            onSelect: (option) =>
              setValues((prevValues) => ({
                ...prevValues,
                relationship: option.value,
              })),
          }}
        />

        <StyledLabel>내용을 입력해 주세요.</StyledLabel>
        <TextField onChange={handleEditorChange} />

        <StyledLabel>폰트 선택</StyledLabel>
        <Dropdown
          hasOptions={{
            options: fontData,
            selectedOption: {
              value: values.font,
            },
            onSelect: (option) =>
              setValues((prevValues) => ({
                ...prevValues,
                font: option.value,
              })),
          }}
        />

        {/* 이름, 내용을 입력하지 않으면 disabled */}
        <Button size="xl" type="submit" disabled={isValidation}>
          생성하기
        </Button>
      </form>
    </StyledMessagesAddPage>
  );
}

export default MessagesAddPage;
