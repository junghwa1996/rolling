// ItemArea 스타일
import { responsiveGridColumns } from '../Common/media';

export const ItemArea = styled.div`
  display: grid;
  gap: 2.8rem 2.4rem;

  ${responsiveGridColumns.desktop}
  ${responsiveGridColumns.tablet}
  ${responsiveGridColumns.mobile}

  @media screen and (max-width: 1248px) {
    gap: 1.6rem;
  }
`;
