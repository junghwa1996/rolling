import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { Controller, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import RecipientCard from './RecipientsCard';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
// import useFetchData from '../../hooks/useFetchData';
// import { getRollingList } from '../../service/api';

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

function SliderComponent({ listData, controlledSwiper, setControlledSwiper }) {
  // const { data: rollingListData } = useFetchData(getRollingList, []);
  // const rollingList = rollingListData.results;

  const swiperRef = useRef(null);
  const [isPrev, setIsPrev] = useState(true);
  const [isNext, setIsNext] = useState(false);
  // const [controlledSwiper, setControlledSwiper] = useState(null);

  const handleSlideChange = (swiper) => {
    setIsPrev(swiper.isBeginning);
    setIsNext(swiper.isEnd);
  };

  return (
    <Container>
      <Swiper
        modules={[Navigation, Controller]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={handleSlideChange}
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
      >
        {!isPrev && (
          <ArrowButton
            className="swiper-button-next"
            direction="left"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        )}

        {listData.map((item) => (
          <SwiperSlide key={item.id}>
            <RecipientCard
              id={item.id}
              name={item.name}
              bgColor={item.backgroundColor}
              bgImage={item.backgroundImageURL}
              totalMessage={{
                recentMessages: item.recentMessages,
                messageCount: item.messageCount,
                direction: 'column',
              }}
              emojiList={item.topReactions}
            />
          </SwiperSlide>
        ))}

        {!isNext && (
          <ArrowButton
            className="swiper-button-prev"
            onClick={() => swiperRef.current?.slideNext()}
          />
        )}
      </Swiper>
    </Container>
  );
}

export default SliderComponent;
