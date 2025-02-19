import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex ring-1 z-40 bg-zinc-900 text-slate-300 ring-zinc-200 shadow-md px-10 md:px-20  items-center justify-between py-5 font-medium">
      <Link to="/">
        <span className="text-2xl">Schuh</span>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-400 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-400 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-400 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-400 hidden" />
        </NavLink>

        <FiSearch
          className="md:ml-6 cursor-pointer"
          size={25}
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
        />
        <CgProfile
          className="cursor-pointer"
          size={25}
          onClick={() => (token ? null : navigate("/login"))}
        />

        {/* Dropdown Menu */}
        {token && (
          <div className="group-hover:block z-40 hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p
                onClick={() => navigate("/orders")}
                className="cursor-pointer hover:text-black"
              >
                Orders
              </p>
              <p onClick={logout} className="cursor-pointer hover:text-black">
                Logout
              </p>
            </div>
          </div>
        )}
        <Link to="/cart" className="relative">
          {/* <img src={assets.cart_icon} className="w-5 min-w-5" alt="" /> */}
          <LuShoppingBag size={25} />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-slate-800 aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
      </ul>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute z-40 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex z-40 flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex z-40 items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
