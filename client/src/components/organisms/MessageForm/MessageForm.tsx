import { useState, useEffect } from 'react';
import { MessageType, UserType } from 'utils/types/types';
import ButtonSend from 'components/atoms/SendButton/SendButton';
import InputMessage from 'components/atoms/InputMessage/InputMessage';
import { FormWrapper, Form } from './MessageFormStyles';

type Props = {
  handleDataCB: (date: MessageType) => any;
  username: UserType['name'];
};

const defaultMessage: MessageType = {
  date: new Date(),
  sender: '',
  text: '',
};

const MessageForm = ({ handleDataCB, username }: Props) => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [typingMessage, setTypingMessage] = useState<MessageType>(defaultMessage);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!typingMessage.text) return;
    handleDataCB(typingMessage);
    setSubmitted(prevState => !prevState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, sender: typeof username): void => {
    const msgText = e.target.value;
    setTypingMessage({ date: new Date(), sender, text: msgText });
  };

  useEffect(() => {
    const clearForm = () => {
      setTypingMessage(defaultMessage);
      setSubmitted(false);
    };

    clearForm();
  }, [isSubmitted]);

  return (
    <FormWrapper>
      <Form onSubmit={e => handleSubmit(e)}>
        <InputMessage type='text' placeholder='Type new message' value={typingMessage.text} onChange={e => handleChange(e, username)} />
        <ButtonSend type='submit' />
      </Form>
    </FormWrapper>
  );
};

export default MessageForm;
