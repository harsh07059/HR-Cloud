import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-700">
          HR Cloud
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 pt-2 space-y-4 text-lg font-medium">
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
