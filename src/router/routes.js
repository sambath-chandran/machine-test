import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const AppRoutes = [
  {
    path: "/login",
    isProtected: false,
    isAuthProtected: true,
    element: <Login />,
  },
  {
    path: "/",
    isProtected: true,
    element: <Dashboard />,
  },
];
export default AppRoutes;
