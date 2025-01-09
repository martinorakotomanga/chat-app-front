import Input from "./Input";

interface InputFieldProps extends Input {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  error?: string;
  children: string;
}

export default InputFieldProps;
