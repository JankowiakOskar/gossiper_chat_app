import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

type Props = {
  children: React.ReactNode;
};

const TransitionProvider = ({ children }: Props) => (
  <motion.div variants={transitionVariants} initial='initial' animate='animate' exit='exit'>
    {children}
  </motion.div>
);

export default TransitionProvider;
