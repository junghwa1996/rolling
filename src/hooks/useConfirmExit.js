import { useEffect } from 'react';

function useConfirmExit() {
  const preventRefresh = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };

  useEffect(() => {
    // beforeunload : 브라우저 제공 이벤트이며, 사용자가 페이지를 떠나기 전에 발생하며, 주로 페이지를 떠날 때 확인 메시지를 보여줌.
    window.addEventListener('beforeunload', preventRefresh);

    return () => {
      window.removeEventListener('beforeunload', preventRefresh);
    };
  }, []);
}

export default useConfirmExit;
