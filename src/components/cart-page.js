import CartCard from "./cart-card.js";

export default function CartList({ products, setProducts }) {
    return (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-lg rounded-xl border border-gray-200 z-50 p-4 max-h-[400px] overflow-y-auto overflow-hidden max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:right-auto">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
                <h2 className="text-lg font-semibold">Your Cart</h2>
            </div>

            {products.filter(p => p.cartItems > 0).length > 0 ? (
                products
                    .filter(product => product.cartItems > 0)
                    .map(product => (
                        <CartCard
                            product={product}
                            setProducts={setProducts}
                        />
                    ))
            ) : (
                <p className="text-gray-500 text-center">Your cart is empty</p>
            )}
        </div>
    );
}
