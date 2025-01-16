import { FunctionComponent } from "react";

type Props = {
  size: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
  children: string;
  disabled?: boolean;
};

const Button: FunctionComponent<Props> = ({
  size,
  className = "",
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
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
