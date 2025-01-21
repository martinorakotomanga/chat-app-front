import { FunctionComponent } from "react";
import LoginAside from "../../components/login/login-aside";
import LoginFormComponent from "../../components/login/login-form";

const Login: FunctionComponent = () => {
  return (
    <div className="justify-self-center grid lg:grid-cols-2 gap-5 md:m-10 xl:m-20 sm:p-5 lg:p-7">
      <LoginAside />
      <LoginFormComponent />
    </div>
  );
};

export default Login;
