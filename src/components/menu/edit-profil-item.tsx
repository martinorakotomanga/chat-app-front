import { FunctionComponent } from "react";
import { useNavigate } from "react-router";

const EditProfilItem: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user/edit");
  };

  return (
    <li
      className="border rounded-lg px-6 py-3 my-3 cursor-pointer hover:bg-blue-100 hover:border-white"
      onClick={handleClick}
    >
      Editer mon profil
    </li>
  );
};

export default EditProfilItem;
