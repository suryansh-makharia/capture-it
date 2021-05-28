import styled from "styled-components";
import { motion } from "framer-motion";
export const Home = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5rem;
  @media screen and ( max-width: 1300px ) {
    display: block;
    text-align: center;
    padding-bottom: 2rem;
    margin: 0;
  }
`;
export const Description = styled.div`
  flex: 1;
  margin: 4rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media screen and ( max-width: 1300px ) {
    padding: 0;
    button a{
      font-size: 1.3rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  margin-left: 5rem;
  z-index: 2;
  img {
    width: 80%;
    height: 70vh;
    object-fit: cover;
  }
  @media screen and ( max-width: 1300px ) {
    margin-left: 0;
    img {
      width: 90%;
      height: 80vh;
    }
  }
  @media (max-width: 768px){
    height: 60vh;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
