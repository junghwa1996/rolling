import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import MessagesAddPage from '../pages/MessagesAdd/MessagesAddPage';
import MessagesEditPage from '../pages/MessagesEdit/MessagesEditPage';
import MessagesListPage from '../pages/MessagesList/MessagesListPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import RecipientsAddPage from '../pages/RecipientsAdd/RecipientsAddPage';
import RecipientsList from '../pages/RecipientsList/RecipientsListPage';
import Test_MessagesEditPage from '../pages/MessagesEdit/Test_MessagesEditPage';
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
              {/* ANCHOR: 테스트 페이지 확인 후 네이밍 변경해주세요 */}
              {/* <Route path=":id/edit" element={<MessagesEditPage />} /> */}
              <Route path=":id/edit" element={<Test_MessagesEditPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HeaderLayout>
    </Router>
  );
}

export default Content;
