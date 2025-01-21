import { FunctionComponent, useEffect, useState } from "react";
import UserFormComponent from "../components/user-form";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import UserState from "../typings/UserState";
import User from "../models/User";
import UserService from "../services/user-service";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const UserEdit: FunctionComponent = () => {
  const [user, setUser] = useState<User>();
  const authData = useAuthUser<UserState>();
  const authHeader = useAuthHeader();

  useEffect(() => {
    if (authData && authHeader)
      UserService.findUserById(authData.id, authHeader).then(({ data }) =>
        setUser(data)
      );
  }, [authData]);

  return user ? (
    <UserFormComponent
      title="Editer votre compte"
      user={user}
      isEditForm={true}
    />
  ) : (
    <h1>Aucun utilisateur à modifier !</h1>
  );
};

export default UserEdit;
