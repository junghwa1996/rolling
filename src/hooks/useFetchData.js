import { useCallback, useEffect, useState, useRef } from 'react';

/**
 * GET 요청 시 재사용 할 수 있는 커스텀 훅 입니다.
 * @param {Function} apiFunction - API 호출을 수행하는 함수
 * @param {Array} dependencies - 요청을 트리거할 의존성 배열
 * @param {Function} processData - 응답 데이터를 처리하는 함수 (선택적)
 * @returns {Object}
 *  - data: API 요청의 응답 데이터.
 *  - loading: 로딩 상태를 나타내는 불리언 값.
 *  - error: 에러 정보를 담고 있는 상태입니다. 없을 경우 null.
 */
const useFetchData = (apiFunction, dependencies = [], processData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useRef로 dependencies를 관리하여 무한 루프 방지
  const dependenciesRef = useRef(dependencies);

  const fetchData = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiFunction(...args);
        const processedData = processData ? processData(response) : response;
        setData(processedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [apiFunction, processData], // apiFunction과 processData가 변경될 때만 업데이트
  );

  useEffect(() => {
    // dependenciesRef를 통해 무한 루프를 방지
    if (
      dependencies.length !== dependenciesRef.current.length ||
      !dependencies.every((dep, i) => dep === dependenciesRef.current[i])
    ) {
      dependenciesRef.current = dependencies;
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
