import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { font } from '../../styles/common/fonts.styles';
import { color } from '../../styles/common/variables.css';

// 전체 컨테이너 스타일
export const Container = styled.div`
  height: 100vh; /* 전체 화면 높이 */
  background-color: var(--white);
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  align-items: center; /* 중앙 정렬 */
  justify-content: center; /* 중앙 정렬 */
  text-align: center;
`;

//closeIcon 스타일 컴포넌트
export const StyledCloseIcon = styled(CloseIcon)`
  width: 30px;
  height: 30px;
  fill: var(--white);
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--error);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px; /* 제목과의 간격 */
`;

//제목 스타일
export const Title = styled.h1`
  color: var(--black);
  ${font[24]};
  margin: 10px 0; /* 제목과 코드 간의 간격 */
`;

//코드 스타일
export const Code = styled.p`
  color: var(--gray-600);
  ${font[18]};
  margin: 10px 0; /* 코드와 버튼 간의 간격 */
`;

//버튼 스타일
export const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--purple-500);
  color: var(--white);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 208px;
  height: 56px;
  ${font[16]};

  &:hover {
    background-color: var(--purple-600);
  }
`;
