import { useState } from "react";
import {
    MagnifyingGlassIcon,
    StarIcon,
    CheckCircleIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function SidebarFilters({ filters, setFilters }) {
    const [search, setSearch] = useState("");

    return (
        <aside className="w-full md:w-72 p-6 bg-white shadow-lg rounded-r-3xl border-r transition-all duration-300 min-h-screen">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-2xl font-bold text-green-600 tracking-wide">Albarka Communication</h1>
            </div>

            {/* Search */}
            <div className="mb-6 relative">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>

            {/* Category Filter */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Category</h3>
                <div className="space-y-2">
                    {["All", "Fashion", "Electronics", "Accessories"].map((cat) => {
                        const selected = filters.category === cat;
                        return (
                            <button
                                key={cat}
                                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-300 ${selected
                                    ? "bg-green-100 text-green-700 ring-2 ring-green-300 shadow-sm"
                                    : "hover:bg-green-50"
                                    }`}
                                onClick={() => setFilters({ ...filters, category: cat })}
                            >
                                {cat}
                                {selected && (
                                    <CheckCircleIcon className="w-5 h-5 text-green-500 transform scale-100 animate-pulse" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

        </aside>
    );
}
