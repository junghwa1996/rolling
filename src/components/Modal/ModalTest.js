// NOTE 모달의 on, off를 테스트하기 위해 만들어진 컴포넌트 문서입니다.
// 모달 작동 방식에 대해서 이해를 돕고자 파일을 남겨둡니다 -> 추후 개발 완료시 삭제 예정

import { useState } from 'react';

import StyledModal from './StyledModal';

function ModalTest() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    console.log('모달이 닫혔습니다.');
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <StyledModal isOpen={isOpen} onRequestClose={closeModal} />
    </>
  );
}

export default ModalTest;
