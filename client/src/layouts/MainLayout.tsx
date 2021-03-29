import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/themes/theme';
import GlobalStyle from 'assets/styles/globalStyles';
import NavBar from 'components/organisms/NavBar/Navbar';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const MainLayout: React.FC = ({ children }) => (
  <Wrapper>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
      {children}
    </ThemeProvider>
  </Wrapper>
);

export default MainLayout;
