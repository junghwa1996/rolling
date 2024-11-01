import React, { useState } from 'react';
import { shareToKakao } from './KaKaoShare'; // 카카오 공유 기능 임포트
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
    
    // URL을 클립보드에 복사
    navigator.clipboard.writeText(urlToShare).then(() => {
      showToast(`"${urlToShare}"가 클립보드에 복사되었습니다.`); // 복사 성공 Toast 메시지
    }).catch(err => {
      console.error('URL 복사 실패:', err);
      showToast('URL 복사에 실패했습니다.'); // 복사 실패 Toast 메시지
    });
  };

  const handleKakaoShareClick = () => {
    shareToKakao(); // 카카오톡 공유 기능 호출
  };

  return (
    <SharingSelectorContainer>
      <Button onClick={toggleDropdown}>
        <Icon src={ShareIcon} alt="Share icon" /> {/* 버튼 안에 이미지 */}
      </Button>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={handleUrlShareClick}>URL 공유</DropdownItem>
          <DropdownItem onClick={handleKakaoShareClick} style={{ background: light.secondary }}>
            카카오톡 공유
          </DropdownItem>
        </DropdownList>
      )}
    </SharingSelectorContainer>
  );
}

export default SharingSelector;
