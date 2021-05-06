import TransitionProvider from 'providers/TransitionProvider';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import { Wrapper, InnerWrapper } from './HomeStyles';

const Home = () => (
  <TransitionProvider>
    <Wrapper>
      <InnerWrapper>
        <HeroSection />
      </InnerWrapper>
    </Wrapper>
  </TransitionProvider>
);

export default Home;
