import styled from 'styled-components';
import Button from 'components/atoms/Button/ButtonStyles';

export const HeroSectionWrapper = styled.div`
  position: relative;
  padding: 2rem 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 8rem 0;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const DescriptionWrapper = styled.div`
  ${({ theme }) => theme.mediaQuery.bigTablet} {
    padding: 0 20rem 0 0;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.font.size.huge};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.medium};
  text-align: left;
  width: 80%;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.font.size.large};
    margin: 2rem 0;
    width: 50%;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue};
  text-shadow: 0 0 1px rgba(0 0 0);
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 20rem;
  left: 0;
  z-index: -1;
  width: 50rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    min-width: 80rem;
  }

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    min-width: 90rem;
    top: 10rem;
    left: 20rem;
  }

  ${({ theme }) => theme.mediaQuery.desktop} {
    top: 0;
    left: 50rem;
  }
`;

export const StyledButton = styled(Button)`
  margin: 2rem 0 0 0;
`;
