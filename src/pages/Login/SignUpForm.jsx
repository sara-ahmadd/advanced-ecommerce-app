import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";
import { signUpFunction } from "../../firebase/functions/signUp";
import { auth } from "../../firebase/firebase";

const SignUpForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const { email, password } = form;
    e.preventDefault();
    dispatch(userActions.register(form));
    console.log(user);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    signUpFunction(email, password);
  };
  const { firstName, lastName, email, password, confirmPassword } = form;
  return (
    <form
      className="my-2 mx-auto"
      style={{ width: "50%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (firstName && lastName && email && password && confirmPassword) {
          handleSubmit(e);
        }
      }}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputFirstName1" className="form-label">
          First Name
        </label>
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => handleInputValue(e)}
          type="text"
          className="form-control"
          id="exampleInputFirstName1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputLastName1" className="form-label">
          Last Name
        </label>
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => handleInputValue(e)}
          type="text"
          className="form-control"
          id="exampleInputLastName1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          value={email}
          name="email"
          onChange={(e) => handleInputValue(e)}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          value={password}
          name="password"
          onChange={(e) => handleInputValue(e)}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputConfirmPassword1" className="form-label">
          Confirm Password
        </label>
        <input
          value={confirmPassword}
          name="confirmPassword"
          onChange={(e) => handleInputValue(e)}
          type="password"
          className="form-control"
          id="exampleInputConfirmPassword1"
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary submit-btn"
        value={" Sign Up"}
      />
    </form>
  );
};

export default SignUpForm;
