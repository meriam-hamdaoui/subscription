import React from "react";
import FormContainer from "../components/FormContainer";

const Signin = () => {
  return (
    <div className="form-container sign-in-container">
      <FormContainer title="Sign in" orUse="account" button="Sign In" />
    </div>
  );
};

export default Signin;
