import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: 520px;
  height: 240px;
  padding-right: 12px;

  border: none;
  outline: none;

  resize: none;

  ${({ theme }) => theme.fontTheme['18Regular']}

  //스크롤바 스타일
  &::-webkit-scrollbar {
    //스크롤바 너비
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    //스크롤바 배경
    border-radius: 8px;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    //스크롤바 색상
    background: #ccc;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function Textarea() {
  return (
    <StyledTextarea>
      코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!
      코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요!
    </StyledTextarea>
  );
}

export default Textarea;
