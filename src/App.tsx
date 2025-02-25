import { JSX, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/Layout";
import { DNA } from "react-loader-spinner";
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

const LazyWrapper = ({
  Component,
}: {
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
}) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated() ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LazyWrapper Component={SignUp} />
            )
          }
        />
        <Route
          path="/"
          element={
            <Navigate
              to={isAuthenticated() ? "/dashboard" : "/login"}
              replace
            />
          }
        />

        <Route element={<Layout />}>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute element={<LazyWrapper Component={Dashboard} />} />
            }
          />
          <Route
            path="user"
            element={
              <ProtectedRoute element={<LazyWrapper Component={User} />} />
            }
          />
          <Route
            path="add-user"
            element={
              <ProtectedRoute element={<LazyWrapper Component={AddUser} />} />
            }
          />
          <Route
            path="edit-user"
            element={
              <ProtectedRoute element={<LazyWrapper Component={EditUser} />} />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
