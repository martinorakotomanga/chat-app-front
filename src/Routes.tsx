import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import UserAdd from "./pages/user-add";
import Guard from "./Guard";

const RoutesComponent: FunctionComponent = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/user/add"} element={<UserAdd />} />
      <Route element={<Guard />}>
        <Route path={"/menu/messages"} element={<Chat />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
