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
    background-color: #d4d4d4; /* 기존보다 살짝 진한 기본 배경 */
    animation: pulse 1s infinite ease-in-out;
  }

  div + div {
    margin-top: 1.2rem;
  }

  @keyframes pulse {
    0% {
      background-color: #d4d4d4; /* 기본 배경 */
    }

    50% {
      background-color: #e0e0e0; /* 기존보다 살짝 진한 중간 배경 */
    }

    100% {
      background-color: #d4d4d4;
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
