import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='section section-error'>
      <h2 className="error">OOPS! The page you're looking for doesn't exist</h2>
      <Link to='/' className='btn shadow'>
        Go to home
      </Link>
    </div>
  );
};

export default Error;
