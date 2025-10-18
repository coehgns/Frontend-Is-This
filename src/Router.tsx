import { createBrowserRouter } from "react-router-dom";
import { HomaPage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { AppLayout } from "./layout/AppLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomaPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
