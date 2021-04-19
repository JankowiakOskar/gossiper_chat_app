import { Input } from './InputMessageStyles';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const InputMessage = (props: Props) => <Input {...props} />;

export default InputMessage;
