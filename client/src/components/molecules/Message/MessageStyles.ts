import styled, { css } from 'styled-components';
import { Direction } from 'utils/types/enums';

interface MessageProps {
  readonly direction: Direction;
}

const rightMessageStyles = css`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};
`;

export const MessageWrapper = styled.div<MessageProps>`
  margin: 1rem 0.5rem;
  padding: 1rem;
  width: fit-content;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.grey};

  ${({ direction }) =>
    direction === Direction.Right &&
    css`
      ${rightMessageStyles}
    `}
`;

export const MessageAuthor = styled.span<MessageProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.colors.lightBlue};
  ${({ direction }) =>
    direction === Direction.Right &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const MessageDate = styled.span`
  margin-left: 1.2rem;
`;

export const MessageText = styled.p`
  margin: 0.5rem 0 0 0;
  display: block;
  max-width: 20rem;
  word-wrap: break-word;
  font-size: ${({ theme }) => theme.font.size.small};
`;
