import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {burgerAnim} from '../animation';
export default function NavMob(){
    return ( 
        <Nav variants={burgerAnim} initial="hidden" animate="show">
        <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Get in Touch</Link>
        </li>
      </ul>
        </Nav>
    )
}
const Nav = styled(motion.div)`
    width: 30%;
    height: 100%;
    background-color: #1a1c1f;
    z-index: 1;
    position: fixed;
    right: 0;
    top: 0;
    display: grid;
    align-items: center;
    box-shadow: -2px 0 8px black;
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 30%;
        width: 100%;
    }
    li a{
        font-size: 2rem;
        text-align: center;
        color: white;
        z-index: 1;
    }
    @media (max-width: 760px){
      width: 40%;
    }
`;