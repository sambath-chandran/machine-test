import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute, ProtectedAuthRoute } from "./router/Protector";
import AppRoutes from "./router/routes";

function App() {
  return (
    <Router>
      <Routes>
        {AppRoutes.map((route, index) => {
          return !route.isProtected && !route.isProtectedAuth ? (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact="true"
            />
          ) : !route.isProtected && route.isAuthProtected ? (
            <Route
              key={index}
              path={route.path}
              element={<ProtectedAuthRoute>{route.element}</ProtectedAuthRoute>}
              exact="true"
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              element={<ProtectedRoute>{route.element}</ProtectedRoute>}
              exact="true"
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
