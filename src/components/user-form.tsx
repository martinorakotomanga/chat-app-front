import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import InputField from "../components/form/input-field";
import InputRadioListGroup from "../components/form/input-radio-list-group";
import InputRadioOption from "../typings/InputRadioOption";
import Button from "../components/form/button";
import FormTitle from "../components/form/form-title";
import UserForm from "../typings/UserForm";
import NameField from "../models/NameField";
import FirstNameField from "../models/FirstNameField";
import BirthdayField from "../models/BirthdayField";
import PhoneField from "../models/PhoneField";
import PasswordField from "../models/PasswordField";
import { isGender, isKeyOfObj } from "../typings/unknown";
import User from "../models/User";
import { Link, useNavigate } from "react-router";
import UserService from "../services/user-service";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

type Props = {
  title: string;
  user: User;
  isEditForm: boolean;
};

const UserFormComponent: FunctionComponent<Props> = ({
  title,
  user,
  isEditForm,
}) => {
  const [form, setForm] = useState<UserForm>({
    name: new NameField(user.name),
    firstName: new FirstNameField(user.firstName),
    birthday: new BirthdayField(user.birthday),
    gender: user.gender,
    phone: new PhoneField(user.phone),
    password: new PasswordField(user.password),
  });

  const navigate = useNavigate();
  const isAddForm = !isEditForm;

  const handleChangeInputField = (e: ChangeEvent<HTMLInputElement>) => {
    const newForm = { ...form };

    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (isKeyOfObj(inputName, form) && inputName !== "gender") {
      newForm[inputName].changeValue(inputValue);
    }

    setForm(newForm);
  };

  const genderOptions: InputRadioOption[] = [
    {
      value: "HOMME",
      label: "Homme",
    },
    {
      value: "FEMME",
      label: "Femme",
    },
  ];

  const selectGender = (e: ChangeEvent<HTMLInputElement>) => {
    const newForm = { ...form };
    const { value } = e.target;

    if (isGender(value)) {
      newForm.gender = value;
    }

    setForm(newForm);
  };

  const validateForm = (): boolean | undefined => {
    const newForm: UserForm = { ...form };

    newForm.name.validateField();
    newForm.firstName.validateField();
    newForm.birthday.validateField();
    newForm.phone.validateField();
    newForm.password.validateField();

    const isAllFieldValid =
      newForm.name.isValid &&
      newForm.firstName.isValid &&
      newForm.birthday.isValid &&
      newForm.phone.isValid &&
      newForm.password.isValid;

    setForm(newForm);
    return isAllFieldValid;
  };

  const createUser = () => {
    UserService.createUser(user).then(() => {
      alert("Votre compte a été crée avec succès.");
      navigate("/login");
    });
  };

  const authHeader = useAuthHeader();

  const updateUser = () => {
    if (authHeader)
      UserService.updateUser(user, authHeader).then(() => {
        alert("Votre compte a été modifié avec succès.");
        navigate("/menu");
      });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      user.name = form.name.value;
      user.firstName = form.firstName.value;
      user.birthday = form.birthday.value;
      user.phone = form.phone.value;
      user.gender = form.gender;
      user.password = form.password.value;

      isAddForm ? createUser() : updateUser();
    }
  };

  return (
    <form
      className="rounded-lg md:m-10 lg:m-20 sm:p-5 lg:p-7"
      onSubmit={handleSubmit}
    >
      <FormTitle>{title}</FormTitle>

      <div className="grid lg:grid-cols-2 gap-3">
        <InputField
          id="name"
          name="name"
          type="text"
          placeholder="RAKOTOMANGA"
          value={form.name.value}
          error={form.name.error}
          onChange={handleChangeInputField}
        >
          Nom
        </InputField>

        <InputField
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Martino Dora"
          value={form.firstName.value}
          error={form.firstName.error}
          onChange={handleChangeInputField}
        >
          Prénoms
        </InputField>

        <InputField
          id="birthday"
          name="birthday"
          type="date"
          placeholder=""
          value={form.birthday.value}
          error={form.birthday.error}
          onChange={handleChangeInputField}
        >
          Date de naissance
        </InputField>

        <InputRadioListGroup
          name="gender"
          value={form.gender}
          options={genderOptions}
          onSelect={selectGender}
        >
          Genre
        </InputRadioListGroup>

        <InputField
          id="phone"
          name="phone"
          type="text"
          placeholder="+261 ** *** **"
          value={form.phone.value}
          error={form.phone.error}
          onChange={handleChangeInputField}
        >
          Tel
        </InputField>

        {isAddForm && (
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="•••••••••"
            value={form.password.value}
            error={form.password.error}
            onChange={handleChangeInputField}
          >
            Mot de passe
          </InputField>
        )}
      </div>

      <div className="w-full flex grid lg:grid-cols-2 lg:gap-4 mt-6">
        {isAddForm && (
          <Link to="/" className="lg:col-start-2 underline self-end ms-6 p-2">
            a déjà un compte ?
          </Link>
        )}

        <Button size="medium" className="lg:col-start-2">
          {isEditForm ? "Enregistrer" : "Créer"}
        </Button>
      </div>
    </form>
  );
};

export default UserFormComponent;
