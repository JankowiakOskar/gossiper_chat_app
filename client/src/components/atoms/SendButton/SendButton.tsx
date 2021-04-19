import { Button, PaperPlaneIcon } from './SendButtonStyles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SendButton = (props: Props) => (
  <Button {...props}>
    <PaperPlaneIcon />
  </Button>
);

export default SendButton;
