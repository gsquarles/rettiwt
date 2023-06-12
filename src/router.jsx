import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import { Home } from "./pages/Home";
import { SignUpForm } from "./pages/SignUpForm";
import { SignInForm } from "./pages/SignInForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/signup", element: <SignUpForm /> },
      { path: "/signin", element: <SignInForm /> },
    ],
  },
]);
