import React from 'react';
import { UserType, MessageType } from 'utils/types/types';
import { Direction } from 'utils/types/enums';
import { MessageWrapper, MessageAuthor, MessageDate, MessageText } from './MessageStyles';

export type MessageProps = {
  text: MessageType['text'];
  date: Date;
  direction: Direction;
  sender?: UserType['name'];
};

const Message = ({ text, date, direction, sender }: MessageProps) => {
  const formatDate = (dateParam: Date) => {
    const d = new Date(dateParam);
    const formatedMinutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    return `${d.getHours()}:${formatedMinutes}`;
  };

  return (
    <MessageWrapper direction={direction}>
      {sender && <MessageAuthor>{sender}</MessageAuthor>}
      <MessageDate>{formatDate(date)}</MessageDate>
      <MessageText>{text}</MessageText>
    </MessageWrapper>
  );
};
export default Message;
