import React from "react";
import clock from "../img/clock.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import home2 from "../img/home2.png";
import { Home, Image, Description } from "../styles";
import styled from "styled-components";
import { faqScroll } from "../animation";
import useScroll from "./useScroll";
export default function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={faqScroll}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Unable to load" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Unable to load" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Unable to load" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Unable to load" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Unable to load" />
      </Image>
    </Services>
  );
}
const Services = styled(Home)`
  h2 {
    padding-bottom: 5rem;
    font-size: 3.4rem;
  }
  p {
    width: 70%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`

  .icon {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: 1rem;
    background: white;
    color: #1d1f22;
    padding: 1rem;
    border-radius: 0.4rem;
  }
`;
