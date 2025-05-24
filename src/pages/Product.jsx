import { useState } from "react";
import SidebarFilters from "../components/SidebarFilters";
import ProductCard from "../components/ProductCard";

const allProducts = [
  {
    id: 1,
    title: "Stylish Sunglasses",
    description: "UV protective and trendy.",
    price: 29.99,
    rating: 4,
    category: "Fashion",
    image: "https://picsum.photos/seed/sunglasses/400/300",
  },
  {
    id: 2,
    title: "Bluetooth Headphones",
    description: "Great sound, wireless freedom.",
    price: 59.99,
    rating: 5,
    category: "Electronics",
    image: "https://picsum.photos/seed/headphones/400/300",
  },
  {
    id: 3,
    title: "Elegant Watch",
    description: "Modern and classic design.",
    price: 89.99,
    rating: 4,
    category: "Accessories",
    image: "https://picsum.photos/seed/watch/400/300",
  },
  // add more as needed
];

export default function Products() {
  const [filters, setFilters] = useState({ category: "All", rating: 0 });

  const filteredProducts = allProducts.filter((p) => {
    const matchCategory =
      filters.category === "All" || p.category === filters.category;
    const matchRating = filters.rating === 0 || p.rating >= filters.rating;
    return matchCategory && matchRating;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <SidebarFilters filters={filters} setFilters={setFilters} />

      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-6 text-green-600">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
