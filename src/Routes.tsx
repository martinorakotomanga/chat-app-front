import { FunctionComponent } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import UserAdd from "./pages/user-add";
import Guard from "./Guard";
import ErrorPage from "./pages/error-page";
import UserEdit from "./pages/user-edit";
import Menu from "./pages/menu";

const RoutesComponent: FunctionComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "user/add",
          element: <UserAdd />,
        },
        {
          element: <Guard />,
          children: [
            {
              path: "chat",
              element: <Chat />,
            },
            {
              path: "menu",
              element: <Menu />,
            },
            {
              path: "user/edit",
              element: <UserEdit />,
            },
            {},
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RoutesComponent;
