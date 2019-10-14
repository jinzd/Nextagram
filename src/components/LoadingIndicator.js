import React from "react";
import LoadingImage from "../Icons/spinner.gif";

const LoadingIndicator = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={LoadingImage} alt="loading" className="w-25" />
    </div>
  );
};

export default LoadingIndicator;
