
export default function CartCard({ product, setProducts }) {
    const handleRemove = () => {
        setProducts(prev =>
            prev.filter(p => p.id !== product.id)
        );
    };

    const handleAddItem = () => {
        setProducts(prev =>
            prev.map(p =>
                p.id === product.id
                    ? { ...p, ItemCount: p.ItemCount + 1 }
                    : p
            )
        );
    };

    const handleRemoveItem = () => {
        setProducts(prev =>
            prev
                .map(p =>
                    p.id === product.id
                        ? { ...p, ItemCount: p.ItemCount - 1 }
                        : p
                )
                .filter(p => p.ItemCount > 0)
        );
    };

    return (
        <div className="cart-card">
            <img src={product.image} alt={product.title}/>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.cartItems}</p>
                <div>
                    <button onClick={handleAddItem}>+</button>
                    <button onClick={handleRemoveItem}>-</button>
                    <button onClick={handleRemove}>Remove</button>
                </div>
            </div>
        </div>
    );
}
