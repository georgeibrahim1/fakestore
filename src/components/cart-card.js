
export default function CartCard({ product, setProducts }) {
    const handleRemove = () => {
        setProducts(prev =>
            prev.map(p =>
                p.id === product.id
                    ? { ...p, cartItems: 0 }
                    : p
            )
        );
    };

    const handleAddItem = () => {
        setProducts(prev =>
            prev.map(p =>
                p.id === product.id
                    ? { ...p, cartItems: p.cartItems + 1 }
                    : p
            )
        );
    };

    const handleRemoveItem = () => {
        setProducts(prev =>
            prev
                .map(p =>
                    p.id === product.id
                        ? { ...p, cartItems: p.cartItems - 1 }
                        : p
                )
                .filter(p => p.cartItems >= 0)
        );
    };

    return (
        <div className="flex items-start gap-4 p-4 border-b border-gray-200">
            <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-contain rounded-md border"
            />
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-1 w-30">{product.title}</h3>
                <p className="text-xs text-gray-400">{product.category}</p>
                
                <div className="flex items-center justify-between mt-2">
                    <span className="text-blue-600 font-bold">${product.price}</span>
                    <span className="text-sm text-gray-600">Qty: {product.cartItems}</span>
                </div>

                <div className="flex gap-2 mt-2">
                    <button
                        onClick={handleAddItem}
                        className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                        +
                    </button>
                    <button
                        onClick={handleRemoveItem}
                        className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    >
                        -
                    </button>
                    <button
                        onClick={handleRemove}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
