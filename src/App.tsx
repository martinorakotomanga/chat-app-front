import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { BrowserRouter } from "react-router";
import RoutesComponent from "./Routes";
import "./App.css";

function App() {
  const store = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "https:",
  });

  return (
    <div className="w-full h-full flex flex-col">
      <AuthProvider store={store}>
        <BrowserRouter>
          <RoutesComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
