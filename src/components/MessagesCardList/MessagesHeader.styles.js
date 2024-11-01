import styled, { css } from 'styled-components';
import { font } from '../../styles/fontStyles';

/* 텍스트가 넘칠 경우 생략 부호 (...)을 표시하는 스타일 */
const ellipsisStyle = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

/* 메시지 헤더의 텍스트 스타일 정의 */
const HeaderText = styled.h3`
  ${ellipsisStyle}
  margin-bottom: 0.6rem;
  width: 90%;
  ${font['20b']}

  span {
    margin-right: 0.6rem;
    ${font[20]};
    color: ${({ theme }) => theme.blackText};
  }
`;

/* 전체 헤더 컨테이너 스타일 */
export const MSHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

/* 프로필 이미지와 텍스트를 포함하는 위치 스타일 */
export const MSHeaderPosition = styled.div`
  display: flex;
  flex: 1;
`;

/* 텍스트와 배지를 포함하는 영역 스타일 */
export const MSHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${HeaderText} {
    @media screen and (max-width: 767px) {
      ${font['20b']}; //모바일 화면에서 20포인트 볼드 스타일 적용//
    }
  }
`;

/* 버튼을 포함하는 컨테이너 스타일 */
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
