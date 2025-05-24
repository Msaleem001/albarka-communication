const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-black font-semibold text-base truncate mb-1">
                    {product.title}
                </h2>
                <p className="text-lg font-bold text-black mb-2">₦{product.price.toLocaleString()}</p>

                <div className="flex justify-between items-center">
                    <button className="p-2 rounded-lg bg-green-500 hover:bg-green-700 text-white">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;