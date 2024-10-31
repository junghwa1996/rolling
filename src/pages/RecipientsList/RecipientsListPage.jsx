import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import styles from './recipientsListPage.module.css';
import useDeviceType from '../../hooks/useDeviceType';
import RecipientsList from './RecipientsList';
import Button from '../../components/Button/Button';
import { SwiperContain } from './RecipientsList.styles';
import { font } from '../../styles/fontStyles';

const StyledSwiper = styled(SwiperContain)`
  @media screen and (max-width: 1248px) {
    .swiper-wrapper {
      margin-left: 2rem;
      width: 100%;
    }
  }
`;

const Container = styled.div`
  h2 {
    ${({ $deviceType }) =>
      $deviceType === 'mobile' ? font['20b'] : font['24b']}
  }
`;

function RecipientsListPage() {
  const deviceType = useDeviceType();

  return (
    <>
      <Container className={styles.container} $deviceType={deviceType}>
        <div className={styles.listContainer}>
          <div>
            <h2>인기 롤링 페이퍼 🔥</h2>
            <StyledSwiper className={styles.swiperContain}>
              <RecipientsList favorite={true} />
            </StyledSwiper>
          </div>
          <div>
            <h2>최근에 만든 롤링 페이퍼 ⭐️</h2>
            <StyledSwiper className={styles.swiperContain}>
              <RecipientsList />
            </StyledSwiper>
          </div>
        </div>
        <div className={styles.buttonArea}>
          <Button size={deviceType === 'pc' ? 'l' : 'xl'} to="/post">
            나도 만들어보기
          </Button>
        </div>
      </Container>
    </>
  );
}

export default RecipientsListPage;
