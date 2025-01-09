import BirthdayField from "../models/BirthdayField";
import FirstNameField from "../models/FirstNameField";
import NameField from "../models/NameField";
import PasswordField from "../models/PasswordField";
import PhoneField from "../models/PhoneField";
import Gender from "./Gender";

interface UserForm {
  name: NameField;
  firstName: FirstNameField;
  birthday: BirthdayField;
  gender: Gender;
  phone: PhoneField;
  password: PasswordField;
}

export default UserForm;
