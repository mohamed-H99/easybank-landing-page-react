import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../Common/StyledElements";
import {
  FooterColumn,
  FooterColumns,
  FooterImage,
  FooterItem,
  FooterLink,
  FooterList,
  FooterText,
  FooterWrapper,
} from "./StyledElements";
import Logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

export default function AppFooter() {
  return (
    <FooterWrapper>
      <Container>
        <FooterColumns>
          <FooterColumn>
            <Link to="/">
              <FooterImage src={Logo} alt={"logo"} />
            </Link>
            <FooterList row style={{ gap: "1rem" }}>
              <FooterItem>
                <FooterLink>
                  <FooterImage src={facebook} alt={"facebook"} />
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>
                  <FooterImage src={youtube} alt={"youtube"} />
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>
                  <FooterImage src={twitter} alt={"twitter"} />
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>
                  <FooterImage src={pinterest} alt={"pinterest"} />
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink>
                  <FooterImage src={instagram} alt={"instagram"} />
                </FooterLink>
              </FooterItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterList>
              <FooterItem>
                <FooterLink href={"#"}>{"About Us"}</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href={"#"}>{"Contact"}</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href={"#"}>{"Blog"}</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterList>
              <FooterItem>
                <FooterLink href={"#"}>{"Careers"}</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href={"#"}>{"Support"}</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href={"#"}>{"Privacy Policy"}</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterColumn>

          {/* divider */}

          <FooterColumn>
            <Button gradient rounded>
              {"Request Invite"}
            </Button>
            <FooterText>&copy;{" EasyBank All Rights Reserved"}</FooterText>
          </FooterColumn>
        </FooterColumns>
      </Container>
    </FooterWrapper>
  );
}
