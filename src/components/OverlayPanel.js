import React from "react";

const OverlayPanel = ({ title, description, button, handlePanel }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <button className="ghost" onClick={handlePanel}>
        {button}
      </button>
    </>
  );
};

export default OverlayPanel;
