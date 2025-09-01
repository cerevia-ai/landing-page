// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#B5D9A3]">
      <div className="flex justify-between items-center px-10 py-4">
        {/* Navigation */}
        <nav className="flex space-x-8 items-center">
          <Link
            href="#about"
            className="text-white font-bold hover:underline"
          >
            About
          </Link>
          <Link
            href="#products"
            className="text-white font-bold hover:underline"
          >
            Products
          </Link>
          <Link
            href="#papers"
            className="text-white font-bold hover:underline"
          >
            Related Papers
          </Link>
        </nav>
      </div>
    </header>
  );
}
