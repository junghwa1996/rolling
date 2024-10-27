import { BrowserRouter } from 'react-router-dom';

import './styles/normalize.css';
import './styles/reset.css';

import Main from './router/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
