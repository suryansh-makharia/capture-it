import React from "react";
import HomeSection from "../components/HomeSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from '../components/ScrollTop';

export default function Home({ questions }) {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <HomeSection />
      <ServicesSection />
      <FaqSection questions={questions} />
      <ScrollTop />
    </motion.div>
  );
}
