import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./_form.scss";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check Your Inbox For The Reset Email");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section className="custom-container d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="mb-3  text-center shadow p-5 bg-body-tertiary rounded"
      >
        <h2>Reset Password</h2>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="mb-4 form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="submit"
          className="mb-4  btn submit-btn text-light"
          value="Reset Password"
        />
        <div className="my-4 d-flex w-100 justify-content-between">
          <Link to="/login">Log In</Link>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </form>
    </section>
  );
};

export default ResetPassword;
