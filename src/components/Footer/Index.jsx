import React from "react";
import { Container, Contact, Law, App } from "./styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";

function Index() {
  return (
    <Container>
      <Contact>
        <div className="contact__contents">
          <p>SOCIAL</p>
          <ul>
            <li>
              <a href="fb.com" target="_top">
                <FacebookIcon />
              </a>
            </li>

            <li>
              <a href="instagram.com" target="_blank">
                <InstagramIcon />
              </a>
            </li>

            <li>
              <a href="twitter.com" target="_blank">
                <TwitterIcon />
              </a>
            </li>
          </ul>
          <a>Email : support@netflix.com</a>
        </div>
      </Contact>

      <Law>
        <img src="../../assets/images/logo.png" alt="" />
        <img src="../../assets/images/boCongThuong.png" alt="boCongThuong" />
      </Law>

      <App>
        <p>APP</p>
        <div className="icon">
          <a href="">
            <AppleIcon />
          </a>
          <a href="">
            <AndroidIcon />
          </a>
        </div>
      </App>
    </Container>
  );
}

export default Index;
