import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="bg-green-500 hover:bg-green-800 text-white fixed w-full top-0 flex justify-between">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-black hover:text-white' : 'hover:text-white'
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          isActive ? 'text-black hover:text-white' : 'hover:text-white'
        }
      >
        Create Recipe
      </NavLink>
      <NavLink
        to="/saved-recipes"
        className={({ isActive }) =>
          isActive ? 'text-black hover:text-white' : 'hover:text-white'
        }
      >
        Saved Recipes
      </NavLink>
      {!cookies.access_token ? (
        <NavLink className=" hover:text-white" to="/auth">Login/Register</NavLink>
      ) : (
        <button className="text-1xl px-4 bg-green-900 hover:bg-red-700 text-white font-semibold rounded" onClick={logout}> Logout </button>
      )}
    </div>
  );
};
