import React from "react";
import OverlayPanel from "../components/OverlayPanel.js";
import { panel } from "../data/constant";

const OverlayContainer = ({ handleSignUpClick, handleSignInClick }) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        {panel.map(
          ({ id, className, title, description, handlePanel, buttonText }) => (
            <div key={id} className={`overlay-panel ${className}`}>
              <OverlayPanel
                title={title}
                description={description}
                handlePanel={
                  buttonText === "Sign In"
                    ? handleSignInClick
                    : handleSignUpClick
                }
                button={buttonText}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OverlayContainer;
