import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/themes/theme';
import GlobalStyle from 'assets/styles/globalStyles';
import NavBar from 'components/organisms/NavBar/Navbar';

const MainLayout: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
      {children}
    </ThemeProvider>
  </>
);

export default MainLayout;
