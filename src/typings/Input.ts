import { ChangeEvent } from "react";

interface Input {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default Input;
