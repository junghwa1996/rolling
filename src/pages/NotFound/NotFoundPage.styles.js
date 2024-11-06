import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { font } from '../../styles/common/fonts.styles';

// 전체 컨테이너 스타일
export const Container = styled.div`
  height: 100vh; /* 전체 화면 높이 */
  background-color:  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  align-items: center; /* 중앙 정렬 */
  justify-content: center; /* 중앙 정렬 */
  text-align: center;
`;

//closeIcon 스타일 컴포넌트
export const StyledCloseIcon = styled(CloseIcon)`
  width: 3rem;
  height: 3rem;
  fill: var(--white);
`;

export const IconWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: var(--error);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem; /* 제목과의 간격 */
`;

//제목 스타일
export const Title = styled.h1`
  color: var(--black);
  ${font[24]};
  margin: 0em; /* 제목과 코드 간의 간격 */
`;

//코드 스타일
export const Code = styled.p`
  color: var(--gray-600);
  ${font[18]};
  margin: 2rem; /* 코드와 버튼 간의 간격 */
`;
