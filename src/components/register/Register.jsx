import React, { useState } from "react";
import RegisterIcon from "../../assets/images/register-pana.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { userName, email, password, confirmPassword } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //validar password y campos vacios
  };
  return (
    <div className="login_container">
      <img src={RegisterIcon} alt="img welcome" className="img_login" />
      <div className="login_content">
        <h1 className="title_login">Register to AeroTec</h1>
        <form className="form_container" onSubmit={onSubmit}>
          <label className="label_login" htmlFor="userName">
            Name
          </label>
          <input
            type="textl"
            id="userName"
            name="userName"
            value={userName}
            className="input_login"
            onChange={onChange}
          />

          <label className="label_login" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="input_login"
            onChange={onChange}
          />

          <label className="label_login" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="input_login"
            placeholder="+6 characters"
            onChange={onChange}
          />
          <label className="label_login" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            className="input_login"
            onChange={onChange}
          />

          <input type="submit" className="button_login" value="Sign up" />
        </form>

        <span className="span_login">
          Already a member?{" "}
          <Link to="/login">
            <strong>Sign in now</strong>
          </Link>
        </span>
        <span className="span_login">
          <Link to="/">
            <strong>Go to products</strong>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Register;
