import Login from "./pages/login/login";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import UserAdd from "./pages/user-add";
import UserEdit from "./pages/user-edit";
import ErrorPage from "./pages/error-page";

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
