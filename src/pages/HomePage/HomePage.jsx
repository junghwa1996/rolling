import styled from 'styled-components';

import { tm_color, tm_font } from '../../utils/themeUtils';
import feat01 from '../../assets/Home/point_01.svg';
import feat02 from '../../assets/Home/point_02.svg';

const text = '누구나 손쉽게, 온라인 \n롤링 페이퍼를 만들 수 있어요';

//NOTE - 전
export const FeatSection = styled.section`
  width: 120rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 72rem;
  }

  @media screen and (max-width: 767px) {
    width: 32rem;
  }
`;

export const FeatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 0;

  width: 100%;
  height: 32.4rem;

  border-radius: 1.6rem;
  background-color: ${tm_color('#F6F8FF')};

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem 0;

    height: 44rem;
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;

    height: 35.2rem;
    padding: 2.4rem 0;
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

export const FeatTextContainer = styled.div`
  margin-left: 6rem;
  white-space: pre-wrap;

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    margin-left: 4rem;
    white-space: nowrap;
  }

  @media screen and (max-width: 767px) {
    max-width: 27.2rem;
    margin: 0 2.4rem;
    white-space: wrap;
  }
`;

export const TagSection = styled.div`
  display: inline-block;

  margin-bottom: 1.6rem;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  background-color: ${tm_color('purple600')};
  color: ${tm_color('white')};

  ${tm_font('14b')}

  @media screen and (max-width: 767px) {
    padding: 0.4rem 1.2rem;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h2 {
    ${tm_font('24b')}

    @media screen and (max-width: 767px) {
      ${tm_font('18b')}
    }
  }

  p {
    color: ${tm_color('#555555')};
    ${tm_font('18')}

    @media screen and (max-width: 767px) {
      ${tm_font('15')}
    }
  }
`;

function Homepage() {
  return (
    <div>
      <section>
        <h1>헤더</h1>
      </section>
      <FeatSection>
        <FeatContainer>
          <FeatTextContainer>
            <TagSection>Point. 01</TagSection>
            <TextSection>
              <h2>{text}</h2>
              <p>로그인 없이 자유롭게 만들어요.</p>
            </TextSection>
          </FeatTextContainer>
          <img src={feat01} alt="feat01" />
        </FeatContainer>
        <div>h2</div>
      </FeatSection>
    </div>
  );
}

export default Homepage;
