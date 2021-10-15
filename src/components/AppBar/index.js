import React, { useState } from "react";
import { Button, Container } from "../Common/StyledElements";
import {
  Header,
  HeaderWrapper,
  NavItem,
  NavLink,
  NavList,
  NavLogo,
  NavLogoWrapper,
  NavToggle,
  NavToggleLine,
  NavWrapper,
  NavOverlay,
} from "./StyledElements";
import Logo from "../../assets/images/logo.svg";

export default function Error() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Header>
      <HeaderWrapper isOpen={isOpen}>
        <Container style={{ backgroundColor: "var(--clr-white)" }}>
          <NavWrapper>
            <NavLogoWrapper>
              <NavLink href="/">
                <NavLogo src={Logo} alt={"logo"} />
              </NavLink>
            </NavLogoWrapper>
            {/* {isOpen && <NavOverlay />} */}
            <NavList isOpen={isOpen}>
              <NavItem>
                <NavLink href={"#"}>{"Home"}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"#"}>{"About"}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"#"}>{"Contact"}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"#"}>{"Blog"}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"#"}>{"Careers"}</NavLink>
              </NavItem>
            </NavList>

            <Button gradient rounded>
              {"Request Invite"}
            </Button>

            <NavToggle isOpen={isOpen} onClick={handleToggle}>
              <NavToggleLine></NavToggleLine>
              <NavToggleLine></NavToggleLine>
              <NavToggleLine></NavToggleLine>
            </NavToggle>
          </NavWrapper>
        </Container>
      </HeaderWrapper>
    </Header>
  );
}
