import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChangeSignIn = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClickSignin = () => {
    console.log("signin button clicked");
  };

  return (
    <div className="form-container sign-in-container">
      <FormContainer
        title="Sign in"
        orUse="account"
        button="Sign In"
        handleChangeSignIn={handleChangeSignIn}
        handleClickSignin={handleClickSignin}
      />
    </div>
  );
};

export default Signin;
