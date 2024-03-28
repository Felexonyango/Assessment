import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isTrackingMenuOpen, setIsTrackingMenuOpen] = useState(false);

  const toggleTrackingMenu = () => {
    setIsTrackingMenuOpen(!isTrackingMenuOpen);
  };

  const menuItems = [
    { label: "Dashboard", to: "/" },
    { label: "Modal", to: "/modal" },
    { label: "Tracking", 
      subMenu: [
        { label: "Track 1", to: "/track1" },
        { label: "Track 2", to: "/track2" },
        { label: "Track 3", to: "/track3" }
      ]
    },
    { label: "Analytics", to: "/analytics" },
  ];

  return (
    <nav className="bg-blue-950 py-2 px-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-sm ml-4">LOGO</div>
        <button
          onClick={toggleTrackingMenu}
          className="block md:hidden text-white px-2 py-1 rounded focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
            />
          </svg>
        </button>
        <div className="hidden md:flex md:space-x-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.label === "Tracking" ? (
                <div className="relative">
                  <span className="text-white px-2 py-1 rounded cursor-pointer" onClick={toggleTrackingMenu}>
                    {item.label} <i className={`fa fa-caret-down ${isTrackingMenuOpen ? 'transform rotate-180' : ''}`} aria-hidden="true"></i>
                  </span>
                  {isTrackingMenuOpen && (
                    <div className="absolute bg-white text-gray-800 mt-2 w-48 p-2 rounded shadow-lg">
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link key={subIndex} to={subItem.to} className="text-gray-600 block px-4 py-2 rounded">
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.to} className="text-white px-2 py-1 rounded">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
