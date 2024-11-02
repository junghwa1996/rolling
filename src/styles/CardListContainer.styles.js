import { flexColumnCentered } from '../styles/Common/layout';

export const CardListContainer = styled.div`
  ${flexColumnCentered}
  position: relative;
  gap: 1.1rem;
`;

export const CardTextArea = styled(CommonTextArea)`
  ${flexColumn}
  width: 100%;
  padding: 0 2.4rem;

  ${Textarea} {
    width: 33.6rem;
    height: 10.6rem;
    margin: 1.6rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    ${media.tablet`
      width: 30.4rem;
      height: 11.4rem;
    `}

    ${media.mobile`
      width: 27.2rem;
      height: 4.5rem;
      margin: 1.6rem 0 2.7rem;
      font-size: 15px;
    `}
  }
`;
