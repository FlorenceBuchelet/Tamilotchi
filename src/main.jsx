import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import EggChoice from "./pages/EggChoice/EggChoice.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import { TamaProvider } from "./contexts/tamaContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/egg",
    element: <EggChoice />,
  },
  {
    path: "/homepage",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TamaProvider>
        <RouterProvider router={router} />
      </TamaProvider>
    </AuthProvider>
  </React.StrictMode>
);
