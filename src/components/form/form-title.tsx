import { FunctionComponent } from "react";

type Props = {
  children: string;
};

const FormTitle: FunctionComponent<Props> = ({ children }) => {
  return <h1 className="text-2xl mb-3 lg:mb-5">{children}</h1>;
};

export default FormTitle;
