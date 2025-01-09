import Input from "./Input";

interface InputRadioProps extends Input {
  children: string;
  checked: boolean;
  disable?: boolean;
}

export default InputRadioProps;
