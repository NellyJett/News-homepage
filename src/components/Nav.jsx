import React from 'react';
import { Menuopen, MenuClose, Logo } from '../icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar w-full p-6">
      <div className="flex items-center justify-between p-4 bg-[#fff] text-black">
        <Logo className="h-8 w-auto" />

        <div className="menu-icon sm:hidden block" onClick={toggleMenu}>
          {isOpen ? <MenuClose fill="#000000" /> : <Menuopen fill="#000000" />}
        </div>

        <div className={`menu ${isOpen ? 'block' : 'hidden'} sm:flex transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col sm:flex-row">
            <li className="p-2 hover:text-[#f6a833]">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 hover:text-[#f6a833]">
              <Link to="/new">New</Link>
            </li>
            <li className="p-2 hover:text-[#f6a833]">
              <Link to="/popular">Popular</Link>
            </li>
            <li className="p-2 hover:text-[#f6a833]">
              <Link to="/trending">Trending</Link>
            </li>
            <li className="p-2 hover:text-[#f6a833]">
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
