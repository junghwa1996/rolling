import { styled } from 'styled-components';

import { Title } from '../../styles/common/Common.styles';
import styles from './recipientsListPage.module.css';
import useDeviceType from '../../hooks/useDeviceType';
import RecipientsList from './RecipientsList';
import Button from '../../components/Button/Button';
import { SwiperContain } from './RecipientsList.styles';

const StyledSwiper = styled(SwiperContain)`
  @media screen and (max-width: 1248px) {
    .swiper-wrapper {
      margin-left: 2rem;
      width: 100%;
    }
  }
`;

function RecipientsListPage() {
  const deviceType = useDeviceType();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.listContainer}>
          <div>
            <Title $media={{ font: { pc: '24b', mo: '20b' } }}>
              인기 롤링 페이퍼 🔥
            </Title>
            <StyledSwiper className={styles.swiperContain}>
              <RecipientsList type="favorite" />
            </StyledSwiper>
          </div>
          <div>
            <Title $media={{ font: { pc: '24b', mo: '20b' } }}>
              최근에 만든 롤링 페이퍼 ⭐️
            </Title>
            <StyledSwiper className={styles.swiperContain}>
              <RecipientsList type="recent" />
            </StyledSwiper>
          </div>
        </div>
        <div className={styles.buttonArea}>
          <Button size={deviceType === 'pc' ? 'l' : 'xl'} to="/post">
            나도 만들어보기
          </Button>
        </div>
      </div>
    </>
  );
}

export default RecipientsListPage;
