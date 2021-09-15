export const fadeIn = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      when: "beforeChildren",
      ease: "easeOut",
      staggerChildren: 2,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
  },
};

export const fadeInProduct = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 1,
    ease: "easeOut",
  },
};

export const fadeInHeader = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1,
    ease: "easeOut",
  },
};
