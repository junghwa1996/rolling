// KaKaoShare.js

// 카카오 SDK 초기화
const KAKAO_APP_KEY = process.env.REACT_APP_KAKAO_APP_KEY; // .env 파일에서 앱 키 가져오기
let isKakaoInitialized = false; // 초기화 상태를 추적하는 변수

if (typeof window !== 'undefined' && !window.Kakao) {
  const script = document.createElement('script');
  script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
  script.onload = () => {
    window.Kakao.init(KAKAO_APP_KEY); // 앱 키로 SDK 초기화
    isKakaoInitialized = true; // 초기화 완료 상태로 변경
  };
  document.head.appendChild(script);
}

// 카카오 공유 함수
export const shareToKakao = () => {
  console.log('Kakao SDK 초기화 여부:', isKakaoInitialized); // 추가된 로그

  // 카카오 SDK가 초기화되었는지 확인
  if (typeof window !== 'undefined' && window.Kakao && isKakaoInitialized) {
    // 카카오 커스텀 템플릿 공유 기능 실행
    window.Kakao.Share.sendCustom({
      templateId: 113807, // 카카오 디벨로퍼스에서 생성한 템플릿 ID
      templateArgs: {
        title: 'Rolling', // 템플릿에서 'title' 변수로 설정된 값
        description:
          '전통적인 롤링페이퍼 문화를 웹으로 구현한 커뮤니티형 플랫폼', // 템플릿에서 'description' 변수로 설정된 값
      },
    });
  } else {
    console.error('Kakao SDK가 초기화되지 않았습니다.');
  }
};
