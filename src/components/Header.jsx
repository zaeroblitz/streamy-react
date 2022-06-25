import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 rounded-2xl mt-4">
      <div className="navbar-start">
        <div className="dropdown  display md:hidden">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/streams/create">Create</Link>
            </li>
            <li>
              <Link to="/streams/edit">Edit</Link>
            </li>
            <li>
              <Link to="/streams/delete">Delete</Link>
            </li>
            <li>
              <Link to="/streams/show">Show</Link>
            </li>
            <li>
              <button className="btn text-white">Sign In</button>
            </li>
          </ul>
        </div>
        <li className="btn btn-ghost normal-case text-xl">
          <Link to="/">Streamy</Link>
        </li>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal p-0 ">
          <li>
            <Link to="/streams/create">Create</Link>
          </li>
          <li>
            <Link to="/streams/edit">Edit</Link>
          </li>
          <li>
            <Link to="/streams/delete">Delete</Link>
          </li>
          <li>
            <Link to="/streams/show">Show</Link>
          </li>
          <li>
            <button className="btn text-white">Sign In</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
