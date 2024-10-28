import React, { useRef, useState } from 'react';
import { Controller, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import RecipientCard from './RecipientsCard';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import useFetchData from '../../hooks/useFetchData';
import { getRollingList } from '../../service/api';

function SliderComponent() {
  const { data: rollingListData } = useFetchData(getRollingList, []);
  const rollingList = rollingListData.results;

  const swiperRef = useRef(null);
  const [isPrev, setIsPrev] = useState(true);
  const [isNext, setIsNext] = useState(false);

  const [controlledSwiper, setControlledSwiper] = useState(null);

  const handleSlideChange = (swiper) => {
    setIsPrev(swiper.isBeginning);
    setIsNext(swiper.isEnd);
  };

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      modules={[Navigation, Controller]}
      onSlideChange={handleSlideChange}
      controller={{ control: controlledSwiper }}
      onInit={(swiper) => (swiperRef.current = swiper)}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setControlledSwiper(swiper);
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      {!isPrev && (
        <ArrowButton
          direction="left"
          className="swiper-button-next"
          onClick={() => swiperRef.current?.slidePrev()}
        />
      )}

      {rollingList.map((item) => (
        <SwiperSlide key={item.id}>
          <RecipientCard
            key={item.id}
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
  );
}

export default SliderComponent;
