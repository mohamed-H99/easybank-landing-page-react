import styled, { css } from "styled-components";

const FooterWrapper = styled.div`
  background-color: var(--clr-dark-blue);
  padding: 50px 0;
`;

const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: flex-start;
  align-items: flex-start;

  &:first-child {
    justify-content: space-between;
  }
  &:last-child {
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const FooterItem = styled.li`
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: var(--clr-white);
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
`;

const FooterImage = styled.img``;

const FooterText = styled.p`
  color: var(--clr-grayish-blue);
  font-size: 14px;
  font-weight: 400;
`;

export {
  FooterWrapper,
  FooterColumns,
  FooterColumn,
  FooterList,
  FooterItem,
  FooterLink,
  FooterImage,
  FooterText,
};
