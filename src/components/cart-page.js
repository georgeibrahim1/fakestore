import CartCard from "./cart-card.js";

export default function CartList({ products, setProducts }) {
    return (
        <div className="cart-list">
            {products
                .filter(product => product.ItemCount > 0)
                .map(product => (
                    <CartCard
                        key={product.id}
                        product={product}
                        setProducts={setProducts}
                    />
                ))}
        </div>
    );
}
