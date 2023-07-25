import React from "react";
import FormContainer from "../components/FormContainer";

const Signup = () => {
  return (
    <div className="form-container sign-up-container">
      <FormContainer
        title="Create Account"
        orUse="email for registration"
        button="Sign Up"
      />
    </div>
  );
};

export default Signup;
