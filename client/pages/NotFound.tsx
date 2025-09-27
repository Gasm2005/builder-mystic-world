import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70dvh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-3 neon-text">404</h1>
        <p className="text-white/70 mb-6">Oops! Page not found</p>
        <a href="/" className="btn-neon">
          <span className="inner">Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
