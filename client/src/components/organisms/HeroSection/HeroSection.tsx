import styled from 'styled-components';
import { Routes } from 'routes';
import Button from 'components/atoms/Button/Button';
import CustomLink from 'components/atoms/CustomLink/CustomLink';
import { ReactComponent as ChatHero } from 'assets/svgs/ChatHero.svg';

const HeroSectionWrapper = styled.div`
  padding: 2rem 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DescriptionWrapper = styled.div``;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.medium};
  text-align: left;
  width: 80%;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue};
  text-shadow: 0 0 1px rgba(0 0 0);
`;

const ChatHeroWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 2rem 0 0 0;
`;

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
        <CustomLink to={Routes.ChatChannels}>Start chatting</CustomLink>
      </StyledButton>
    </DescriptionWrapper>
    <ChatHeroWrapper>
      <ChatHero />
    </ChatHeroWrapper>
  </HeroSectionWrapper>
);

export default HeroSection;
