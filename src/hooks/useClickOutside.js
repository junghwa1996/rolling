import { useEffect } from 'react';

function useClickOutside(ref, onClickOutside) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    };

    // 클릭 이벤트 리스너를 추가
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너를 제거
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]); // isOpen 상태를 의존성 배열에서 제거
}

export default useClickOutside;
