import LoaderComponent from 'components/molecules/LoaderComponent/LoaderComponent';
import { LoaderType } from 'utils/types/types';

type LoaderProps = LoaderType & { children: React.ReactNode };

const LoaderProvider = ({ isLoading, children, ...props }: LoaderProps) => <>{isLoading ? <LoaderComponent {...props} /> : children}</>;

export default LoaderProvider;
