import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import FormContainer from "../components/FormContainer";
import { createAccount } from "../app/reducers/userReducer";

const Signup = () => {
  const users = useSelector((state) => state.user.users);

  // console.log("users state => ", users);

  const [username, setUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPswd, setNewPswd] = useState("");

  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    name === "username"
      ? setUsername(value)
      : name === "email"
      ? setNewEmail(value)
      : setNewPswd(value);
  };

  const handleClickSignup = () => {
    const exists = users.find((el) => el.email === newEmail);
    // console.log("signup button clicked => ", exists);

    exists
      ? setAlert("This email is already used")
      : dispatch(createAccount({ id: uuidv4(), username, newEmail, newPswd }));
  };

  return (
    <div className="form-container sign-up-container">
      <FormContainer
        title="Create Account"
        orUse="email for registration"
        button="Sign Up"
        username={username}
        newEmail={newEmail}
        newPswd={newPswd}
        alert={alert}
        handleClickSignup={handleClickSignup}
        handleChangeSignUp={handleChangeSignUp}
      />
    </div>
  );
};

export default Signup;
