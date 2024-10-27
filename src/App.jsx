import { BrowserRouter } from 'react-router-dom';

import './styles/normalize.css';
import './styles/reset.css';

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
