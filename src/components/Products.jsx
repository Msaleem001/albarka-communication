import { useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const sampleProducts = [
    {
        image: "https://i.imgur.com/ZXBtVw7.jpg",
        title: "Chic Women's Sandal (Sturdy Sole)",
        price: 25000,
        rating: 4,
        reviews: 3875,
        stock: 30,
    },
    {
        image: "https://i.imgur.com/n9z3sLg.jpg",
        title: "Women’s Classy Half Shoes",
        price: 28000,
        rating: 4,
        reviews: 4056,
        stock: 25,
    },
    {
        image: "https://i.imgur.com/V2RW5DZ.jpg",
        title: "Elegant Women's Handbag",
        price: 40000,
        rating: 4,
        reviews: 4127,
        stock: 35,
    },
    {
        image: "https://i.imgur.com/FHSM2uv.jpg",
        title: "14-Inch 4×4 Closure Bob Wig",
        price: 57000,
        rating: 4,
        reviews: 3981,
        stock: 30,
    },
]


export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = sampleProducts.filter((product) =>
        (product.title + product.description)
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="px-4 py-16 bg-gray-200 min-h-screen">
            <h2 className="text-3xl font-bold text-center text-green-500 mb-4 underline">Latest Products</h2>

            <div className="max-w-md mx-auto mb-10 px-2">
                <input
                    type="text"
                    placeholder="Search for a product..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
            </div>

            {filteredProducts.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-2">
                        {filteredProducts.map((product, idx) => (
                            <ProductCard key={idx} product={product} />
                        ))}
                    </div>
                    <div className="flex justify-center items-center my-6">
                        <Link to={'/products'}>
                            <button className="bg-green-600 py-2 px-6 rounded-md text-white">View All Stock</button>
                        </Link>
                    </div>
                </>
            ) : (
                <p className="text-center text-gray-500">No products match your search.</p>
            )}
        </div>
    );
}
