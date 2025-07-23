// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { authRoutes } from "./routes";
import { useEffect } from "react";
import DefaultLayout from "./layout/default";
import NotFoundPage from "./components/NotFoundPage";

// Component wrapper để set document.title
const RouteWithTitle = ({ component: Component, title }) => {
  const location = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [location.pathname, title]);

  return (
    <DefaultLayout>
      <Component />
    </DefaultLayout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {authRoutes.map(({ path, component, title }) => (
          <Route
            key={path}
            path={path}
            element={<RouteWithTitle component={component} title={title} />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
