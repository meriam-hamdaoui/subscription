import React from "react";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import "./assets/css/style.css";
import OverlayContainer from "./pages/OverlayContainer";

import { useSelector, useDispatch } from "react-redux";
import { setRightPanelActive } from "./app/reducers/panelReducer";

function App() {
  const dispatch = useDispatch();

  const isRightPanelActive = useSelector(
    (state) => state.panel.isRightPanelActive
  );

  const handleSignUpClick = () => {
    dispatch(setRightPanelActive(true));
  };

  const handleSignInClick = () => {
    dispatch(setRightPanelActive(false));
  };

  return (
    <div
      className={`container ${isRightPanelActive && "right-panel-active"}`}
      id="container"
    >
      <Signin />
      <Signup />
      <OverlayContainer
        handleSignUpClick={handleSignUpClick}
        handleSignInClick={handleSignInClick}
      />
    </div>
  );
}

export default App;
