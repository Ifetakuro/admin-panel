import { lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./authentication/AuthContext";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Tickets = lazy(() => import("./pages/Tickets"));
const UserManagement = lazy(() => import("./pages/UserManagement"));
const CustomerSupport = lazy(() => import("./pages/CustomerSupport"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NotFound = lazy(() => import("./pages/404"));
const AccessDenied = lazy(() => import("./pages/AccessDenied"));

const PrivateRoutes = () => {
  let auth;

  const _user = localStorage.getItem("user");
  if (_user) {
    auth = JSON.parse(_user).auth;
  }

  return !auth ? (
    <Navigate to="/login" replace={true} />
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path={"/login"} exact />
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/" exact />
            <Route element={<Tickets />} path="/tickets" exact />
            <Route element={<UserManagement />} exact path="/user-management" />
            <Route
              element={<CustomerSupport />}
              path="/customer-support"
              exact
            />
            <Route element={<Transaction />} path="/transactions" exact />
          </Route>
          <Route element={<AccessDenied />} path={"./access-denied"} exact />
          <Route element={<NotFound />} path={"*"} exact />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
