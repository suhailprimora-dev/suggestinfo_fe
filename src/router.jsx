import { useState, useEffect, createContext, useContext } from 'react';

const RouterContext = createContext(null);

const BASE_PATH = '/demo';

function getPath() {
  const path = window.location.pathname;
  if (path.startsWith(BASE_PATH)) {
    const stripped = path.slice(BASE_PATH.length);
    return stripped === '' ? '/' : stripped;
  }
  return path;
}

export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getPath());
    };

    // Listen to browser back/forward navigation
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (to) => {
    const fullPath = BASE_PATH + (to === '/' ? '' : to);
    if (window.location.pathname !== fullPath) {
      window.history.pushState({}, '', fullPath);
      setCurrentPath(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Route({ path, component: Component }) {
  const { currentPath } = useContext(RouterContext);
  return currentPath === path ? <Component /> : null;
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a <Router> provider');
  }
  return context;
}
