import React from "react";
import Welcome from "../../assets/images/welcome.svg";
const Login = () => {
  return (
    <div className="login_container">
      <img src={Welcome} alt="img welcome" className="img_login" />
      <div className="login_content">
        <h1 className="title_login">Sign in to AeroTec</h1>
        <form className="form_container">
          <label className="label_login">User</label>
          <input type="text" className="input_login" />
          <label className="label_login">Password</label>
          <input type="password" className="input_login" />
          <button className="button_login">Sign in</button>
        </form>
        <span className="span_login">
          ¿Not a member? <strong>Sign up now</strong>
        </span>
      </div>
    </div>
  );
};
export default Login;
