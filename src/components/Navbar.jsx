import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, useNavigate } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 640 });

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <div className="bg-primary">
      <nav className="h-fit py-5 flex justify-center">
        <div className="w-11/12 flex flex-row justify-between items-center">
          <div className="flex justify-center items-center gap-3 sm:gap-20 text-white text-base">
            <NavLink to="/dashboard">
              {isMobile ? (
                <img
                  id="nav-logo"
                  src="/logos/Logo Chill No Text.png"
                  alt=""
                  className="h-8"
                />
              ) : (
                <img
                  id="nav-logo"
                  src="/logos/Logo Chill.png"
                  alt=""
                  className="h-8"
                />
              )}
            </NavLink>
            <NavLink to="/#">Series</NavLink>
            <NavLink to="/#">Film</NavLink>
            <NavLink to="/#">Daftar Saya</NavLink>
          </div>
          <div className="relative">
            <button
              id="profileButton"
              className="flex items-center gap-1 focus:outline-no cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src="/avatar.jpg" alt="" className="w-8 rounded-full" />
              <Icon
                icon="mdi:keyboard-arrow-down"
                width="24"
                height="24"
                className=" text-white"
              />
            </button>
            <div
              id="profileDropdown"
              className={`absolute right-0 mt-2 w-40 text-white bg-primary border border-secondary rounded-md shadow-lg transition-all duration-300 z-50 
                ${isOpen ? "opacity-100 visible " : "opacity-0 invisible "}`}
            >
              <ul className="p-1">
                <li>
                  <NavLink
                    to="/profile"
                    className=" flex gap-2 px-4 py-2 text-sm hover:text-button focus:text-button"
                  >
                    <Icon icon="ooui:user-avatar" width="18" height="18" />
                    Profil Saya
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#"
                    className=" flex gap-2 px-4 py-2 text-sm hover:text-button focus:text-button"
                  >
                    <Icon icon="mdi:account-cog" width="18" height="18" />
                    Ubah Premium
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className=" flex gap-2 px-4 py-2 text-sm hover:text-button focus:text-button"
                  >
                    <Icon icon="ci:exit" width="18" height="18" />
                    Keluar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
