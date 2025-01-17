import PasswordField from "../models/PasswordField";
import PhoneField from "../models/PhoneField";

type LoginForm = {
  phone: PhoneField;
  password: PasswordField;
};

export default LoginForm;
