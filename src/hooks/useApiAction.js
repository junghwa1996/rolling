// REVIEW : 테스트 중인 훅 입니다.

/**
 * POST, PATCH, PUT, DELETE 요청 시 재사용 할 수 있는 커스텀 훅 입니다.
 * 이 훅은 API 호출의 로딩 상태와 에러 상태를 관리하며, 비동기 API 요청을 쉽게 실행할 수 있도록 돕습니다
 * @param {Function} apiFunction - API 호출을 수행하는 함수
 * @returns {Object}
 *  - loading: 로딩 상태를 나타내는 불리언 값
 *  - error: 에러 정보를 담고 있는 객체입니다. 없을 경우 null.
 *  - executeApiAction: API 요청을 실제로 실행하는 함수.
 */
import { useState } from 'react';

const useApiAction = (apiFunction) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * 사용자가 API 요청을 실행할 수 있는 함수입니다.
   * 주어진 API 함수(apiFunction)를 호출하여 POST, PATCH, PUT, DELETE와 같은 요청을 수행합니다.
   * 요청에 필요한 인수를 전달받아 서버와 통신합니다.
   * @param {...any} args - 서버에 전달할 인수 (API 함수에 필요한 파라미터들 ex: id, data)
   * @returns {Promise<void>}
   */
  const executeApiAction = async (...args) => {
    setLoading(true);
    try {
      await apiFunction(...args);
    } catch (error) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, executeApiAction };
};

export default useApiAction;
