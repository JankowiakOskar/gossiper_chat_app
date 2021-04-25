import { Input } from './CustomInputStyles';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = (props: Props) => <Input {...props} />;

export default CustomInput;
