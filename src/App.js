import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CustomerSupport from "./pages/CustomerSupport";
import UserManagement from "./pages/UserManagement";
import Layout from "./components/Layout";
import NotFound from "./pages/404";
import { Suspense } from "react";
import { AuthContext, AuthProvider } from "./authentication/AuthContext";
import { useContext } from "react";
import Login from "./pages/Login";
import ProtectedRoutes from "./authentication/ProtectedRoute";
import AccessDenied from "./pages/AccessDenied";
import Tickets from "./pages/Tickets";

const PrivateRoutes = ({ children, ...rest }) => {
  let auth;
  const navigate = useNavigate();

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
    <Suspense fallback={"..loading"}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path={"/login"} exact />
            <Route element={<PrivateRoutes />}>
              <Route element={<Dashboard />} path="/" exact />
              <Route
                element={<UserManagement />}
                exact
                path="/user-management"
              />
              <Route
                element={<CustomerSupport />}
                path="/customer-support"
                exact
              />
              <Route element={<Tickets />} path="/tickets" exact />
            </Route>
            <Route element={<NotFound />} path={"*"} exact />
            <Route element={<AccessDenied />} path={"./access-denied"} exact />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
