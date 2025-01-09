import { ChangeEvent, FunctionComponent } from "react";
import InputRadio from "./input-radio";
import RadioOption from "../../typings/InputRadioOption";

type Props = {
  name: string;
  value: string;
  options: RadioOption[];
  onSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  children: string;
};

const InputRadioListGroup: FunctionComponent<Props> = ({
  name,
  value,
  options,
  onSelect,
  children,
}) => {
  const isChecked = (optionValue: string) => {
    return optionValue === value;
  };

  return (
    <div className="w-full p-3">
      <h1 className="mb-1 input-radio-label">{children}</h1>

      <div className="ms-2 flex">
        {options.map(({ value, label }) => (
          <InputRadio
            key={label}
            id={value}
            name={name}
            value={value}
            onChange={onSelect}
            checked={isChecked(value)}
          >
            {label}
          </InputRadio>
        ))}
      </div>
    </div>
  );
};

export default InputRadioListGroup;
