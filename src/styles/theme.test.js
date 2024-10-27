import styled from 'styled-components';

const StyledText = styled.h1`
  ${({ theme }) => theme.fontTheme['28Bold']};
  color: ${({ theme }) => theme.colorTheme.purple[500]};
`;

function ThemeTest() {
  return <StyledText>잘 적용이 되는 군!</StyledText>;
}

export default ThemeTest;
