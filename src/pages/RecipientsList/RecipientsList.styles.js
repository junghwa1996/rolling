import { styled } from 'styled-components';

export const ArrowPosition = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  ${({ $position }) => `${$position}: -2rem`}
`;

export const SwiperContain = styled.div`
  position: relative;
  width: 116rem;
  margin: 0 auto;
  .swiper-slide {
    width: 27.5rem;
    @media (max-width: 767px) {
      width: 20.8rem;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: block;
  }

  @media (max-width: 1247px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    width: auto;
  }
`;
