import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import RecipientCard from './RecipientsCard';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import { getRollingList } from '../../service/api';

RecipientsList.propTypes = {
  favorite: PropTypes.bool,
};

function RecipientsList({ favorite = false }) {
  const [rollingList, setRollingList] = useState([]);

  const [isPrev, setIsPrev] = useState(true);
  const [isNext, setIsNext] = useState(false);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    // 롤링 리스트 불러오는 함수
    const handleRollingListLode = async () => {
      try {
        const res = await getRollingList();
        const { results } = res;
        if (favorite) {
          const sortedData = results.sort(
            (a, b) => b.messageCount - a.messageCount,
          );
          setRollingList(sortedData);
        } else {
          setRollingList(results);
        }
      } catch (error) {
        console.error('롤링 리스트를 불러오는데 오류가 발생 했습니다.:', error);
      }
    };

    handleRollingListLode();
  }, []);

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

export default RecipientsList;
