import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-black shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="ZeyoCart Logo" className="h-10 w-auto" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6 text-white">
                    <Link to="/" className="hover:text-green-500 font-medium">Home</Link>
                    <Link to="/products" className="hover:text-green-500 font-medium">Products</Link>
                    <Link to="/contact" className="hover:text-green-500 font-medium">Contact</Link>
                    <Link to="/login" className="hover:text-green-500 font-medium">Staff Login</Link>
                </div>

                {/* Mobile toggle */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-4 pb-4 text-green-500">
                    <Link to="/" className="block py-2 hover:text-green-500">Home</Link>
                    <Link to="/products" className="block py-2 hover:text-green-500">Products</Link>
                    <Link to="/cart" className="block py-2 hover:text-green-500 flex items-center gap-1">
                        <FiShoppingCart size={18} />
                        Cart
                    </Link>
                </div>
            )}
        </nav>
    );
}
