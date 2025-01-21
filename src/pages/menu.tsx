import { FunctionComponent } from "react";
import DisconnectionItem from "../components/menu/disconnection-item";
import EditProfilItem from "../components/menu/edit-profil-item";

const Menu: FunctionComponent = () => {
  return (
    <div className="p-3 md:px-10 w-full lg:w-2/3 mx-auto">
      <ul>
        <EditProfilItem />
        <DisconnectionItem />
      </ul>
    </div>
  );
};

export default Menu;
