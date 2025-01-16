import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/nav-bar";

const Menu: FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Menu;
