import { useEffect, useState } from 'react';

// import useFetchData from '../../hooks/useFetchData';
import { deleteRolling, getRollingList } from '../../service/api';

function Test() {
  // get hook 테스트
  // const {
  //   data: rollingListData,
  //   loading,
  //   error,
  // } = useFetchData(getRollingList);

  // if (loading) return <p>로딩 중...</p>;
  // if (error) return <p>오류가 발생 했습니다 : {error.message}</p>;

  // const rollingList = rollingListData.results;

  const [rollingList, setRollingList] = useState([]);

  useEffect(() => {
    // 롤링 리스트 불러오는 함수
    const handleRollingListLode = async () => {
      try {
        const res = await getRollingList();
        const { results } = res;
        setRollingList(results);
      } catch (error) {
        console.error('롤링 리스트를 불러오는데 오류가 발생 했습니다.:', error);
      }
    };

    handleRollingListLode();
  }, []);

  const handleTest = async (id) => {
    try {
      await deleteRolling(id);
      setRollingList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error('롤링 리스트 삭제에 실패했습니다.:', error);
    }
  };

  return (
    <>
      <ul>
        {/* 롤링 리스트 */}
        {rollingList.map((rollingItem) => (
          <li key={rollingItem.id}>
            <h2>To. {rollingItem.name}</h2>
            {/* 메세지를 남긴 사람의 프로필 */}
            {rollingItem.recentMessages?.map((message, index) => (
              <img
                key={index}
                src={message.profileImageURL}
                alt={`Profile ${index + 1}`}
              />
            ))}
            {/* 메시지가 3개 이상 일 경우 축약하여 출력 */}
            {rollingItem.messageCount > 3 && (
              <span>+{rollingItem.messageCount - 3}</span>
            )}
            <p>{rollingItem.messageCount}명이 작성했어요!</p>
            <ol>
              {/* 이모지 리스트 */}
              {rollingItem.topReactions?.map((emojiItem) => (
                <li key={emojiItem.id}>
                  <span>{emojiItem.emoji}</span>
                  <span>{emojiItem.count}</span>
                </li>
              ))}
            </ol>
            <button type="button" onClick={() => handleTest(rollingItem.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Test;
