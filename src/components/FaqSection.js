import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import useScroll from "./useScroll";
import { faqScroll } from "../animation";
export default function FaqSection({ questions }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const onAnswerClick = (index) => {
    setActiveIndex(index);
  };
  const renderedQuestions = questions.map((question, index) => {
    const active = index === activeIndex ? true : false;
    return (
      <motion.div layout className="question" key={question.title}>
        <motion.h4 layout onClick={() => onAnswerClick(index)}>
          {question.title}
        </motion.h4>
        {active && (
          <div className="answer">
            <p>{question.answer}</p>
            <p>{question.answerFull}</p>
          </div>
        )}
        <div className="faq-line"></div>
      </motion.div>
    );
  });
  const [element, controls] = useScroll();
  return (
    <Faq variants={faqScroll} initial="hidden" animate={controls} ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>{renderedQuestions}</AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(motion.div)`
  min-height: 70vh;
  display: block;
  padding: 0;
  margin: 0 5rem;
  @media screen and ( max-width: 1300px ) {
    text-align: center;
  }
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 3px;
    width: 100%;
    margin: 2rem 0;
  }
  .question {
    h4 {
      cursor: pointer;
      font-size: 2rem;
    }
    .answer {
      padding: 2rem 0 0 0;
    }
    p {
      padding: 1rem 0;
    }
  }
`;
