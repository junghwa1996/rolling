import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from './MessagesAddPage.module.css';
import { StyledLabel } from './MessagesAddPage.styles';
import Button from '../../components/Button/Button';
import InputFile from '../../components/InputFile/InputFile';
import Dropdown from '../../components/TextField/Dropdown';
import Input from '../../components/TextField/Input';
import useInputValidation from '../../hooks/useInputValidation';
import { getMessages, patchMessages, postMessages } from '../../service/api';
import useConfirmExit from '../../hooks/useConfirmExit';
import TextEditor from '../../components/TextField/TextEditor';

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

  const [isLoading, setIsLoading] = useState(false);

  // 쿼리 파라미터 추출
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const messageId = queryParams.get('id');

  // 보내는 사람 이름
  const { error, errMessage, onChange, onBlur } = useInputValidation();

  // 보내는 사람 이름, 내용이 입력되지 않았을 경우, 생성하기 버튼 disabled
  const isValidation =
    values.sender &&
    !error &&
    values.content &&
    values.content !== '<p><br></p>';

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      recipientId: params.id,
      // sender: value,
    }));
  }, [params.id]);

  // [수정] 메시지 데이터 GET 요청하여 values에 저장
  useEffect(() => {
    const handleMessageData = async () => {
      // 쿼리 파라미터에 messageId가 있으면,
      if (messageId) {
        // 해당 메시지 데이터 추출하여 values에 저장
        const messageData = await getMessages(messageId);

        setValues((prevValues) => ({
          ...prevValues,
          ...messageData,
        }));
      }
    };

    handleMessageData();
  }, [messageId]);

  // 뒤로가기 컨펌 함수 실행
  useConfirmExit();

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

    const messageData = {
      ...values,
    };

    try {
      setIsLoading(true);
      if (!messageId) {
        await postMessages(params.id, messageData);
      } else {
        await patchMessages(messageId, messageData);
      }
      nav(`/post/${params.id}`); // 메시지를 보낸 롤링페이퍼 페이지로 이동
    } catch (error) {
      console.error('메시지를 생성하는데 오류가 발생 했습니다.:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSenderChange = (e) => {
    // useValidation에 이벤트 객체 전달하여 유효성 검사
    onChange(e);

    // 입력 값 저장
    setValues((prevValue) => ({
      ...prevValue,
      sender: e.target.value,
    }));
  };

  return (
    <div className={styles.messagesAddContainer}>
      <form onSubmit={handlePostSubmit}>
        <StyledLabel>Form.</StyledLabel>
        <Input
          hasError={{
            $error: error || false,
            errMessage: errMessage || '값을 입력해주세요.',
          }}
          onEvent={{
            name: 'sender',
            value: values.sender,
            // onChange: onChange,
            onChange: handleSenderChange,
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
        <TextEditor onChange={handleEditorChange} value={values.content} />

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
        <Button
          size="xl"
          type="submit"
          disabled={!isValidation || isLoading}
          loading={isLoading}>
          {!messageId ? '생성하기' : '수정하기'}
        </Button>
      </form>
    </div>
  );
}

export default MessagesAddPage;
