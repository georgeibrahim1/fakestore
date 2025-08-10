
export default function ProductCard({ product , setProducts}) {

    function handleItemsCount() {
        setProducts((products) => {
            return products.map((obj) => {
                if(obj.id === product.id) {
                    return { ...obj, cartItems: obj.cartItems + 1 };
                }
                return obj;
            })
        }) 
    }


    return (
        <li className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-xl transition-shadow w-64 h-100">
            <img className="w-32 h-32 object-contain" src={product.image} alt=""></img>
            <p className="font-semibold">{product.title}</p>
            <p className="text-green-600 font-bold">$ {product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="ttext-xs text-gray-400 text-center line-clamp-2 px-5">{product.description}</p>
            <button className="px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors" onClick={handleItemsCount}>Add to Cart</button>
            <button className="px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors">View Details</button>
        </li>
    );
}