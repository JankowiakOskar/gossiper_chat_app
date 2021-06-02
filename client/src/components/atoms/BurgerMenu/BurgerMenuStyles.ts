import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface LineTypes {
  readonly top?: boolean;
  readonly center?: boolean;
  readonly bottom?: boolean;
}

export const OuterWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    display: none;
  }
`;

export const BurgerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Line = styled(motion.span)<LineTypes>`
  position: absolute;
  width: 100%;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  ${({ top }) =>
    top &&
    css`
      top: 0;
      left: 0;
      transform: translate(0, 50%);
    `}

  ${({ center }) =>
    center &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-orgin: center;
    `}
    ${({ bottom }) =>
    bottom &&
    css`
      top: 100%;
      left: 0;
      transform: translate(0, -50%);
    `}
`;
