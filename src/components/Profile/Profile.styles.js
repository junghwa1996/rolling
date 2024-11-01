import styled from 'styled-components';

const size = {
  s: '4rem',
  m: '5.6rem',
  l: '8rem',
};

export const ProfileArea = styled.div`
  width: ${(props) => size[props.size]};
  height: ${(props) => size[props.size]};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.line};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
