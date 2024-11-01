import React, { useState } from 'react';

import ShareIcon from '../../assets/icon-share-24.svg'; // 공유 아이콘 이미지
import {
  SharingSelectorContainer,
  Button,
  Icon,
  DropdownList,
  DropdownItem,
} from './SharingSelector.styles'; // 스타일 임포트
import { showToast } from '../../components/toast/Toast'; // showToast 함수 임포트
import { light } from '../../styles/theme'; // 새로운 테마 import

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
        <Icon src={ShareIcon} alt="Share icon" /> {/* 버튼 안에 이미지 */}
      </Button>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={handleUrlShareClick}>URL 공유</DropdownItem>
          <DropdownItem style={{ background: light.secondary }}>
            카카오톡 공유
          </DropdownItem>
        </DropdownList>
      )}
    </SharingSelectorContainer>
  );
}

export default SharingSelector;
