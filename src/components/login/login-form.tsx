import { FunctionComponent } from "react";
import FormTitle from "../form/form-title";
import InputField from "../form/input-field";
import Button from "../form/button";
import { Link } from "react-router";

const LoginForm: FunctionComponent = () => {
  return (
    <form className="p-5 lg:p-10">
      <FormTitle>Se connecter</FormTitle>

      <InputField
        id="phone"
        name="phone"
        type="text"
        placeholder="+261 ** *** **"
        value=""
        error={undefined}
        onChange={() => {}}
      >
        Numero:
      </InputField>

      <InputField
        id="password"
        name="password"
        type="password"
        placeholder="•••••••••"
        value=""
        error={undefined}
        onChange={() => {}}
      >
        Mot de passe:
      </InputField>

      <div className="p-2">
        <Link to="/user/add" className="ms-2 underline">
          créer un compte ?
        </Link>

        <Button size="medium" className="w-full m-0 mt-8">
          se connecter
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
