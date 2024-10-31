import styled from 'styled-components';

const StyledRadioCard = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 4.5rem;
`;

const StyleButton = styled.button`
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  border: none;
  padding: 0;
  overflow: hidden;
  position: relative;
  background: ${({ color }) => color};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.selected > img {
    opacity: 0.3;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .icon img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

export { StyledRadioCard, StyleButton };
