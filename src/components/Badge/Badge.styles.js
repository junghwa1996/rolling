import styled from 'styled-components';

import { colorStyles } from '../../styles/colorStyles';
import { fontStyles } from '../../styles/fontStyles';

const BADGE_LIST = (value) => {
  const colors = {
    친구: {
      background: colorStyles.blue[100],
      color: colorStyles.blue[500],
    },
    가족: {
      background: colorStyles.green[100],
      color: colorStyles.green[500],
    },
    동료: {
      background: '#f7f0ff',
      color: colorStyles.purple[600],
    },
    지인: {
      background: colorStyles.beige[100],
      color: colorStyles.beige[500],
    },
  };
  return colors[value];
};

export const StBadge = styled.div`
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
      ${fontStyles[14]}
      border-radius: 4px;
      text-align: center;
    `;
  }}
`;
