import React from "react";
import "./loader.styles.css";
const Loader = () => {
  return (
    <div className="boxes">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
