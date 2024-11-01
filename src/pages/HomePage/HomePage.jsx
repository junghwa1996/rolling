import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import styles from './HomePage.module.css';
import { font } from '../../styles/fontStyles';
import feat01 from '../../assets/Home/feat01.svg';
import feat02 from '../../assets/Home/feat02.png'; //svg파일이 이모지가 없게 추출 -> jpg
import Button from '../../components/Button/Button';
import useDeviceType from '../../hooks/useDeviceType';

//Contents로 들어갈 내용 array.object로 관리
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

//NOTE - 하나의 feat을 관리하고 있는 Container
export const FeatContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};

  justify-content: space-between;
  padding: 6rem 0;

  width: 100%;
  height: 32.4rem;

  border-radius: 1.6rem;
  background-color: #f6f8ff; //따로 컬러 시스템 적용이 안되어 있음

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    flex-direction: column;
    padding: 4rem 0;

    height: 44rem;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 2.4rem 0;

    height: 35.2rem;
  }

  img {
    width: 72rem;
    height: 20.4rem;

    @media screen and (max-width: 767px) {
      width: 40rem;
      height: 13rem;
    }
  }
`;

//NOTE - feat설명 안에서 설명 부분을 감싸고 있는 Container
export const FeatTextContainer = styled.div`
  ${(props) =>
    props.$index === 0
      ? css`
          margin-left: 6rem;
        `
      : css`
          margin-right: 19rem;
        `}white-space: pre-wrap; //'/n'에 따라 줄바꿈

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    margin-left: 4rem;
    white-space: nowrap; //줄바꿈 없이
  }

  @media screen and (max-width: 767px) {
    width: 27.2rem;
    margin: 0 auto; // 모바일에서는 양쪽 여백이 동일하게 설정됨
  }
`;

//NOTE - feat 설명 안에서 태그 부분
export const TagSection = styled.div`
  /* display: inline-block;

  margin-bottom: 1.6rem;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  background-color: var(--purple-600); */
  color: ${({ theme }) => theme.whiteText};

  ${font['14b']}/* @media screen and (max-width: 767px) {
    padding: 0.4rem 1.2rem;
  } */
`;

//NOTE - feat 설명 안에서 text 부분
export const TextSection = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media screen and (max-width: 767px) {
    gap: 0.4rem;
  } */

  h2 {
    color: #181818; //DarkMode로 변환이 되어있을 때, 흰색으로 변하게 되는데 배경색 때문에 묻힘
    ${font['24b']}

    @media screen and (max-width: 767px) {
      ${font['18b']}
    }
  }

  p {
    color: ${({ theme }) => theme.secondary};
    ${font['18']}

    @media screen and (max-width: 767px) {
      ${font['15']}
    }
  }
`;

function Homepage() {
  const nav = useNavigate();
  const getDevice = useDeviceType();

  const isPC = getDevice === 'pc';

  return (
    <>
      <section>
        <h1>헤더</h1>
      </section>
      <div className={styles.featSection}>
        {featContents.map((content, index) => (
          <FeatContainer
            key={`feat-${index}`}
            direction={index === 0 ? 'row' : 'row-reverse'}>
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
            생성하기
          </Button>
        </section>
      </div>
    </>
  );
}

export default Homepage;
