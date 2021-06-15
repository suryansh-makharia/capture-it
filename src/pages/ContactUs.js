import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
export default function ContactUs() {
  return (
    <Contact
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch By :</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>
              Leaving a mail at{" "}
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=makhariasuryansh7@gmail.com">
                makharia suryansh7 at gmail dot com!
              </a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Reaching out through the social media links given below.</h2>
          </Social>
        </Hide>
      </div>
      <SocialLinks>
        <button className="github">
          <a href="https://github.com/suryanshmak">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </button>

        <button className="youtube">
          <a
            className="youtube-link"
            href="https://www.youtube.com/channel/UCYmxdpRs6I3d62Vxupz4MYQ"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </button>
        <button className="facebook">
          <a
            className="facebook-link"
            href="https://www.facebook.com/suryansh.makharia"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </button>
      </SocialLinks>
    </Contact>
  );
}

const Contact = styled(motion.div)`
  margin: 0 5rem;
  color: white;
  min-height: 80vh;
  overflow-y: hidden;
  position: relative;
  @media (max-width: 760px) {
    margin: 0 4rem;
  }
`;
const Title = styled.div`
  margin: 4rem 0 2rem 0;
  color: white;
  h2 {
    font-size: 3.1rem;
  }
  @media (max-width: 760px) {
    h2 {
    font-size: 2.5rem;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #ededed;
  @media (max-width: 650px) {
    width: 1.5rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2.3rem;
  }
  a {
    color: #23d997;
    font-size: 2.2rem;
  }
  @media (max-width: 760px) {
    h2 {
    font-size: 1.9rem;
    margin: 1rem;
    }
    a {
      font-size: 1.7rem;
    }
  }
`;
const SocialLinks = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 20%;
  margin-left: 40%;
  justify-content: space-evenly;
  button {
    border: none;
  }
  button:hover {
    opacity: 0.5;
    background: none;
  }
  a {
    font-size: 2.4rem;
    color: white;
  }
  .youtube-link {
    color: red;
  }
  .facebook-link {
    color: #097ceb;
  }
`;
