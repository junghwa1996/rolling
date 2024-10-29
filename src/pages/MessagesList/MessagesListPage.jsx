import MessageCard from './MessageCard';

/* ANCHOR : props 테스트 ------------------ */
const propsMessagesHeader = {
  name: '이름',
  badgeValue: '친구',
  profiler: {
    imageUrl: undefined,
    size: 'm',
  },
  createdAt: '2024-10-29T04:59:29.035113Z',
  text: '테스트 입니다룽',
};
/* ---------------------------------------- */

function MessagesListPage() {
  return <MessageCard {...propsMessagesHeader} />;
}

export default MessagesListPage;
