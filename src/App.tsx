import { JSX, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import { DNA } from "react-loader-spinner"; // Import the loader
import "./App.css";

// Lazy Load Components
const SignUp = lazy(() => import("./pages/users/SignUp"));
const Dashboard = lazy(() => import("./pages/users/Dashboard.tsx"));
const User = lazy(() => import("./pages/users/User"));
const AddUser = lazy(() => import("./pages/users/AddUser"));
const EditUser = lazy(() => import("./pages/users/EditUser"));

// Authentication Check Function
const isAuthenticated = () => !!localStorage.getItem("token");

// Higher-Order Component for Protected Routes
const ProtectedRoute = ({ element }: { element: JSX.Element }) =>
  isAuthenticated() ? element : <Navigate to="/login" replace />;

// DNA Loader Component
const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height
    }}
  >
    <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" />
  </div>
);

// Suspense Wrapper with DNA Loader
const LazyWrapper = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/login",
    element: isAuthenticated() ? (
      <Navigate to="/dashboard" replace />
    ) : (
      LazyWrapper(SignUp)
    ),
  },
  {
    path: "/",
    element: (
      <Navigate to={isAuthenticated() ? "/dashboard" : "/login"} replace />
    ),
  },
  {
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <ProtectedRoute element={LazyWrapper(Dashboard)} />,
      },
      { path: "user", element: <ProtectedRoute element={LazyWrapper(User)} /> },
      {
        path: "add-user",
        element: <ProtectedRoute element={LazyWrapper(AddUser)} />,
      },
      {
        path: "edit-user",
        element: <ProtectedRoute element={LazyWrapper(EditUser)} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
