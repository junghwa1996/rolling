import styled from 'styled-components';

const BADGE_LIST = (value, theme) => {
  const colors = {
    친구: {
      background: theme.colorTheme.blue[100],
      color: theme.colorTheme.blue[500],
    },
    가족: {
      background: theme.colorTheme.green[100],
      color: theme.colorTheme.green[500],
    },
    동료: {
      background: '#f7f0ff',
      color: theme.colorTheme.purple[600],
    },
    지인: {
      background: theme.colorTheme.beige[100],
      color: theme.colorTheme.beige[500],
    },
  };
  return colors[value];
};

export const StBadge = styled.div`
  border-radius: 2px;
  ${({ value, theme }) => {
    const { background, color } = BADGE_LIST(value, theme);

    return `
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 4.1rem;
      height: 2rem;
      background-color: ${background};
      color: ${color};
      ${theme.fontTheme['14Regular']}      
      text-align: center;
    `;
  }}
`;
