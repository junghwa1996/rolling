import { styled } from 'styled-components';
import { Title } from '../../styles/common/Common.styles';
import { flexColumnCentered } from '../../styles/common/layout.styles';
import Button from '../../components/Button/Button';

const DemoContainer = styled.div`
  ${flexColumnCentered}
  gap: 2rem;
`;

const DemoTitle = styled(Title)`
  text-align: center;
  margin: 2rem 0;
`;

const DemoLinkButton = styled.div`
  display: flex;
  gap: 2rem;
`;

function Demo() {
  return (
    <DemoContainer>
      <DemoTitle $media={{ font: { pc: '24b', mo: '20b' } }}>
        컴포넌트 테스트 페이지 입니다 하위에 본인의 컴포넌트 Demo 주소를
        연결해주세요.
      </DemoTitle>
      <DemoLinkButton>
        <Button to="/test/card"> 카드 컴포넌트 </Button>
        <Button to="/test/card"> 카드 컴포넌트 </Button>
        <Button to="/test/card"> 카드 컴포넌트 </Button>
      </DemoLinkButton>
    </DemoContainer>
  );
}

export default Demo;
