import React, { useEffect, useState } from "react";
import {
  Section,
  Container,
  SectionTitle,
  SectionSubtitle,
} from "../../components/Common/StyledElements";
import {
  ServiceCardsWrapper,
  ServiceCard,
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
} from "./StyledElements";

export default function Home({ data }) {
  const [localImages, setLocalImages] = useState({});

  useEffect(() => {
    const serImgs = data?.services?.map(
      (ser) => require(`../../assets/images/${ser.image}`)?.default
    );
    const artImgs = data?.articles?.map(
      (art) => require(`../../assets/images/${art.image}`)?.default
    );
    setLocalImages((prev) => ({
      ...prev,
      services: serImgs,
      articles: artImgs,
    }));
  }, [data]);

  return (
    <>
      <Section grayish>
        <Container text="center">
          <SectionTitle>{"Why choose EasyBank?"}</SectionTitle>
          <SectionSubtitle>
            {
              "We leverage Open Banking to turn your bank account into your financial hub."
            }
            <br />
            {"Control your finances like never before."}
          </SectionSubtitle>

          <ServiceCardsWrapper>
            {data?.services?.map((service, idx) => (
              <ServiceCard key={service.id}>
                <ServiceCardImage
                  src={localImages?.services && localImages.services[idx]}
                />
                <ServiceCardTitle>{service?.title}</ServiceCardTitle>
                <ServiceCardText>{service?.description}</ServiceCardText>
              </ServiceCard>
            ))}
          </ServiceCardsWrapper>
        </Container>
      </Section>

      <Section light>
        <Container text="center">
          <SectionTitle>{"Latest Articles"}</SectionTitle>
          <ArticleCardsWrapper>
            {data?.articles?.map((art, idx) => (
              <ArticleCard key={art?.id}>
                <ArticleCardImage
                  src={localImages?.articles && localImages.articles[idx]}
                />
                <ArticleCardContent>
                  <ArticleCardContentAuthor>{`By ${art.author}`}</ArticleCardContentAuthor>
                  <ArticleCardContentTitle>{art.title}</ArticleCardContentTitle>
                  <ArticleCardContentText>
                    {art.description}
                  </ArticleCardContentText>
                </ArticleCardContent>
              </ArticleCard>
            ))}
          </ArticleCardsWrapper>
        </Container>
      </Section>
    </>
  );
}
