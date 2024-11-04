import { useNavigate } from 'react-router-dom';

import styles from './HomePage.module.css';
import feat01 from '../../assets/Home/feat01.svg';
import feat02 from '../../assets/Home/feat02.png'; //svg파일이 이모지가 없게 추출 -> jpg
import Button from '../../components/Button/Button';
import useDeviceType from '../../hooks/useDeviceType';
import {
  FeatContainer,
  FeatTextContainer,
  TagSection,
  TextSection,
} from './HomePage.styles';

// Contents data
const featContents = [
  {
    tag: 'Point. 01',
    title: '누구나 손쉽게, 온라인 \n롤링 페이퍼를 만들 수 있어요',
    detail: '로그인 없이 자유롭게 만들어요.',
    img: feat01,
  },
  {
    tag: 'Point. 02',
    title: '서로에게 이모지로 감정을 \n표현해보세요',
    detail: '롤링 페이퍼에 이모지를 추가할 수 있어요.',
    img: feat02,
  },
];
function Homepage() {
  const nav = useNavigate();
  const getDevice = useDeviceType();
  const isPC = getDevice === 'pc';

  return (
    <>
      <div className={styles.featSection}>
        {featContents.map((content, index) => (
          <FeatContainer
            key={`feat-${index}`}
            direction={index === 0 ? 'row' : 'row-reverse'}
            className={styles.featContainer}>
            <FeatTextContainer $index={index}>
              <TagSection className={styles.tagSection}>
                {content.tag}
              </TagSection>
              <TextSection className={styles.textSection}>
                <h2>{content.title}</h2>
                <p>{content.detail}</p>
              </TextSection>
            </FeatTextContainer>
            <img src={content.img} alt="featImg" />
          </FeatContainer>
        ))}
        <section className={styles.buttonSection}>
          <Button size={isPC ? 'l' : 'xl'} onClick={() => nav('./list')}>
            구경해보기
          </Button>
        </section>
      </div>
    </>
  );
}

export default Homepage;
