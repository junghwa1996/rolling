import PropTypes from 'prop-types';

import styled from 'styled-components';
import {
  commonFlex,
  commonFlexColumn,
  baseBackground,
  commonFlexSpaceBetween,
} from './CardBase.styles.js';

import { applyResponsiveStyles } from '../../../styles/common/Common.styles';
import { boxShadow } from '../../../styles/common/mixins.styles';

import Line from '../../Shared/Line/Line';

export const CardContainer = styled.div`
  ${commonFlexColumn}
  ${baseBackground}
  ${boxShadow}
  padding: 2.8rem 2.4rem 2.4rem;
  border-radius: 1.6rem;
  ${({ $media }) => $media && applyResponsiveStyles({ media: $media })};
`;
export const CardHeader = styled.div`
  ${commonFlexSpaceBetween}
  margin-bottom: 1.6rem;
`;

export const CardContent = styled.div`
  ${commonFlexColumn}
  margin: 1.6rem 0;
`;
export const CardFooter = styled.div`
  ${commonFlex}
  padding-bottom: 2.4rem;
  gap: 1rem;
`;

function Card({ header, content, footer, children }) {
  return (
    <CardContainer>
      {children}
      {header && (
        <>
          <CardHeader>{header}</CardHeader>
          <Line />
        </>
      )}
      {content && <CardContent>{content}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
}

Card.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  content: PropTypes.node,
  children: PropTypes.node,
};

export default Card;
