import styled from 'styled-components';
import Waves from 'assets/svgs/waves.svg';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${Waves});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    z-index: -2;
    opacity: 0.8;
  }
`;

export const InnerWrapper = styled.div`
  padding: 0 2rem;
  max-width: 144rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.desktop} {
    padding: 0;
  }
`;
