import React from "react";

const Alert = ({ title, description, error }) => {
  return (
    <div className={`alert ${error ? "error" : "success"}`}>
      <div className="alert-header">
        <h3>{title}</h3>
      </div>
      <div className="alert-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Alert;
