import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const linkClasses = ({ isActive }) =>
  clsx(s.link, { [s.activeLink]: isActive });

const AuthNav = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink to="/login" className={linkClasses}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={linkClasses}>
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
