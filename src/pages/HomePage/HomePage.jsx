import React from 'react';

import SharingSelector from '../../layout/Emoji/SharingSelector'; // SharingSelector 경로에 맞게 수정

function HomePages() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <SharingSelector /> {/* options prop 제거 */}
    </div>
  );
}

export default HomePages;
