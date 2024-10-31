import React from 'react';
import { Menuopen, MenuClose, Logo } from '../icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar w-full p-6">
      <div className="flex items-center justify-between p-4 bg-[#fff] text-black">
        <Logo className="h-8 w-auto" />

        {/* Menu icon for small screens */}
        <div className="menu-icon sm:hidden block" onClick={toggleMenu}>
          {isOpen ? <MenuClose fill="#000000" /> : <Menuopen fill="#000000" />}
        </div>

        {/* Menu for medium and large screens */}
        <div className="hidden sm:flex sm:items-center sm:justify-end flex-grow">
          <ul className="flex flex-row space-x-4">
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

        {/* Menu for small screens */}
        <div
          className={`menu sm:hidden transition-all duration-300 ease-in-out absolute top-16 left-0 h-screen bg-[#fff] ${
            isOpen ? 'flex' : 'hidden'
          }`}
          style={{ width: '50%' }} // Set width to 50% on small screens
        >
          <ul className="flex flex-col h-full justify-start">
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
