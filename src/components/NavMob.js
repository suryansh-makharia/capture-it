import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { burgerAnim } from "../animation";
export default function NavMob() {
  return (
    <Nav variants={burgerAnim} initial="hidden" animate="show">
      <div className="links">
      <Link to="/about">About Us</Link>

      <Link to="/work">Our Work</Link>

      <Link to="/contact">Get in Touch</Link>
      </div>
    </Nav>
  );
}
const Nav = styled(motion.div)`
  width: 30%;
  height: 100%;
  background-color: #1a1c1f;
  position: fixed;
  right: 0;
  top: 0;
  display: grid;
  align-items: center;
  box-shadow: -2px 0 8px black;
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
  }
  a {
    text-align: center;
    font-size: 2rem;
    color: white;
  }
  a:after {
    width: 50%;
    margin-left: 26%
  }
  @media (max-width: 760px) {
    width: 40%;
  }
`;
