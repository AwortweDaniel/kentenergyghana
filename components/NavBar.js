import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#011c40] text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/"><img src="/logo.png" alt="Kent Energy" className="h-10" /></Link>
          <span className="font-bold text-lg hidden sm:inline">Kent Energy</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="bg-[#f5b400] text-black px-4 py-2 rounded hover:bg-yellow-500">
            Request Quote
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 px-4">
          <li><Link href="/" className="block py-2">Home</Link></li>
          <li><Link href="/about" className="block py-2">About</Link></li>
          <li><Link href="/services" className="block py-2">Services</Link></li>
          <li><Link href="/contact" className="block py-2">Contact</Link></li>
          <li>
            <Link
              href="/contact"
              className="block py-2 bg-[#f5b400] text-black text-center rounded hover:bg-yellow-500"
            >
              Request Quote
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
