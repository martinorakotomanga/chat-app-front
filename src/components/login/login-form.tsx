import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import FormTitle from "../form/form-title";
import InputField from "../form/input-field";
import Button from "../form/button";
import { Link, useNavigate } from "react-router";
import LoginForm from "../../typings/LoginForm";
import PhoneField from "../../models/PhoneField";
import PasswordField from "../../models/PasswordField";
import { isKeyOfObj } from "../../typings/unknown";
import UserService from "../../services/user-service";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const LoginFormComponent: FunctionComponent = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>({
    phone: new PhoneField(""),
    password: new PasswordField(""),
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newForm = { ...form };

    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (isKeyOfObj(inputName, newForm)) {
      newForm[inputName].changeValue(inputValue);
    }

    setForm(newForm);
  };

  const authorization = useAuthHeader();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { token, data } = await UserService.login(
      form.phone.value,
      form.password.value
    );

    const isSigned = signIn({
      auth: {
        token,
        type: "Bearer",
      },
      userState: data,
    });

    if (isSigned) navigate("/chat");
  };

  return (
    <form className="p-5 lg:p-10" onSubmit={handleSubmit}>
      <FormTitle>Se connecter</FormTitle>

      <InputField
        id="phone"
        name="phone"
        type="text"
        placeholder="+261 ** *** **"
        value={form.phone.value}
        error={form.phone.error}
        onChange={handleChangeInput}
      >
        Numero:
      </InputField>

      <InputField
        id="password"
        name="password"
        type="password"
        placeholder="•••••••••"
        value={form.password.value}
        error={form.password.error}
        onChange={handleChangeInput}
      >
        Mot de passe:
      </InputField>

      <div className="p-2">
        <Link to="/user/add" className="ms-2 underline">
          créer un compte ?
        </Link>

        <Button type="submit" size="medium" className="w-full m-0 mt-8">
          se connecter
        </Button>
      </div>
    </form>
  );
};

export default LoginFormComponent;
