import styled, { css } from "styled-components";

const HeroWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  background-image: url(${(props) => props.src.mobile});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 100%;
  ${css`
  @media (min-width: 576px) {
    background-image: url(${(props) => props.src.desktop});
    background-size: 50%;
    background-position: 100% 50%;
    grid-template-columns: unset;
    grid-template-areas: 'content image';
  }
  `}
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  grid-area: content;

  ${css`
  @media (min-width: 576px) {
    width: 70%;
    text-align: start;
  }
  `}
`;

const HeroContentTitle = styled.h1`
  font-weight: 300;
  font-size: clamp(1rem, 6vw, 3.5rem);
  margin-block: 0;

  ${css`
  @media (min-width: 576px) {
    line-height: 1.2;
  }
  `}
`;

const HeroContentSubtitle = styled.p`
  color: var(--clr-grayish-blue);
  margin-top: 10px;
  font-size: clamp(0.9rem, 5vw, 1.2rem);
`;

const HeroImageWrapper = styled.div`
  grid-area: image;

  ${css`
  @media (min-width: 576px) {
    transform: scale(1.5);
  }
  `}
`;

const HeroImage = styled.img`
  width: 97%;
  max-width: 30rem;
  display: block;
  margin: 0 auto;
`;

const ServiceCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 70px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServiceCardImage = styled.img`
  background-image: ${(props) => props.src};
  width: 70px;
  height: 70px;
  border-radius: 99rem;
  display: block;
`;

const ServiceCardTitle = styled.h3`
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 12px;
`;

const ServiceCardText = styled.p`
  color: var(--clr-grayish-blue);
  line-height: 1.5;
  font-size: 16px;
  font-weight: 400;
`;

const ArticleCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ArticleCard = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const ArticleCardImage = styled.img`
  background-image: ${(props) => props.src};
  width: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 1.5/1;
`;

const ArticleCardContent = styled.div`
  padding: 25px 20px;
  background-color: var(--clr-white);
`;

const ArticleCardContentAuthor = styled.span`
  color: var(--clr-grayish-blue);
  font-size: 12px;
`;

const ArticleCardContentTitle = styled.h4`
  margin: 7px 0 0;
  font-weight: 300;
  font-size: 18px;
`;

const ArticleCardContentText = styled.p`
  font-size: 13px;
  margin-top: 7px;
  color: var(--clr-grayish-blue);
  font-weight: 400;
`;

export {
  HeroWrapper,
  HeroContent,
  HeroContentTitle,
  HeroContentSubtitle,
  HeroImageWrapper,
  HeroImage,
  ServiceCard,
  ServiceCardsWrapper,
  ServiceCardImage,
  ServiceCardTitle,
  ServiceCardText,
  ArticleCardsWrapper,
  ArticleCard,
  ArticleCardImage,
  ArticleCardContent,
  ArticleCardContentAuthor,
  ArticleCardContentTitle,
  ArticleCardContentText,
};
