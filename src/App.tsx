import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import AgencyInfo from "./pages/service/AgencyInfo";
import Requests from "./pages/service/Requests";
import Registration from "./pages/service/Registration";
import Proposals from "./pages/service/Proposals";
import CommonSense from "./pages/common-sense/CommonSense";
import Signup from "./pages/auth/Signup";
import AuthMain from "./pages/auth/main/AuthMain";
import Login from "./pages/auth/Login";
import AdminUserManagement from "./pages/admin/AdminUserManagement";
import UserManagement from "./pages/admin/UserManagement";
import SenseDetail from "./pages/common-sense/sense-detail/SenseDetail";
import SenseRegister from "./pages/common-sense/register/SenseRegister";

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
            path: "admin-user-management",
            element: <AdminUserManagement />,
          },
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
          { path: ":senseId", element: <SenseDetail></SenseDetail> },
          { path: "register", element: <SenseRegister></SenseRegister> },
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
      {
        path: "login",
        element: <Login />,
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
