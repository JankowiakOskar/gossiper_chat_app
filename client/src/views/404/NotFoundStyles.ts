import styled, { css } from 'styled-components';
import { ReactComponent as ImageNotFound } from 'assets/svgs/404.svg';

const flexCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 7.5rem)
  overflow: hidden;
  ${flexCenter}
`;

export const ContentWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  ${flexCenter}
`;

export const Image404 = styled(ImageNotFound)`
  margin: 4rem;
  width: 100%;
  height: 25rem;

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    height: 40rem;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: bold;
  text-align: center;

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;
