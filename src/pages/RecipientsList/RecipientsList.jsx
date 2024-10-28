import { styled } from 'styled-components';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import RecipientCard from './RecipientsCard';
import useFetchData from '../../hooks/useFetchData';
import { getRollingList } from '../../service/api';

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

function RecipientsList() {
  const { data: rollingListData } = useFetchData(getRollingList, []);
  const rollingList = rollingListData.results;

  return (
    <Container>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default RecipientsList;
