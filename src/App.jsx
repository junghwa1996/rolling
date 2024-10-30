import { BrowserRouter } from 'react-router-dom';

import Content from './router/Content';

function App() {
  return (
    <>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
