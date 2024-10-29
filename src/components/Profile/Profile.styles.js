import styled from 'styled-components';

const size = {
  s: '5.6rem',
  m: '8rem',
};

export const ProfileArea = styled.div`
  width: ${(props) => size[props.size]};
  height: ${(props) => size[props.size]};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colorTheme.grayscale[200]};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
