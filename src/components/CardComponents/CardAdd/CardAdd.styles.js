import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { cardBaseStyle } from '../../../styles/common/Common.styles';

export const CardContainer = styled(Link)`
  ${cardBaseStyle}
  display: flex;
  align-items: center;
  justify-content: center;
`;
