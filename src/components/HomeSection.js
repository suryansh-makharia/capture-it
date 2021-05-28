import React from "react";
import home1 from "../img/home1.png";
import { Home, Image, Description, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from 'react-router-dom';
export default function HomeSection() {
  return (
    <Home>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams </span>come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography ideas that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}><Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact Us</Link></motion.button>
      </Description>
      <Image>
        <motion.img src={home1} alt="Unable to load" variants={photoAnim} />
      </Image>
      <Wave />
    </Home>
  );
}
