import Login from "./pages/login/login";
import { RouterProvider, createBrowserRouter } from "react-router";
import UserAdd from "./pages/user-add";
import UserEdit from "./pages/user-edit";
import ErrorPage from "./pages/error-page";
import Chat from "./pages/chat/chat";
import Menu from "./pages/menu";
import "./App.css";

function App() {
  const _router = createBrowserRouter([
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
          path: "user/edit",
          element: <UserEdit />,
        },
        {
          path: "menu",
          element: <Menu />,
          children: [
            {
              path: "messages",
              element: <Chat />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col">
      <RouterProvider router={_router} />
    </div>
  );
}

export default App;
