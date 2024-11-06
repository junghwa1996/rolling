import React, { useState } from 'react';

import { shareToKakao } from './KaKaoShare';
import { ReactComponent as IconShare } from '../../assets/icon-share-24.svg';
import CopyUrl from '../../components/toast/CopyUrl';
import Dropdown from '../../components/TextField/Dropdown';
import { showToast } from '../../components/toast/Toast';

function SharingSelector() {
  const [selectedOption, setSelectedOption] = useState({});

  const relationshipData = [
    {
      value: '카카오톡 공유',
      label: 'kakaoshare',
    },
    {
      value: 'URL 공유',
      label: 'urlshare',
    },
  ];

  const handleDropdownSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption.value === '카카오톡 공유') {
      handleKakaoShareClick();
    } else if (selectedOption.value === 'URL 공유') {
      handleUrlShareClick();
    }
  };

  const handleUrlShareClick = () => {
    const urlToShare = window.location.href;

    CopyUrl(urlToShare)
      .then(() => {
        showToast(`"${urlToShare}"가 클립보드에 복사되었습니다.`);
      })
      .catch((err) => {
        console.error('URL 복사 실패:', err);
        showToast('URL 복사에 실패했습니다.');
      });
  };

  const handleKakaoShareClick = () => {
    shareToKakao();
  };

  return (
    <div>
      <Dropdown
        hasOptions={{
          options: relationshipData,
          selectedOption: selectedOption,
          onSelect: handleDropdownSelect,
        }}
        isIcon={true}
        icon={<IconShare />}
      />
    </div>
  );
}

export default SharingSelector;
