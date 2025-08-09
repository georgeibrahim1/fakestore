import { useEffect, useState } from "react";
import ProductList from "./components/products-list"
import NavBar from "./components/navbar";

export default function App() {

  const AllProductsInfo = {
    Allcatogeries: [],
    minPriceEver: 0,
    maxPriceEver: 0,
  }

  const [products,setProducts] = useState([]);
  const [filters,setFilters] = useState({categoryArr:[] , minPrice:0 , maxPrice:0});
  const [query , setQuery] = useState("");
  const [Loading,setLoading] = useState(false);
  const [IsError,setIsError] = useState("");


  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        if(!res.ok) throw new Error("");

        for(let i = 0 ; i < data.size() ; i++) { 
          data[i].cartItems = 0; // add a new key
          AllProductsInfo.Allcatogeries.push(data[i].category);
          AllProductsInfo.minPriceEver = Math.min(AllProductsInfo.minPriceEver,data[i].price);
          AllProductsInfo.maxPriceEver = Math.max(AllProductsInfo.maxPriceEver,data[i].price);
        }
        
        setFilters((obj) => {
          const setUpFilter = {
            ...obj,
            minPrice: AllProductsInfo.minPriceEver,
            maxPrice: AllProductsInfo.maxPriceEver
          }

          return setUpFilter;
        });
        setProducts([...data , products]); // to add to the intial products
        setLoading(false);

      } catch(err) {
        setIsError(err.message);
      }
    }

    getProducts();

  }, [])

let content;
if (!IsError) {
    if (Loading) {
        content = <p>Loading...</p>;
    } else {
        content = (
            <>
                <NavBar products={products} setProducts={setProducts} />
                <ProductList
                    query={query}
                    filters={filters}
                    products={products}
                    setProducts={setProducts}
                />
            </>
        );
    }
} else {
    content = <p>Something went wrong. Please try again later.</p>;
}

return <div>{content}</div>;

}
