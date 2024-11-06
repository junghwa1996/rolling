// src/pages/RecipientsList/RecipientsList.jsx
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import React, { useEffect, useRef, useState, useCallback } from 'react';

import PropTypes from 'prop-types';
import { Controller, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getRollingList } from '../../service/api';
import useDeviceType from '../../hooks/useDeviceType';
import 'swiper/css';
import 'swiper/css/navigation';
import RecipientCard from './RecipientsCard';
import { SwiperContain, ArrowPosition } from './RecipientsList.styles';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import Loading from '../../components/Loading/Loading'; // 로딩 컴포넌트
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'; // 에러 메시지 컴포넌트

RecipientsList.propTypes = {
  type: PropTypes.oneOf(['favorite', 'recent']),
};

function RecipientsList({ type = 'favorite' }) {
  // GET response hooks
  const [rollingList, setRollingList] = useState([]);
  const [isPrev, setIsPrev] = useState(true);
  const [isNext, setIsNext] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 다중 생성 스와이퍼(서로 참조하지않음)
  const [controlledSwiper, setControlledSwiper] = useState(null);

  // swiper 인스턴스 참조
  const swiperRef = useRef(null);

  // 디바이스 감지 커스텀 훅
  const deviceType = useDeviceType();

  // navigate 함수
  const navigate = useNavigate();

  // 롤링 리스트 GET 함수
  const handleRollingListLoad = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getRollingList();
      const { results } = res;
      if (results) {
        let sortedData = results;
        if (type === 'favorite') {
          // messageCount 기준으로 내림차순 정렬
          sortedData = [...results].sort(
            (a, b) => b.messageCount - a.messageCount,
          );
        } else if (type === 'recent') {
          // createdAt 기준으로 내림차순 정렬 (최신순)
          sortedData = [...results].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          );
        }
        setRollingList(sortedData);
      }
    } catch (error) {
      console.error('롤링 리스트를 불러오는데 오류가 발생 했습니다.:', error);
      setError('데이터를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    handleRollingListLoad();
  }, [handleRollingListLoad]);

  // 디바이스가 변경될 때 슬라이드 첫번째로 이동
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      setIsPrev(true);
      setIsNext(false);
    }
  }, [deviceType]);

  // 디바이스 감지 변수 return true | false
  const isPC = deviceType === 'pc';
  const isTablet = deviceType === 'tablet';
  const isMobile = deviceType === 'mobile';

  // 디바이스 변화에 따른 swiper key update(재렌더링)
  const swiperKey = `${deviceType}-${type}`;

  // arrow 클릭 이벤트
  const handleSlideChange = (swiper) => {
    setIsPrev(swiper.isBeginning);
    setIsNext(swiper.isEnd);
  };

  // 카드 클릭 핸들러
  const handleCardClick = useCallback(
    (id) => {
      navigate(`/post/${id}`);
    },
    [navigate],
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!rollingList || rollingList.length === 0)
    return <p>표시할 데이터가 없습니다.</p>;

  return (
    <SwiperContain>
      {/* 이전 목록이 있으면 렌더 */}
      {isPC && !isPrev && (
        <ArrowPosition $position="left">
          <ArrowButton
            direction="left"
            className="swiper-button-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </ArrowPosition>
      )}
      <Swiper
        key={swiperKey}
        spaceBetween={isMobile ? 12 : 20}
        slidesPerView="auto"
        modules={[Navigation, Controller]}
        onSlideChange={handleSlideChange}
        controller={{ control: controlledSwiper }}
        onInit={(swiper) => (swiperRef.current = swiper)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setControlledSwiper(swiper);
        }}
        navigation={{
          // 디바이스 조건에 따른 arrow 노출 여부
          nextEl: isPC ? '.swiper-button-next' : undefined,
          prevEl: isPC ? '.swiper-button-prev' : undefined,
        }}
        // 디바이스 조건에 따른 터치 스와이프 가능 여부
        allowTouchMove={isTablet || isMobile}>
        {rollingList.map((item) => (
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
              onClick={() => handleCardClick(item.id)} // 카드 클릭 시 핸들러 호출
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 다음 목록이 있으면 렌더 */}
      {isPC && !isNext && (
        <ArrowPosition $position="right">
          <ArrowButton
            className="swiper-button-next"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </ArrowPosition>
      )}

      {/* {isLoading && <SkeletonList />} */}
    </SwiperContain>
  );
}

export default RecipientsList;
