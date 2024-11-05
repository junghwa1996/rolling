import styled from 'styled-components';

const SkeletonListContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1248px) {
    padding: 0 2rem;
  }
`;

const SkeletonItem = styled.div`
  border-radius: 1.6rem;
  background: #f5f5f5;
  width: 27.5rem;
  height: 26rem;
  padding: 3rem 2.4rem 2rem;

  div {
    border-radius: 0.6rem;
    background-color: #e6e6e6;
    animation: pulse 2s infinite ease-in-out;
  }

  div + div {
    margin-top: 1.2rem;
  }

  @keyframes pulse {
    0% {
      background-color: #e6e6e6;
    }

    50% {
      background-color: #eeeeee;
    }

    100% {
      background-color: #e6e6e6;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 27.5rem;
    height: 26rem;
  }

  @media screen and (max-width: 767px) {
    width: 20.8rem;
    height: 23.2rem;
  }
`;

const Title = styled.div`
  width: 18rem;
  height: 3.6rem;

  @media screen and (max-width: 767px) {
    width: 14rem;
    height: 3rem;
  }
`;

const Avatar = styled.div`
  width: 10rem;
  height: 2.8rem;

  @media screen and (max-width: 767px) {
    width: 8rem;
    height: 3rem;
  }
`;

const WriteCount = styled.div`
  width: 14rem;
  height: 3rem;

  @media screen and (max-width: 767px) {
    width: 10rem;
    height: 3rem;
  }
`;

export { SkeletonListContainer, SkeletonItem, Title, Avatar, WriteCount };
