import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.fluid ? "100%" : "1040px")};
  margin: 0 auto;
  padding: 0 18px;
  text-align: center;

  ${css`
    @media (min-width: 576px) {
      text-align: start;
    }
  `}
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

  ${css`
    max-width: 100%;
  `}
`;

const Button = styled.button`
  border: 0;
  outline: none;
  background: ${(props) => props.gradient && "var(--clr-gradient)"};
  border-radius: ${(props) => (props.rounded ? "99rem" : "0")};
  color: var(--clr-white);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: 1rem;
`;

export { Container, Section, SectionTitle, SectionSubtitle, Button };
