import React, { useState } from "react";
import Welcome from "../../assets/images/welcome.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //validar
  };
  return (
    <div className="login_container">
      <img src={Welcome} alt="img welcome" className="img_login" />
      <div className="login_content">
        <h1 className="title_login">Sign in to AeroTec</h1>
        <form className="form_container" onSubmit={onSubmit}>
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
            onChange={onChange}
          />

          <input type="submit" className="button_login" value="Sign in" />
        </form>
        <span className="span_login">
          ¿Not a member?{" "}
          <Link to="/register">
            <strong>Sign up now</strong>
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
export default Login;
