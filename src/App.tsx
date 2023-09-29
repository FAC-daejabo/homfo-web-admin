import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import AgencyInfo from "./pages/service/AgencyInfo";
import Requests from "./pages/service/Requests";
import Registration from "./pages/service/Registration";
import Proposals from "./pages/service/Proposals";
import UserManagement from "./pages/admin/UserManagement";
import CommonSense from "./pages/common-sense/CommonSense";
import Signup from "./pages/auth/Signup";
import AuthMain from "./pages/auth/main/AuthMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "service",
        children: [
          { path: "agency-info", element: <AgencyInfo /> },
          {
            path: "requests",
            element: <Requests />,
          },
          {
            path: "registration",
            element: <Registration />,
          },
          {
            path: "proposals",
            element: <Proposals />,
          },
        ],
      },
      {
        path: "admin",
        children: [
          {
            path: "user-management",
            element: <UserManagement />,
          },
        ],
      },
      {
        path: "common-sense",
        children: [
          {
            index: true,
            element: <CommonSense />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthMain />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>
  );
}

export default App;
