import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const EmojiList = styled.div`
  position: absolute;
  top: 40px; /* 버튼 아래에서 열리도록 높이를 조정 */
  left: 0; /* 원하는 위치로 조정 */
  width: 312px; /* 원하는 너비로 조정 */
  height: auto; /* 자동 높이 조정 */
  padding: 24px 0;
  gap: 10px;
  border-radius: 8px 0 0 0;
  border: 1px solid #b6b6b6;
  background: #ffffff;
  z-index: 1000; /* 드롭다운이 다른 요소 위에 표시되도록 설정 */
`;

export const EmojiWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* 줄 바꿈 허용 */
  gap: 8px; /* 이모지 간격 */
  width: 100%; /* 전체 너비 사용 */
`;

export const SelectedEmojisContainer = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  gap: 8px; /* 이모지 간격 */
  width: 208px; /* 고정 너비 */
  height: 36px; /* 고정 높이 */
  opacity: 1; /* 불투명도 조정 */
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  width: 36px;
  height: 36px;
  position: relative;
`;

export const ArrowIcon = styled.img`
  width: 12px;
  height: 6.46px;
  position: absolute;
  top: 15.23px;
  left: 18px;
  opacity: 1; /* 보이게 하려면 1로 설정 */
`;
