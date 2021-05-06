import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface LineTypes {
  readonly top?: boolean;
  readonly center?: boolean;
  readonly bottom?: boolean;
}

const OuterWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Line = styled(motion.span)<LineTypes>`
  position: absolute;
  width: 100%;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  ${({ top }) =>
    top &&
    css`
      top: 0;
      left: 0;
      transform: translate(0, 50%);
    `}

  ${({ center }) =>
    center &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-orgin: center;
    `}
    ${({ bottom }) =>
    bottom &&
    css`
      top: 100%;
      left: 0;
      transform: translate(0, -50%);
    `}
`;

const TopLineVariants = {
  expanded: {
    y: 10,
    rotate: 135,
  },
  collapsed: {
    y: 0,
    rotate: 0,
  },
};

const CenterLineVariants = {
  expanded: {
    y: 0,
    scale: 0,
  },
  collapsed: {
    scale: 1,
    x: -15,
  },
};

const BottomLineVariants = {
  expanded: {
    y: -10,
    rotate: -135,
  },
  collapsed: {
    y: 0,
    rotate: 0,
  },
};

type Props = {
  isOpen: boolean;
  setOpen: () => any;
};

const BurgerMenu: React.FC<Props> = ({ isOpen, setOpen }) => (
  <OuterWrapper>
    <BurgerWrapper onClick={setOpen}>
      <Line top variants={TopLineVariants} initial={false} animate={isOpen ? 'expanded' : 'collapsed'} />
      <Line center variants={CenterLineVariants} initial={false} animate={isOpen ? 'expanded' : 'collapsed'} />
      <Line bottom variants={BottomLineVariants} initial={false} animate={isOpen ? 'expanded' : 'collapsed'} />
    </BurgerWrapper>
  </OuterWrapper>
);

export default BurgerMenu;
