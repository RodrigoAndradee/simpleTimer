import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useRoute } from "./hooks/useRoute";
import { LayoutApp } from "./LayoutApp/LayoutApp";

export const AppRouter = () => {
  const { routes } = useRoute();

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.url}
            path={route.url}
            element={<LayoutApp>{route.Component}</LayoutApp>}
          />
        ))}
      </Routes>
    </Router>
  );
};
