import React from "react";
import { Link } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Page not found...</p>
      <Link exact to="/" className="not-found__link">
        Back
      </Link>
    </div>
  );
}

export default PageNotFound;
