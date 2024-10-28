import RecipientCard from './RecipientsCard';
import useFetchData from '../../hooks/useFetchData';
import { getRollingList } from '../../service/api';

function RecipientsList() {
  const { data: rollingListData } = useFetchData(getRollingList, []);
  const rollingList = rollingListData.results;

  return (
    <ul>
      {rollingList.map((item) => (
        <li key={item.id}>
          <RecipientCard
            id={item.id}
            name={item.name}
            bgColor={item.backgroundColor}
            bgImage={item.backgroundImageURL}
            totalMessage={{
              recentMessages: item.recentMessages,
              messageCount: item.messageCount,
              direction: 'column',
            }}
            emojiList={item.topReactions}
          />
        </li>
      ))}
    </ul>
  );
}

export default RecipientsList;
