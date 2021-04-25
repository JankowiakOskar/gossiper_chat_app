import { Wrapper, BrandTitle, LogoSVG } from './BrandStyles';

type Props = {
  onNavBar?: boolean;
};

const Brand: React.FC<Props> = ({ onNavBar = false }) => (
  <Wrapper>
    <LogoSVG onNavBar={onNavBar} />
    <BrandTitle onNavBar={onNavBar}>Gossiper</BrandTitle>
  </Wrapper>
);

export default Brand;
