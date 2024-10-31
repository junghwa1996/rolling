import React, { useState } from 'react';

import ShareIcon from '../../assets/icon-share-24.svg';
import {
  SharingSelectorContainer,
  Button,
  Icon,
  DropdownList,
  DropdownItem,
} from './SharingSelector.styles'; // 스타일 임포트
import { showToast } from '../../components/toast/Toast'; // showToast 함수 임포트

function SharingSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // 드롭다운 열기/닫기
  };

  const handleUrlShareClick = () => {
    const urlToShare = 'https://example.com'; // 공유할 URL
    showToast(urlToShare); // URL을 매개변수로 showToast 호출
  };

  return (
    <SharingSelectorContainer>
      <Button onClick={toggleDropdown}>
        <Icon src={ShareIcon} alt="Share icon" />
      </Button>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={handleUrlShareClick}>URL 공유</DropdownItem>
          <DropdownItem style={{ background: '#F6F6F6' }}>
            카카오톡 공유
          </DropdownItem>
        </DropdownList>
      )}
    </SharingSelectorContainer>
  );
}

export default SharingSelector;
