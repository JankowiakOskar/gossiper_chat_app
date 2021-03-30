import styled from 'styled-components';
import HeroSection from 'components/organisms/HeroSection/HeroSection';

const Wrapper = styled.div`
  padding: 2rem 2rem 0 2rem;
  height: 100vh;
  width: 100%;
`;

const Home = () => (
  <Wrapper>
    <HeroSection />
  </Wrapper>
);

export default Home;
