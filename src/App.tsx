import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import SignUp from "./pages/SignUp.tsx";
import Layout from "./pages/Layout";
import User from "./pages/users/User";
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";
import Dashboard from "./pages/users/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: "user",
        element: <User />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
      {
        path: "edit-user",
        element: <EditUser />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
