import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store';
import useWindow from 'hooks/useWindow';
import { logOut } from 'features/auth/authSlice';
import { ListElementType } from 'utils/types/types';
import { Routes } from 'routes';
import { ReactComponent as HomeSVG } from 'assets/svgs/HomeSVG.svg';
import { ReactComponent as ChatIcon } from 'assets/svgs/ChatSVG.svg';
import { ReactComponent as PadlockSVG } from 'assets/svgs/PadlockSVG.svg';
import { breakpoints } from 'assets/themes/theme';
import CustomLink from 'components/atoms/CustomLink/CustomLink';
import Brand from 'components/atoms/Brand/Brand';
import BurgerMenu from 'components/atoms/BurgerMenu/BurgerMenu';
import List from 'components/molecules/List/List';
import { StyledNavBar, Wrapper, InnerWrapper, Nav } from './NavBarStyles';

const transition = {
  type: 'spring',
  stiffness: 100,
  mass: 0.7,
};

const wrapperVariants = {
  collapsed: {
    height: 75,
    transition: { ...transition, delay: 0.3 },
  },
  expanded: {
    height: 250,
    transition,
  },
};

const NavBar = () => {
  const [isOpenNav, setOpenNav] = useState(false);
  const location = useLocation();
  const authToken = useAppSelector(state => state.auth.authToken);
  const dispatch = useAppDispatch();
  const { windowWidth } = useWindow();
  const isBigDevice = windowWidth >= breakpoints.bigTablet;

  const navList: ListElementType[] = [
    { name: 'Home', path: Routes.Home, icon: <HomeSVG /> },
    { name: 'Chats', path: Routes.ChatRooms, icon: <ChatIcon /> },
  ];
  const logoutEl = { name: 'Logout', icon: <PadlockSVG />, clickHandler: () => dispatch(logOut()) };
  const loginEl = { name: 'Log In', path: Routes.Auth, icon: <PadlockSVG /> };

  const toggleNavBar = () => setOpenNav(prevState => !prevState);

  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  return (
    <StyledNavBar variants={wrapperVariants} initial={false} animate={isOpenNav ? 'expanded' : 'collapsed'}>
      <InnerWrapper>
        <Wrapper>
          <CustomLink to={Routes.Home}>
            <Brand onNavBar />
          </CustomLink>
          <BurgerMenu isOpen={isOpenNav} setOpen={toggleNavBar} />
        </Wrapper>
        <Nav>
          <List list={authToken ? [...navList, logoutEl] : [...navList, loginEl]} isExpanded={isBigDevice ? true : isOpenNav} />
        </Nav>
      </InnerWrapper>
    </StyledNavBar>
  );
};

export default NavBar;
