import { FunctionComponent } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Navigate, Outlet } from "react-router";
import NavBar from "./components/nav-bar";

const Guard: FunctionComponent = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  }

  return <Navigate to={"/login"} />;
};

export default Guard;
