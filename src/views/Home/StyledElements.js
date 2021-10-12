import styled, { css } from "styled-components";

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
`;

const ArticleCardImage = styled.img`
  background-image: ${(props) => props.src};
  width: 100%;
  object-fit: cover;
  display: block;
  /* aspect-ratio: 1; */
  height: 190px;
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
