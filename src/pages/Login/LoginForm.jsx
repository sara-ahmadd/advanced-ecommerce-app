import React, { useState } from "react";
// import { auth } from "../firebase/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    firstName: "",
    loginEmail: "",
    loginPassword: "",
  });
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });
  const dispatch = useDispatch();

  const handleInputValue = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginSubmit = (e) => {
    // const { loginEmail, loginPassword } = loginForm;
    e.preventDefault();
    dispatch(userActions.login(loginForm));
    console.log(user);
    setLoginForm({
      firstName: "",
      loginEmail: "",
      loginPassword: "",
    });
    // signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    //   .then((userCredintial) => {
    // console.log(`User Logged In : `, userCredintial.user);
    // setLoginForm({
    //   loginEmail: "",
    //   loginPassword: "",
    // });
    //   })
    //   .catch((err) => console.log(err.message));
  };
  //   const subscribe = () => {
  //     const unsub = onAuthStateChanged(auth, (user) => {
  //       console.log(`user state is changed : `, user);
  //     });
  //     return unsub();
  //   };
  //

  const { loginEmail, loginPassword, firstName } = loginForm;

  return (
    <div>
      <form
        className="my-2 mx-auto"
        style={{ width: "50%" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (loginEmail && loginPassword && firstName) {
            handleLoginSubmit(e);
          }
        }}
      >
        <div className="my-4 text-center">
          <h1>Logging In</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputUserName`" className="form-label">
              User Name
            </label>
            <input
              value={firstName}
              name="firstName"
              onChange={(e) => handleInputValue(e)}
              type="text"
              className="form-control"
              id="exampleInputUserName`"
              aria-describedby="user-name"
            />
            <label htmlFor="exampleInputEmail1`" className="form-label">
              Email address
            </label>
            <input
              value={loginEmail}
              name="loginEmail"
              onChange={(e) => handleInputValue(e)}
              type="email"
              className="form-control"
              id="exampleInputEmail1`"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1`" className="form-label">
              Password
            </label>
            <input
              value={loginPassword}
              name="loginPassword"
              onChange={(e) => handleInputValue(e)}
              type="password"
              className="form-control"
              id="exampleInputPassword1`"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
        {/* <div className="my-4">
          <h1>Logging Out</h1>
          <button type="submit" className="btn btn-primary">
            Log out
          </button>
        </div> */}
      </form>
    </div>
  );
}

export default LoginForm;
