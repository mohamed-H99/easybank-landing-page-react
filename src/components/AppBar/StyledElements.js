import styled, { css } from "styled-components";

const Header = styled.header`
  height: 70px;
  max-height: 70px;
  width: 100%;
  background-color: var(--clr-white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  position: fixed;
  z-index: 10;
  opacity: 0.95;
`;

export { Header };
