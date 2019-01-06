import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import "../styles/style.css";

const Header = ({ startLogout }) => (
  <header>
    <div className="header_container">
      <div className="container">
        <NavLink to="/dashboard" activeClassName="is-active">
          <h2 className="dashboardLink">Expensify</h2>
        </NavLink>

        {/*<NavLink to="/edit" activeClassName="is-active">
      Edit
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
</NavLink>*/}
        <button className="logout" onClick={startLogout}>
          Log Out
        </button>
      </div>
    </div>
  <div className="container">
  <NavLink to="/create" activeClassName="is-active">
      <button className="createExpense">Create expense</button>
    </NavLink>
  </div>
    
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
