export const modalOverlayVariants = {
  initial: {
    opacity: 0,
    backgroundFilter: 'blur(0px)'
  },
  animate: {
    opacity: 1,
    backdropFilter: 'blur(5px)',
    transition: {
      when: 'beforeChildren',
      ease: 'easeIn',
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: {
      when: 'beforeChildren',
      ease: 'easeOut',
      duration: 0.2,
    },
  },
}


export const modalContentVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: [0.7, 1],
    opacity: 1,
    transition: {
      type: 'easeIn',
      duration: 0.4
    },
  },
  exit: {
    opacity: [1, 0.5],
    scale: [1, 0],
    transition: {
      type: 'easeIn',
      duration: 0.4,
    },
  },
};