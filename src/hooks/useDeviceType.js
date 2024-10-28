/**
 * 화면의 크기를 추적하여, 디바이스의 타입을 리턴하는 커스텀 훅 함수
 * pc | tablet | mobile : string 을 리턴합니다
 */
import { useState, useEffect } from 'react';

function useDeviceType(breakpoints = { mobile: 768, tablet: 1248 }) {
  const getDeviceType = (width) => {
    if (width < breakpoints.mobile) return 'mobile';
    if (width < breakpoints.tablet) return 'tablet';
    return 'pc';
  };

  const [deviceType, setDeviceType] = useState(() => {
    // 기본값은 pc
    if (typeof window !== 'undefined') {
      return getDeviceType(window.innerWidth);
    }
    return 'pc';
  });

  // resizing 실시간 감지 hooks
  useEffect(() => {
    const handleResize = () => {
      const currentDeviceType = getDeviceType(window.innerWidth);
      setDeviceType(currentDeviceType);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]);

  return deviceType;
}

export default useDeviceType;
