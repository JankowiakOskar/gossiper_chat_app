import styled, { css } from 'styled-components';
import { Direction } from 'utils/types/enums';

interface WrapperProps {
  readonly direction: Direction;
}

export const MessageWrapper = styled.div<WrapperProps>`
  margin: 1rem 0.5rem;
  padding: 1rem;
  width: fit-content;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.grey};

  ${({ direction }) =>
    direction === Direction.Right &&
    css`
      align-self: flex-end;
    `}
`;

export const MessageAuthor = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const MessageDate = styled.span`
  margin-left: 1.2rem;
`;

export const MessageText = styled.p`
  display: block;
  max-width: 20rem;
  word-wrap: break-word;
  font-size: ${({ theme }) => theme.font.size.small};
`;
