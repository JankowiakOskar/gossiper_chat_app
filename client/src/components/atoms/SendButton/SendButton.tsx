import { ButtonProps } from 'components/atoms/Button/ButtonStyles';
import { StyledSendButton, PaperPlaneIcon } from './SendButtonStyles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

const SendButton = (props: Props) => (
  <StyledSendButton {...props}>
    <PaperPlaneIcon />
  </StyledSendButton>
);

export default SendButton;
