import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";
import { auth, usersCollectionRef } from "../../firebase/firebase";

import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import "./_form.scss";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Loader from "../../components/GeneralComponents/Loader";
import { addDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    userName: "",
    loginEmail: "",
    loginPassword: "",
  });

  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputValue = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    let { loginEmail, loginPassword } = loginForm;
    e.preventDefault();

    setLoader(true);

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredintial) => {
        setLoader(false);
        dispatch(
          userActions.login({
            firstName: userName.split(" ")[0],
            lastName: userName.split(" ")[1],
            email: userCredintial.user.email,
            userId: userCredintial.user.uid,
          })
        );
        toast.success("You logged in successfully.");
        navigate("/");
      })
      .catch((err) => {
        setLoader(false);
        toast.error(err.message);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          userActions.login({
            firstName: user.displayName.split(" ")[0],
            lastName: user.displayName.split(" ")[1],
            email: user.email,
            userId: user.uid,
          })
        );
        //add each new user to users collection
        addDoc(usersCollectionRef, {
          firstName: user.displayName.split(" ")[0],
          lastName: user.displayName.split(" ")[1],
          email: user.email,
          userId: user.uid,
          cart: [],
        }).then((res) => console.log(res));
        toast.success("You logged in successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const { loginEmail, loginPassword, userName } = loginForm;

  return (
    <>
      {loader && <Loader />}
      <div>
        <form
          className="my-3 mx-auto shadow p-5 bg-body-tertiary rounded"
          onSubmit={(e) => {
            e.preventDefault();
            if (loginEmail && loginPassword && userName) {
              handleLoginSubmit(e);
            }
          }}
        >
          <div className="my-4 text-center">
            <h1>Log In</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputUserName`" className="form-label">
                User Name
              </label>
              <input
                value={userName}
                name="userName"
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
              <Link to="/reset" className="text-start">
                Reset your password
              </Link>
            </div>
            <input
              type="submit"
              className="btn btn-primary submit-btn"
              value={"Log In"}
            />
          </div>
          <div className="text-center mb-4">- - - or - - -</div>
          <button
            onClick={() => signInWithGoogle()}
            className="w-100 border-0 google-signUp mb-3 text-light d-flex gap-3 submit-btn p-2 justify-content-center rounded"
          >
            <i className="bg-transparent text-light">
              <BsGoogle />
            </i>
            <p className="bg-transparent">Log in with google</p>
          </button>
          <div className="goToSignUp d-flex gap-2">
            <p>Don't have an account?</p>
            <Link to="/signUp" className="fw-bold">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
