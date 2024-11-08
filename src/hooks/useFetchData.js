/**
 * GET 요청 시 재사용 할 수 있는 커스텀 훅 입니다.
 * @param {Function} apiFunction - API 호출을 수행하는 함수
 * @param {Array} dependencies - 요청을 트리거할 의존성 배열
 * @param {Function} [processData] - 응답 데이터를 처리하는 함수
 * @returns {Object}
 *  - data: API 요청의 응답 데이터.
 *  - loading: 로딩 상태를 나타내는 불리언 값.
 *  - error: 에러 정보를 담고 있는 상태입니다. 없을 경우 null.
 *  - refetch: 데이터를 다시 불러오는 함수.
 */
import { useEffect, useState, useRef, useCallback } from 'react';

const useFetchData = (apiFunction, dependencies = [], processData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // apiFunction과 processData를 ref로 관리하여 fetchData의 참조가 안정적이게 함
  const apiFunctionRef = useRef(apiFunction);
  const processDataRef = useRef(processData);

  // apiFunction이 변경될 때 ref 업데이트
  useEffect(() => {
    apiFunctionRef.current = apiFunction;
  }, [apiFunction]);

  // processData가 변경될 때 ref 업데이트
  useEffect(() => {
    processDataRef.current = processData;
  }, [processData]);

  // fetchData 함수를 useCallback으로 감싸서 참조 안정화
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiFunctionRef.current();
      const processedData = processDataRef.current
        ? processDataRef.current(response)
        : response;
      setData(processedData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []); // 빈 배열로 설정하여 fetchData의 참조가 변하지 않게 함

  // useEffect에서 dependencies를 명시적으로 관리
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData, ...dependencies]); // dependencies는 스프레드 연산자로 포함

  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
