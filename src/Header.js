import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <h1 className="text-4xl font-bold">PoolTogether</h1>
      <nav className="mt-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link className="hover:underline" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/signin">Sign In</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
