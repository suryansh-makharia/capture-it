import React from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  sliderContainer,
  slideAnim,
} from "../animation";
import ScrollTop from '../components/ScrollTop';
import useScroll from "../components/useScroll";
export default function OurWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work variants={pageAnimation} animate="show" initial="hidden" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slideAnim}></Frame1>
        <Frame2 variants={slideAnim}></Frame2>
        <Frame3 variants={slideAnim}></Frame3>
        <Frame4 variants={slideAnim}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="The Athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="The Racer" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
        <motion.h2>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="Good Times" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 0 4rem;
  h2 {
    margin: 2rem 0;
  }
  @media screen and (max-width: 1300px){
    padding: 0 2rem;
  }
`;

const Movie = styled(motion.div)`
  margin-bottom: 8rem;
  .line {
    height: 4px;
    background: #23d997;
    width: 100%;
    margin-bottom: 3rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
  img:hover {
    opacity: 0.5;
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
