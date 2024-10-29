import styled, { css } from 'styled-components';

import { MSHeaderContainer } from './MessagesHeader.styles';

export const MessageCardContainer = styled.div`
  ${({ type }) => optionType[type]}
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  ${MSHeaderContainer} {
    ${({ type }) => hasModal[type] || 'padding: 2.8rem 2.4rem 1.6rem'}
  }
`;

export const MessageCardTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

var hasModal = {
  modal: css`
    padding: 4rem 4rem 2rem;
  `,
};

var optionType = {
  card: css`
    width: 38.4rem;
    height: 28rem;
    padding-bottom: 2.4rem;

    ${MessageCardTextArea} {
      padding: 0 2.4rem;
    }
  `,
  modal: css`
    width: 60rem;
    height: 47.6rem;
    padding-bottom: 4rem;
    ${MessageCardTextArea} {
      padding: 0 4rem;
    }
  `,
  edit: css`
    width: 38.4rem;
    height: 28rem;
    padding-bottom: 2.4rem;
    ${MessageCardTextArea} {
      padding: 0 2.4rem;
    }
  `,
};
