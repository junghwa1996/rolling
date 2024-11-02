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

export const shareToKakao = () => {
  console.log('Kakao SDK 초기화 여부:', isKakaoInitialized); // 추가된 로그

  // 카카오 SDK가 초기화되었는지 확인
  if (typeof window !== 'undefined' && window.Kakao && isKakaoInitialized) {
    // 카카오톡 공유 기능 실행
    window.Kakao.Link.sendDefault({
      objectType: 'feed', // 공유할 객체의 타입
      content: {
        title: '오늘의 디저트', // 공유 제목
        description: '아메리카노, 빵, 케익', // 공유 설명
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg', // 공유 이미지 URL
        link: {
          mobileWebUrl: 'https://developers.kakao.com', // 모바일 웹 링크
          webUrl: 'https://developers.kakao.com', // 웹 링크
        },
      },
      social: {
        likeCount: 10, // 좋아요 수
        commentCount: 20, // 댓글 수
        sharedCount: 30, // 공유 수
      },
      buttons: [
        {
          title: '웹으로 이동', // 버튼 제목
          link: {
            mobileWebUrl: 'https://developers.kakao.com', // 모바일 웹 링크
            webUrl: 'https://developers.kakao.com', // 웹 링크
          },
        },
        {
          title: '앱으로 이동', // 버튼 제목
          link: {
            mobileWebUrl: 'https://developers.kakao.com', // 모바일 웹 링크
            webUrl: 'https://developers.kakao.com', // 웹 링크
          },
        },
      ],
    });
  } else {
    console.error('Kakao SDK가 초기화되지 않았습니다.');
  }
};
