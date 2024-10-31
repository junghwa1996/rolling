import React from 'react';
import { ToastContainer } from 'react-toastify'; // ToastContainer를 여기로 임포트
import 'react-toastify/dist/ReactToastify.css'; // Toast 스타일을 임포트
import { BrowserRouter } from 'react-router-dom';

import Content from './router/Content';

function App() {
  return (
    <>
      <ToastContainer /> {/* ToastContainer를 BrowserRouter 외부에 위치 */}
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
