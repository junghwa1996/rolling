import styled from 'styled-components';

import { color } from '../../styles/common/variables';
import { font } from '../../styles/common/fonts.styles';

const BADGE_LIST = (value) => {
  const colors = {
    친구: {
      background: color.blue[100],
      color: color.blue[500],
    },
    가족: {
      background: color.green[100],
      color: color.green[500],
    },
    동료: {
      background: color.purple[100],
      color: color.purple[600],
    },
    지인: {
      background: color.beige[100],
      color: color.beige[500],
    },
  };
  return colors[value];
};

export const StBadge = styled.div`
  border-radius: 2px;
  ${({ value }) => {
    const { background, color } = BADGE_LIST(value);

    return `
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 4.1rem;
      height: 2rem;
      background-color: ${background};
      color: ${color};
      ${font[14]}
      text-align: center;
    `;
  }}
`;
