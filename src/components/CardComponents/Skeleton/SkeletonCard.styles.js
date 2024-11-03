// SkeletonCard.styles.js
import styled, { keyframes } from 'styled-components';

// 애니메이션을 추가하여 스켈레톤의 느낌을 표현하는 효과
const shimmer = keyframes`
  0% {
    background-position: -30rem 0;
  }
  100% {
    background-position: 300% 0;
  }
`;

export const SkeletonCardContainer = styled.div`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  background: #f0f0f0;
  background-image: linear-gradient(
    to right,
    #f0f0f0 0%,
    #e0e0e0 20%,
    #f0f0f0 40%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 35.2rem;
    height: 28.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32rem;
    height: 23rem;
  }
`;

export const SkeletonHeader = styled.div`
  height: 2.4rem;
  width: 60%;
  border-radius: 0.4rem;
  background-color: #e0e0e0;
  margin: 1.6rem 2.4rem;
`;

export const SkeletonContent = styled.div`
  height: 6rem;
  width: 90%;
  border-radius: 0.4rem;
  background-color: #e0e0e0;
  margin: 1.6rem 2.4rem;
`;
