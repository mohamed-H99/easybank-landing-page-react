import React, { useEffect, useState } from "react";
import {
  Section,
  Container,
  SectionTitle,
  SectionSubtitle,
} from "../../components/Common/StyledElements";
import {
  HeroWrapper,
  HeroContent,
  HeroContentTitle,
  HeroContentSubtitle,
  HeroImageWrapper,
  HeroImage,
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
    const bgDesktop =
      data?.introImageDesktop &&
      require(`../../assets/images/${data.introImageDesktop}`).default;
    const bgMobile =
      data?.introImageMobile &&
      require(`../../assets/images/${data.introImageMobile}`).default;

    const mockups =
      data?.mockups && require(`../../assets/images/${data.mockups}`).default;

    const serImgs = data?.services?.map(
      (ser) => require(`../../assets/images/${ser.image}`)?.default
    );
    const artImgs = data?.articles?.map(
      (art) => require(`../../assets/images/${art.image}`)?.default
    );

    setLocalImages((prev) => ({
      ...prev,
      mockups,
      bgDesktop,
      bgMobile,
      services: serImgs,
      articles: artImgs,
    }));
  }, [data]);

  return (
    <>
      <Section style={{ paddingBlock: "0" }}>
        <HeroWrapper
          src={{
            mobile: localImages?.bgMobile,
            desktop: localImages?.bgDesktop,
          }}
        >
          <HeroImageWrapper>
            <HeroImage src={localImages?.mockups} />
          </HeroImageWrapper>
          <Container>
            <HeroContent>
              <HeroContentTitle>
                {"Next generation digital banking"}
              </HeroContentTitle>
              <HeroContentSubtitle>
                {
                  "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
                }
              </HeroContentSubtitle>
            </HeroContent>
          </Container>
        </HeroWrapper>
      </Section>
      <Section grayish>
        <Container>
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
        <Container>
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
