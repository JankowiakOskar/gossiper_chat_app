import { OuterWrapper, BurgerWrapper, Line } from './BurgerMenuStyles';

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
