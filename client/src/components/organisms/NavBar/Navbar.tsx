import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store';
import { logOut } from 'features/auth/authSlice';
import styled from 'styled-components';
import { ListElementType } from 'utils/types/types';
import { motion, useAnimation } from 'framer-motion';
import { Routes } from 'routes';
import { ReactComponent as HomeSVG } from 'assets/svgs/HomeSVG.svg';
import { ReactComponent as ChatIcon } from 'assets/svgs/ChatSVG.svg';
import { ReactComponent as PadlockSVG } from 'assets/svgs/PadlockSVG.svg';
import CustomLink from 'components/atoms/CustomLink/CustomLink';
import Brand from 'components/atoms/Brand/Brand';
import BurgerMenu from 'components/atoms/BurgerMenu/BurgerMenu';
import List, { listElementVariants } from 'components/molecules/List/List';

const StyledNavBar = styled(motion.div)`
  padding: 1rem 2rem;
  width: 100%;
  height: 7.5rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transform-origin: center top;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const wrapperVariants = {
  collapsed: {
    height: 75,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.7,
    },
  },
  expanded: {
    height: 250,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.7,
    },
  },
};

const NavBar = () => {
  const [isOpenNav, setOpenNav] = useState(false);
  const [isAnimate, setAnimate] = useState(false);
  const wrapperAnimation = useAnimation();
  const listElAnimation = useAnimation();
  const location = useLocation();
  const authToken = useAppSelector(state => state.auth.authToken);
  const dispatch = useAppDispatch();

  const navList: ListElementType[] = [
    { name: 'Home', path: Routes.Home, icon: <HomeSVG /> },
    { name: 'Chats', path: Routes.ChatRooms, icon: <ChatIcon /> },
  ];
  const logoutEl = { name: 'Logout', icon: <PadlockSVG />, clickHandler: () => dispatch(logOut()) };
  const loginEl = { name: 'Log In', path: Routes.Auth, icon: <PadlockSVG /> };

  const toggleNavBar = () => {
    if (isAnimate) return;
    setOpenNav(prevState => !prevState);
  };

  useEffect(() => {
    const sequence = async () => {
      setAnimate(prevState => !prevState);
      if (isOpenNav) {
        await wrapperAnimation.start(wrapperVariants.expanded);
        await listElAnimation.start(listElementVariants.expanded);
      } else {
        await listElAnimation.start(listElementVariants.collapsed);
        await wrapperAnimation.start(wrapperVariants.collapsed);
      }
      setAnimate(prevState => !prevState);
    };
    sequence();
  }, [isOpenNav, authToken, wrapperAnimation, listElAnimation]);

  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  return (
    <StyledNavBar variants={wrapperVariants} initial={false} animate={wrapperAnimation}>
      <Wrapper>
        <CustomLink to={Routes.Home}>
          <Brand onNavBar />
        </CustomLink>
        <BurgerMenu isOpen={isOpenNav} setOpen={toggleNavBar} />
      </Wrapper>
      <Nav>
        <List list={authToken ? [...navList, logoutEl] : [...navList, loginEl]} animationControls={listElAnimation} />
      </Nav>
    </StyledNavBar>
  );
};

export default NavBar;
