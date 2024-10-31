import styled from 'styled-components';

import { fontStyles } from '../../styles/fontStyle';
import { tm_color } from '../../utils/themeUtils';

const StyledMessagesAddPage = styled.div`
  width: 72rem; // NOTE 해당 코드는 임시로 잡아둔 값으로 전체적으로 컴포넌트 조합할 때 수정하겠습니다.
  margin: 0 auto;
  margin-bottom: 20rem; // NOTE 해당 코드는 임시로 잡아둔 값으로 전체적으로 컴포넌트 조합할 때 수정하겠습니다.

  button[type='submit'] {
    margin-top: 6.2rem;
  }

  /* 모바일 */
  @media screen and (max-width: 767px) {
    width: 32rem;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  ${fontStyles['24b']};
  margin: 5rem 0 1.2rem;

  span {
    display: block;
    margin: 0.4rem 0 1.2rem;
    ${fontStyles[16]}
    color: ${tm_color('grayscale500')};
  }
`;

export { StyledMessagesAddPage, StyledLabel };
