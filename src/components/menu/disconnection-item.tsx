import { FunctionComponent, useState } from "react";
import Confirm from "../confirm";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router";

const DisconnectionItem: FunctionComponent = () => {
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleCancel = () => setIsConfirmVisible(false);

  const handleConfirm = () => {
    signOut();
    navigate("/login");
  };

  return (
    <>
      <li
        className="border rounded-lg px-6 py-3 my-3 cursor-pointer hover:bg-blue-100 hover:border-white"
        onClick={() => setIsConfirmVisible(true)}
      >
        Déconnection
      </li>

      {isConfirmVisible && (
        <Confirm onCancel={handleCancel} onConfirm={handleConfirm}>
          Vous voulez vraiment se déconnecter ?
        </Confirm>
      )}
    </>
  );
};

export default DisconnectionItem;
