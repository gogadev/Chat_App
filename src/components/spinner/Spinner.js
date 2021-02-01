import React from "react";

import spinner from "../../assets/gif.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Spinner" />
    </div>
  );
};

export default Spinner;
