import React from 'react';
import { MessageType } from 'utils/types/types';
import { Direction } from 'utils/types/enums';
import { MessageWrapper, MessageAuthor, MessageDate, MessageText } from './MessageStyles';

type MessageProps = MessageType & {
  direction: Direction;
};

const Message = ({ text, date, direction, sender }: MessageProps) => {
  const formatDate = (dateParam: Date) => {
    const d = new Date(dateParam);
    const formatedMinutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    return `${d.getHours()}:${formatedMinutes}`;
  };

  return (
    <MessageWrapper direction={direction}>
      <MessageAuthor direction={direction}>{sender}</MessageAuthor>
      <MessageDate>{formatDate(date)}</MessageDate>
      <MessageText direction={direction}>{text}</MessageText>
    </MessageWrapper>
  );
};
export default Message;
