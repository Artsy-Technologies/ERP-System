import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="h4 fw-semibold text-dark mt-3">
          Oops! Page Not Found
        </h2>
        <p className="text-muted mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-4 btn btn-primary px-4 py-2"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
