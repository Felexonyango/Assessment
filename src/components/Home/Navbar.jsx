import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [trackingDropdownVisible, setTrackingDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Dashboard', to: '/' },
    { label: 'Tracking', to: '/tracking' },
    { label: 'Analytics', to: '/analytics' }
  ];

  return (
    <nav className="bg-blue-950 py-2 px-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-sm">LOGO</div>
        <button onClick={toggleMenu} className="block md:hidden text-white px-2 py-1 rounded focus:outline-none">
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
            <div className="relative" key={index}>
              <button className="text-white px-2 py-1 rounded">
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 mt-12 w-full p-2 rounded shadow-lg">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="text-gray-600 block px-4 py-2 rounded">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </nav>
  );
}

export default Navbar;
