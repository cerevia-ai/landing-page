'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full bg-white shadow-sm z-50"
      style={{ zIndex: 50 }}
    >
      <div className="flex justify-between items-center px-10 py-4 max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <div className="text-2xl font-normal text-[#1B4D3E]">
          <Link href="/" className="hover:underline transition-colors">
            Cerevia
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 items-center">
          <Link
            href="/#hero"
            className="text-[#1B4D3E] font-normal hover:underline hover:text-green-700 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="text-[#1B4D3E] font-normal hover:underline hover:text-green-700 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/#papers"
            className="text-[#1B4D3E] font-normal hover:underline hover:text-green-700 transition-colors"
          >
            Related Papers
          </Link>
          <Link
            href="/#features"
            className="text-[#1B4D3E] font-normal hover:underline hover:text-green-700 transition-colors"
          >
            Features
          </Link>
        </nav>
      </div>
    </header>
  );
}
