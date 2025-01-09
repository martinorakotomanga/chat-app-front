import { FunctionComponent } from "react";
import InputRadioProps from "../../typings/InputRadioProps";

const InputRadio: FunctionComponent<InputRadioProps> = ({
  id,
  name,
  value,
  onChange,
  checked,
  children,
}) => {
  return (
    <div className="flex items-center p-2">
      <input
        className="input-radio"
        id={id}
        name={name}
        type="radio"
        value={value}
        onChange={onChange}
        checked={checked}
      />

      <label htmlFor={id} className="input-radio-label">
        {children}
      </label>
    </div>
  );
};

export default InputRadio;
