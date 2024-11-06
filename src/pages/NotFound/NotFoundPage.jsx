import { Container, IconWrapper, Title, Code } from './NotFoundPage.styles';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import BackButton from '../../components/NotfoundButton/BackButton';

function NotFoundPage() {
  return (
    <Container>
      <IconWrapper>
        <CloseIcon width="30" height="30" fill="#FFFFFF" />
      </IconWrapper>
      <Title>잘못 된 요청입니다.</Title>
      <Code>응답 번호: ERROR 404</Code>

      <BackButton />
    </Container>
  );
}

export default NotFoundPage;
