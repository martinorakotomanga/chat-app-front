import { FunctionComponent } from "react";

type Props = {
  type?: "button" | "reset" | "submit";
  size: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
  children: string;
  disabled?: boolean;
};

const Button: FunctionComponent<Props> = ({
  className = "",
  type,
  size,
  onClick,
  children,
  disabled,
}) => {
  let buttonSizeClassName;

  switch (size) {
    case "small":
      buttonSizeClassName = "btn-sm";
      break;
    case "medium":
      buttonSizeClassName = "btn";
      break;
    case "large":
      buttonSizeClassName = "btn-lg";
      break;
  }

  return (
    <button
      className={`${className} ${buttonSizeClassName}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
