import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">LMS</a>
        </Link>
        <nav>
          <Link href="/courses">
            <a className="mr-4 hover:underline">Courses</a>
          </Link>
          <Link href="/profile">
            <a className="hover:underline">Profile</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;