import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { ROUTES } from './utils/constants';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Scroll to top component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Route configuration for cleaner organisation
const routeConfig = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.SERVICES, element: <Services /> },
  { path: ROUTES.WORK, element: <Work /> },
  { path: ROUTES.CONTACT, element: <Contact /> },
  { path: '*', element: <NotFound /> },
];

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            {routeConfig.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
