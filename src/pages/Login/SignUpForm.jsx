import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import "./_form.scss";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, usersCollectionRef } from "../../firebase/firebase";
import Loader from "../../components/GeneralComponents/Loader";
import { addDoc } from "firebase/firestore";

const SignUpForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loader, setLoader] = useState(false);

  const handleInputValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const { email, password, firstName, lastName } = form;
    e.preventDefault();

    setLoader(true);

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredintial) => {
          toast.success("You Signed Up Successfully!");
          setLoader(false);

          dispatch(userActions.register(form));
          //add each new user to users collection
          addDoc(usersCollectionRef, {
            firstName,
            lastName,
            email,
            cart: [],
          }).then((res) => console.log(res));
          navigate("/login");
        })
        .catch((err) => {
          toast.error(`${err.message}`);
          console.log(err.message);
        });
    }
  };
  const { firstName, lastName, email, password, confirmPassword } = form;
  return (
    <>
      {loader && <Loader />}
      <section>
        <form
          className="my-3 mx-auto shadow p-5 bg-body-tertiary rounded"
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
            <label
              htmlFor="exampleInputConfirmPassword1"
              className="form-label"
            >
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
            <p
              id="failure"
              style={
                password === confirmPassword
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Confirmation doesnot match the password!
            </p>
            <p
              id="success"
              style={
                password === confirmPassword && confirmPassword !== ""
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              Confirmation matches the password.
            </p>
          </div>
          <input
            type="submit"
            className="btn btn-primary submit-btn"
            value={" Sign Up"}
          />
          <div className="d-flex gap-2 mt-2">
            <p>Already have an account?</p>
            <Link to="/login" className="fw-bold">
              Log In
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignUpForm;
