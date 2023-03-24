import React from 'react';

// import link
import { Link } from 'react-router-dom';

// import logo
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        {/* Buttons */}
        <div className='flex items-center gap-5'>
          <Link className='hover:text-violet-800 transition' to="">Log in</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to="">Sign up</Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
