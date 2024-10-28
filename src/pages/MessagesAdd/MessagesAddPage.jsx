import Input from '../../components/TextField/Input';
import useInputValidation from '../../hooks/useInputValidation';

function MessagesAddPage() {
  const { value, error, errMessage, onChange, onBlur } = useInputValidation();

  return (
    <>
      <Input
        // NOTE 콘솔에러 : 조건부로 전달하여 false일 때 DOM에 전달되지 않도록
        error={error || undefined}
        errMessage={errMessage}
        name="username"
        value={value}
        onChange={onChange}
        placeholder="이름을 입력해 주세요."
        onBlur={onBlur}
      />
    </>
  );
}

export default MessagesAddPage;
