import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import NavMob from "./NavMob";
export default function Nav() {
  const [clear, setClear] = useState(false);
  const onBurgerClick = () => {
    setClear(!clear);
  };
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Home
        </Link>
      </h1>
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
      <button onClick={onBurgerClick} className="burger">
        <FontAwesomeIcon icon={clear ? faTimes : faBars} />
      </button>
      {clear && <NavMob />}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 1px 1px #5e5e5e;
  background: #1d1f22;
  z-index: 10;
  h1 {
    margin-left: 7rem;
  }

  ul {
    margin-right: 7rem;
    list-style: none;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: white;
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  a:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.4s ease-out;
  }

  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: "Comic Sans MS", sans-serif;
  }

  li {
    position: relative;
  }
  .burger {
    opacity: 0;
    pointer-events: none;
    display: none;
  }
  @media (max-width: 1000px) {
    ul {
      opacity: 0;
      pointer-events: none;
    }
    .burger {
      opacity: 1;
      pointer-events: all;
      border: none;
      background: none;
      font-size: 2rem;
      margin-right: 4rem;
      z-index: 1;
      display: block;
    }
  }
`;
