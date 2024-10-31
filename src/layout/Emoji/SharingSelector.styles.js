import styled from 'styled-components';

export const SharingSelectorContainer = styled.div`
  position: relative; /* 드롭다운 리스트를 버튼 아래에 위치시키기 위해 필요 */
`;

export const Button = styled.button`
  width: 56px;
  height: 36px;
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid #cccccc;
  background: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const DropdownList = styled.div`
  width: 140px;
  height: 120px;
  padding: 10px 1px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  background: #ffffff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.14);
  position: absolute; /* 드롭다운 리스트 위치 */
  z-index: 1000; /* 다른 요소 위에 표시 */
`;

export const DropdownItem = styled.div`
  width: 138px;
  height: 50px;
  padding: 12px 16px;
  cursor: pointer; /* 마우스 커서 포인터로 변경 */
  &:hover {
    background: #f6f6f6; /* hover 시 배경색 변경 */
  }
`;
