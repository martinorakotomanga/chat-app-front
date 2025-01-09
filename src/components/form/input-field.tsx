import { FunctionComponent } from "react";
import InputFieldProps from "../../typings/InputFieldProps";

const InputField: FunctionComponent<InputFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
  children,
}) => {
  let inputClassName;

  switch (error) {
    case "":
      inputClassName = "input-success";
      break;
    case undefined:
      inputClassName = "input-field";
      break;
    default:
      inputClassName = "input-error";
  }

  return (
    <div className="w-full p-2">
      <div>
        <label htmlFor={id} className="input-field-label">
          {children}
        </label>

        <input
          className={inputClassName}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>

      <p className="message-error" hidden={!error}>
        {error}
      </p>
    </div>
  );
};

export default InputField;
