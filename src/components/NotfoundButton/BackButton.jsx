import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StButton } from '../../components/Button/Button.styles';

function BackButton() {
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1);
  };

  return (
    <StButton size="s" color="primary" onClick={handleBack}>
      이전 페이지로 돌아가기
    </StButton>
  );
}
export default BackButton;
