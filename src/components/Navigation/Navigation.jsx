import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const linkClasses = ({ isActive }) =>
    clsx(s.link, { [s.activeLink]: isActive });

  return (
    <nav className={s.navig}>
      <ul className={s.list}>
        <li>
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={linkClasses}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
