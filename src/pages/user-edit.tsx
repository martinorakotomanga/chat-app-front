import { FunctionComponent } from "react";
import User from "../models/User";
import UserFormComponent from "../components/user-form";

const UserEdit: FunctionComponent = () => {
  const user = new User(
    "lksdjffasdf",
    "RAKOTOMANGA",
    "Martino Dora",
    "2003-30-06",
    "HOMME",
    "+2611913131",
    "Martino@3.0"
  );

  return (
    <>
      <UserFormComponent
        title="Editer votre compte"
        user={user}
        isEditForm={true}
      />
    </>
  );
};

export default UserEdit;
