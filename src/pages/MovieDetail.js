import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MovieState from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from '../components/ScrollTop';

export default function MovieDetail(){
    const [ movies, setMovies ] = useState(MovieState());
    const [ movie, setMovie ] = useState(null);
    const history = useHistory();
    const url = history.location.pathname;
    useEffect(() => {
        const currentMovie = movies.filter((movie) => movie.url === url);
        setMovie(currentMovie);
    }, [movies, url]);
    return (
        <>
            {movie && (
        <Details variants={pageAnimation} exit="exit" initial="hidden" animate="show">
          <Headline>
              <h2>{movie[0].title}</h2>
              <img src={movie[0].mainImg} alt={movie[0].title} />
          </Headline>
            <Awards>
                {movie[0].awards.map(award => {
                    return (
                    <Award key={award.title}>
                    <h3>{award.title}</h3>
                        <div className="line"></div>
                    <p>{award.description}</p>
                    </Award>
                    );
                })}
            </Awards>
            <ImageDisplay>
                <img src={movie[0].secondaryImg} alt={movie[0].title} />
            </ImageDisplay>
        </Details>
            )}
            <ScrollTop />
        </>
    );
}
const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  display: grid;
  place-items: center;
  position: relative;

  h2 {
    position: absolute;
    font-size: 4rem;
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
    z-index: 1;
  }

  img {
    height: 80vh;
    width: 90%;
    object-fit: cover;
    filter: blur(3px);
  }
`;

const Awards = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1000px) {
      display: block;
    }
`;
const Award = styled.div`
  margin: 5rem;
  h3 {
    font-size: 2rem;
    color: white;
  }
  .line {
    width: 90%;
    background: #23d997;
    height: 5px;
    margin: 1rem 0;
  }
  p {
    padding: 1rem 0;
    color: white;
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    width: 100%;
    display: grid;
    place-items: center;
    img {
      width: 90%;
      height: 90vh;
      object-fit: cover;
    }
`;