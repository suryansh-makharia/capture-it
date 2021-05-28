const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1.5,
    },
  },
};
const slideAnim = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opactity: 1, transition: { staggerChildren: 0.2, ease: "easeOut" } },
};
const faqScroll = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
const aboutTitle = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
const burgerAnim = {
  hidden: { x: "150%" },
  show: {
    x: "0%",
    transition: { duration: 0.5 },
  },
};
export {
  pageAnimation,
  titleAnim,
  fade,
  photoAnim,
  lineAnim,
  slideAnim,
  sliderContainer,
  faqScroll,
  aboutTitle,
  burgerAnim,
};
