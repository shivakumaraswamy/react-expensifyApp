import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PublicRoute = ({
  isAutenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAutenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        
        <div> <Component {...props} />
        </div>
      )
    }
  />
);

const mapStateToProps = state => ({
  isAutenticated: !!state.auth.uid
});
export default connect(mapStateToProps)(PublicRoute);
