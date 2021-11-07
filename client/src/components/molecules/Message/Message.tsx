import React from 'react';
import { MessageType } from 'utils/types/types';
import { Direction } from 'utils/types/enums';
import { MessageWrapper, MessageAuthor, MessageDate, MessageText } from './MessageStyles';

const formatMessageDate = (dateParam: Date) => {
  const d = new Date(dateParam);
  const formatedDate = {
    day: d.getUTCDate(),
    month: d.getUTCMonth() + 1,
    year: d.getFullYear(),
  };
  const formatedTime = {
    hours: d.getHours(),
    minutes: d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes(),
  };

  return `${formatedDate.day}/${formatedDate.month}/${formatedDate.year} ${formatedTime.hours}:${formatedTime.minutes}`;
};

type MessageProps = MessageType & {
  direction: Direction;
};

const Message = ({ text, date, direction, sender }: MessageProps) => {
  const formatedDate = formatMessageDate(date);
  return (
    <MessageWrapper direction={direction}>
      <MessageAuthor direction={direction}>{sender}</MessageAuthor>
      <MessageDate>{formatedDate}</MessageDate>
      <MessageText direction={direction}>{text}</MessageText>
    </MessageWrapper>
  );
};
export default Message;
