
export default function ProductCard({ product , setProducts}) {


    function handleItemsCount(id) {
        setProducts((products) => {
            product.map((obj) => {
                if(obj.id === id) {
                    obj.cartItems++;
                }
                return obj;
            })
        }) 
    }


    return (
        <li id={product.id}>
            <img src={product.image} alt=""></img>
            <p>{product.title}</p>
            <p>$ {product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <button onClick={() => {handleItemsCount(product.id)}}>Add to Cart</button>
            <button>View Details</button>
        </li>
    );
}