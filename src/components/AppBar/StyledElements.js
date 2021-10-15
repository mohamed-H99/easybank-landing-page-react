import styled, { css } from "styled-components";

const Header = styled.header``;

const HeaderWrapper = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  position: fixed;
  z-index: 10;

  ::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, var(--clr-dark-blue), transparent);
    z-index: -1;
    display: ${(props) => (props.isOpen ? "block" : "none")} !important;

    @media (min-width: 768px) {
      display: none !important;
    }
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  max-height: 70px;

  ${css`
    button {
      display: none;
    }
    @media (min-width: 768px) {
      button {
        display: block;
      }
    }
  `}
`;

const NavLogoWrapper = styled.div``;

const NavLogo = styled.img``;

const NavToggle = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  cursor: pointer;
  padding-block: 10px;
  ${css`
    @media (min-width: 768px) {
      display: none !important;
    }
    span {
      transform-origin: center;
      transition: transform var(--delay);
    }
    span:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }
    span:nth-child(1) {
      transform: ${(props) =>
        props.isOpen ? "translateY(7px) rotateZ(45deg)" : "none"};
    }
    span:nth-child(3) {
      transform: ${(props) =>
        props.isOpen ? "translateY(-7px) rotateZ(-45deg)" : "none"};
    }
    }
  `};
`;

const NavToggleLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--clr-dark-blue);
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: calc(70px + 2rem);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--clr-white);
  border-radius: var(--rad);
  width: calc(100% - 4rem);
  max-width: 576px;
  padding-block: 2rem;
  z-index: 1;

  @media (min-width: 768px) {
    display: flex !important;
    flex-direction: row;
    position: static;
    transform: none;
    width: unset;
    padding: 0;
    background-color: transparent;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--clr-dark-blue);
  font-weight: 400;
`;

export {
  Header,
  HeaderWrapper,
  NavWrapper,
  NavLogoWrapper,
  NavLogo,
  NavToggle,
  NavToggleLine,
  NavList,
  NavItem,
  NavLink,
};
