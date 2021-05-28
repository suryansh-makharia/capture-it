import React from "react";
import {
  pageAnimation,
  sliderContainer,
  slideAnim,
  fade,
  aboutTitle
} from "../animation";
import styled from "styled-components";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <About variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slideAnim}></Frame1>
        <Frame2 variants={slideAnim}></Frame2>
        <Frame3 variants={slideAnim}></Frame3>
        <Frame4 variants={slideAnim}></Frame4>
      </motion.div>
      <Hide>
      <motion.h2 variants={aboutTitle}>
        About this website :
      </motion.h2>
      </Hide>
      <motion.p variants={fade}>
        This is a small and fun project made using React. Animations are made
        possible through Framer Motion. Note: This is not affiliated with
        anyone.
      </motion.p>
    </About>
  );
}
const About = styled(motion.div)`
 overflow: hidden;
  margin: 5rem 10rem;
  p {
    font-size: 2rem;
  }
`;
const Frame1 = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #fffebf;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
const Hide = styled.div`
    overflow: hidden;
`