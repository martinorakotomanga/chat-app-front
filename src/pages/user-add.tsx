import { FunctionComponent } from "react";
import UserFormComponent from "../components/user-form";
import User from "../models/User";

const UserAdd: FunctionComponent = () => {
  const user = new User();

  return (
    <>
      <UserFormComponent
        title="Créer un compte"
        user={user}
        isEditForm={false}
      />
    </>
  );
};

export default UserAdd;
