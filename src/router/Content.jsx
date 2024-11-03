import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import MessagesAddPage from '../pages/MessagesAdd/MessagesAddPage';
import MessagesEditPage from '../pages/MessagesEdit/MessagesEditPage';
import MessagesListPage from '../pages/MessagesList/MessagesListPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import RecipientsAddPage from '../pages/RecipientsAdd/RecipientsAddPage';
import RecipientsList from '../pages/RecipientsList/RecipientsListPage';
import HeaderLayout from '../layout/Header/HeaderLayout';

function Content() {
  return (
    <Router>
      <HeaderLayout>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="list">
              <Route index element={<RecipientsList />} />
            </Route>
            <Route path="post">
              <Route index element={<RecipientsAddPage />} />
              <Route path=":id" element={<MessagesListPage />} />
              <Route path=":id/message" element={<MessagesAddPage />} />
              <Route path=":id/edit" element={<MessagesEditPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HeaderLayout>
    </Router>
  );
}
export default Content;
