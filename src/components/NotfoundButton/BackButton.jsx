import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../pages/NotFound/NotFoundPage.styles';

function BackButton() {
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1);
  };

  return <Button onClick={handleBack}>이전 페이지로 돌아가기</Button>;
}

export default BackButton;
