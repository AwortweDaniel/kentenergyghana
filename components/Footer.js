import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kent Energy Ghana</h3>
          <p className="text-sm">
            Powered by local expertise. Built for Africa’s energy future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Newsletter Form */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="text-sm mb-3">Get updates and insights straight to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm text-gray-800 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-sm py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Kent Energy Ghana. All rights reserved.
      </div>
    </footer>
  );
}
