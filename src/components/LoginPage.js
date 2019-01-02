import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import "../styles/style.css";
//import bck from '../../public/images/background.jpg';

export const LoginPage = ({ startLogin }) => (
  <div className="login_container">
    <div className="login_wrapper">
      <h1>Budget App</h1>
      <h4>It's time to get your expenses under control.</h4>
      <button className="login_button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
