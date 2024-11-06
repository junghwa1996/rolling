import { css } from 'styled-components';

const commonFlex = css`
  display: flex;
`;
const commonFlexAlignCenter = css`
  ${commonFlex}
  align-items: center;
`;
const commonFlexJustifyCenter = css`
  ${commonFlex}
  justify-content: center;
`;
const commonFlexCenter = css`
  ${commonFlex}
  align-items: center;
  justify-content: center;
`;
const commonFlexColumn = css`
  ${commonFlex}
  flex-direction: column;
`;
const baseBackground = css`
  background-color: ${({ theme }) => theme.background};
`;

const commonFlexSpaceBetween = css`
  ${commonFlex}
  justify-content: space-between;
`;

export {
  commonFlex,
  commonFlexColumn,
  baseBackground,
  commonFlexSpaceBetween,
  commonFlexCenter,
  commonFlexAlignCenter,
  commonFlexJustifyCenter,
};
