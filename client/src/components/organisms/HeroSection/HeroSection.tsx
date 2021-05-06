import { Routes } from 'routes';
import CustomLink from 'components/atoms/CustomLink/CustomLink';
import ChatHero from 'assets/svgs/ChatHero.svg';
import { HeroSectionWrapper, DescriptionWrapper, Title, Text, Span, HeroImage, StyledButton } from './HeroSectionStyles';

const HeroSection = () => (
  <HeroSectionWrapper>
    <DescriptionWrapper>
      <Title>
        Gossiper - <Span>Free Chatting</Span>
      </Title>
      <Text>
        Join to one of free rooms or crate your own. App is totaly free, create an account and <Span>expand your contacts</Span>
      </Text>
      <StyledButton>
        <CustomLink to={Routes.ChatRooms}>Start chatting</CustomLink>
      </StyledButton>
    </DescriptionWrapper>
    <HeroImage src={ChatHero} />
  </HeroSectionWrapper>
);

export default HeroSection;
