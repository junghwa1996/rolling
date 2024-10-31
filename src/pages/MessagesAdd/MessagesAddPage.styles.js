import styled from 'styled-components';

import { tm_color, tm_font } from '../../utils/themeUtils';

const StyledMessagesAddPage = styled.div`
  width: 72rem; // NOTE 해당 코드는 임시로 잡아둔 값으로 전체적으로 컴포넌트 조합할 때 수정하겠습니다.
  margin: 0 auto;

  button[type='submit'] {
    margin-top: 6.2rem;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  ${({ theme }) => theme.fontTheme['24Bold']}
  margin: 5rem 0 1.2rem;

  span {
    display: block;
    margin: 0.4rem 0 1.2rem;
    ${tm_font('16')}
    color: ${tm_color('grayscale500')};
  }
`;

export { StyledMessagesAddPage, StyledLabel };
