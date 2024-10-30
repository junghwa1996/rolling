import { BrowserRouter } from 'react-router-dom';
import { styled } from 'styled-components';

import Content from './router/Content';

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
