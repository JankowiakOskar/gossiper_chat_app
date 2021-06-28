import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { defaultTheme } from 'assets/themes/theme';
import useToastNotification from 'hooks/useToastNotification';
import GlobalStyle from 'assets/styles/globalStyles';
import NavBar from 'components/organisms/NavBar/Navbar';

const MainLayout: React.FC = ({ children }) => {
  useToastNotification();

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <NavBar />
        {children}
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
