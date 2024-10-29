// src/pages/Homepage/Homepage.jsx
import React from 'react';
import ToastComponent from '../../components/toast/ToastComponent';

const Homepage = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <ToastComponent /> {/* ToastComponent 추가 */}
    </div>
  );
};

export default Homepage;
