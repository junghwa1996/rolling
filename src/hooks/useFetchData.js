// REVIEW : 테스트 중인 훅 입니다.

/**
 * GET 요청 시 재사용 할 수 있는 커스텀 훅 입니다.
 * @param {Function} apiFunction - API 호출을 수행하는 함수
 * @param {Array} dependencies - 요청을 트리거할 의존성 배열
 * @returns {Object}
 *  - data: API 요청의 응답 데이터.
 *  - loading: 로딩 상태를 나타내는 불리언 값.
 *  - error: 에러 정보를 담고 있는 상태입니다. 없을 경우 null.
 */
import { useCallback, useEffect, useState } from 'react';

const useFetchData = (apiFunction, dependencies = []) => {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const memoizedApiFunction = useCallback(apiFunction, [
    apiFunction,
    ...dependencies,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await memoizedApiFunction();
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [memoizedApiFunction]);

  return { data, loading, error };
};

export default useFetchData;
