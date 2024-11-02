import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';

import {
  StyledLabel,
  StyledMessagesAddPage,
} from '../MessagesAdd/MessagesAddPage.styles';
import Button from '../../components/Button/Button';
import Input from '../../components/TextField/Input';
import useInputValidation from '../../hooks/useInputValidation';
import BackgroundSelector from '../../components/BackgroundSelector/BackgroundSelector';
import { postRolling } from '../../service/api';
import useConfirmExit from '../../hooks/useConfirmExit';

const INITIAL_VALUES = {
  team: '11-2',
  name: '',
  backgroundColor: 'beige',
  backgroundImageURL: null,
};

function RecipientsAddPage() {
  // 보내는 사람 이름
  const { value, error, errMessage, onChange, onBlur } = useInputValidation();

  // post 요청 데이터
  const [values, setValues] = useState(INITIAL_VALUES);

  // 생성 후, 해당 id(롤링페이퍼)로 이동
  const nav = useNavigate();

  // 받는 사람 이름 입력되지 않았을 경우, 생성하기 버튼 disabled
  // !value 추가 이유 : error만으로 체크하면 페이지 첫 접속 시 에러 메시지가 false이므로 disabled도 false
  const isValidation = !value || error;

  // Input에 입력된 값 values.name에 저장
  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      name: value,
    }));
  }, [value]);

  // 뒤로가기 컨펌 함수 실행
  useConfirmExit();

  // 불필요한 handleBackgroundChange 함수 재생성을 방지하기 위해 useCallback을 사용
  const handleBackgroundChange = useCallback((value, isImg) => {
    // 선택된 배경화면 value, boolean 값을 받아서 values에 저장
    setValues((prevValues) => ({
      ...prevValues,
      backgroundColor: isImg ? 'beige' : value, // 2번째 인자로 전달받은 값이 false라면 컬러에 저장
      backgroundImageURL: isImg ? value : null, // true라면 이미지에 저장
      // 이미지가 선택되었을 때, backgroundColor에 null 값이 아닌 컬러값이 있어야 post 요청 가능
      // 컬러가 선택되었을 땐, backgroundColor가 null 값이어야 함.
    }));
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...values,
    };

    try {
      const result = await postRolling(postData);
      // post 요청의 응답 반환 값에서 id 값을 추출하여 요청이 완료된 후, 생성된 롤링페이퍼로 이동
      nav(`/post/${result.id}`, { replace: true });
    } catch (error) {
      console.error('롤링 페이퍼를 생성하는데 오류가 발생 했습니다.:', error);
    }
  };

  return (
    <StyledMessagesAddPage>
      <form onSubmit={handlePostSubmit}>
        <StyledLabel>To.</StyledLabel>
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
          placeholder="받는 사람 이름을 입력해 주세요"
          onBlur={onBlur}
        />

        <StyledLabel>
          배경화면을 선택해 주세요.
          <span>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</span>
        </StyledLabel>
        <BackgroundSelector onBackgroundChange={handleBackgroundChange} />

        {/* 이름을 입력하지 않으면 disabled */}
        <Button size="xl" type="submit" disabled={isValidation}>
          생성하기
        </Button>
      </form>
    </StyledMessagesAddPage>
  );
}

export default RecipientsAddPage;
