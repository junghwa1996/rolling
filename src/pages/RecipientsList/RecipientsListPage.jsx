import { styled } from 'styled-components';

import RecipientsList from './RecipientsList';

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

function RecipientsListPage() {
  return (
    <>
      <Container>
        <RecipientsList />
        <RecipientsList />
      </Container>
    </>
  );
}

export default RecipientsListPage;
