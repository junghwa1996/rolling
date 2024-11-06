import React, { useState } from 'react';
import {
  Container,
  IconWrapper,
  Title,
  Code,
  Button,
} from './NotFoundPage.styles';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import BackButton from '../../components/NotfoundButton/BackButton';

function NotFoundPage() {
  const errorMessage = '잘못 된 요청입니다.';
  const errorCode = 'ERROR 404';

  return (
    <Container>
      <IconWrapper>
        <CloseIcon width="30" height="30" fill="#FFFFFF" />
      </IconWrapper>
      <Title>{errorMessage}</Title>
      <Code>응답 번호: {errorCode}</Code>

      <BackButton />
    </Container>
  );
}

export default NotFoundPage;
