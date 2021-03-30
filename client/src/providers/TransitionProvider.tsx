import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
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
