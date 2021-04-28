import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { LoaderType } from 'utils/types/types';
import Loader from 'react-loader-spinner';
import { LoaderWrapper, LoadingMessage } from './LoaderStyles';

type LoaderProps = Omit<LoaderType, 'isLoading'>;

const LoaderComponent: React.FC<LoaderProps> = ({ loadingMessage, loaderColor }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <LoaderWrapper>
      <Loader
        type='ThreeDots'
        color={loaderColor ? themeContext.colors[loaderColor] : themeContext.colors.lightBlue}
        height={70}
        width={70}
      />

      {loadingMessage && <LoadingMessage>{loadingMessage}</LoadingMessage>}
    </LoaderWrapper>
  );
};

export default LoaderComponent;
