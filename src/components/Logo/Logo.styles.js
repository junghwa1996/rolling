import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/icon-logo.svg';
import { ReactComponent as LogoText } from '../../assets/icon-logotitle.svg';

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledLogoIcon = styled(LogoIcon)`
  margin-right: 0.9rem;
`;

export const StyledLogoText = styled(LogoText)``;
