import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.fluid ? "100%" : "1040px")};
  margin: 0 auto;
  padding: 0 18px;
  text-align: ${(props) => props.text};
`;

const Section = styled.section`
  width: 100%;
  padding: 70px 0;
  ${(props) => {
    if (props.white)
      return css`
        background-color: var(--clr-white);
      `;
    else if (props.light)
      return css`
        background-color: var(--clr-very-light);
      `;
    else if (props.grayish)
      return css`
        background-color: var(--clr-light-grayish-blue);
      `;
    else
      return css`
        background-color: inherit;
      `;
  }}
`;

const SectionTitle = styled.h1`
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 40px;
`;

const SectionSubtitle = styled.p`
  color: var(--clr-grayish-blue);
  line-height: 1.5;
  max-width: 80%;
  margin-inline: auto;
`;

export { Container, Section, SectionTitle, SectionSubtitle };
