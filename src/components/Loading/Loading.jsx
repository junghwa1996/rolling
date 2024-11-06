import styled from 'styled-components';
import { font } from '../../styles/common/fonts.styles';

const StyledLoading = styled.div`
  ${font[24]}
`;

function Loading() {
  return <StyledLoading>로딩 중...</StyledLoading>;
}

export default Loading;
