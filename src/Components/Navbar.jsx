import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-center gap-8 font-semibold text-gray-700">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-purple-600 border-b-2 border-purple-600"
          : "hover:text-purple-500"
      }
    >
      Flashcards
    </NavLink>
    <NavLink
      to="/manage"
      className={({ isActive }) =>
        isActive
          ? "text-purple-600 border-b-2 border-purple-600"
          : "hover:text-purple-500"
      }
    >
      Manage Cards
    </NavLink>
  </nav>
);

export default Navbar;
